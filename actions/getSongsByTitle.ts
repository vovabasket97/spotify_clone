import { Song } from "@/types";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerActionClient({ cookies });

  if (!title) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase.from("songs").select("*").ilike("title", `%${title}%`).order("created_at", { ascending: false });

  if (error) console.error(error);

  return (data as any) || [];
};

export default getSongsByTitle;
