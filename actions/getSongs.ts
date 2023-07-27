import { Song } from "@/types";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase.from("songs").select("*").order("created_at", { ascending: false });

  if (error) console.error(error);

  return (data as any) || [];
};

export default getSongs;
