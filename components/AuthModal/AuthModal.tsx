"use client";

import { useCallback, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

import Modal from "../UI/Modal/Modal";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { isOpen, onClose } = useAuthModal();

  const onChangeHandler = useCallback(() => {
    if (!isOpen) return;
    onClose();
  }, [isOpen]);

  useEffect(() => {
    if (!session) return;

    router.refresh();
    onClose();
  }, [onClose, router, session]);

  return (
    <Modal title='Welcome back' description='Login to your account' isOpen={isOpen} onChange={onChangeHandler}>
      <Auth
        theme='dark'
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
