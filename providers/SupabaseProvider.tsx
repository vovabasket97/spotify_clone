"use client";

import { useState, FC } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() => createClientComponentClient<Database>());

  return <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>;
};

export default SupabaseProvider;
