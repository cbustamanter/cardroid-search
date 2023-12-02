import React from "react";
import { ModeToggle } from "./ModeToggle";
import AuthButton from "../AuthButton";
import { Bot } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-end gap-2">
            <Bot size={32} />
            <span className="hidden font-bold sm:inline-block">CarDroid</span>
          </div>
          <div className="flex">
            <AuthButton />
            <ModeToggle />
          </div>
        </div>
      </header>
      {children}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://github.com/cbustamanter"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            CBR
          </a>
        </p>
      </footer>
    </div>
  );
};
