"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { Icons } from "../Icons";

interface GoogleButtonProps {}

export const GoogleButton: React.FC<GoogleButtonProps> = ({}) => {
  const login = () => {
    const supabase = createClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Button onClick={() => login()}>
      Sign with
      <Icons.google className="h-4 ml-2 " />
    </Button>
  );
};
