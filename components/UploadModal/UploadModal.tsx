"use client";

import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import uniqid from "uniqid";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import FileInput from "../UI/FileInput/FileInput";

import styles from "./UploadModal.module.scss";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onClose } = useUploadModal();
  const { user } = useUser();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChangeHandler = useCallback((open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitHandler: SubmitHandler<FieldValues> = async values => {
    console.log("VALUES", values);
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) return toast.error("Missing fields");

      const uniqID = uniqid();

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        return toast.error("Failed song upload");
      }

      const { data: imageData, error: imageError } = await supabaseClient.storage
        .from("images")
        .upload(`image-${values.title}-${uniqID}`, imageFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload");
      }

      const { error: supabaseError } = await supabaseClient.from("songs").insert({
        user_id: user.id,
        title: values.title,
        author: values.author,
        image_path: imageData.path,
        song_path: songData.path,
      });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song created");
      reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal title='Add a song' description='Upload an mp3 file' onChange={onChangeHandler} isOpen={isOpen}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        <Input id='title' disabled={isLoading} {...register("title", { required: true })} placeholder='Song title' />
        <Input id='author' disabled={isLoading} {...register("author", { required: true })} placeholder='Song author' />
        <FileInput
          label='Select a song file'
          id='song'
          type='file'
          disabled={isLoading}
          register={register("song", { required: true })}
          accept='.mp3'
        />
        <FileInput
          label='Select an image'
          id='image'
          type='file'
          disabled={isLoading}
          register={register("image", { required: true })}
          accept='image/*'
        />
        <Button disabled={isLoading} type='submit'>
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
