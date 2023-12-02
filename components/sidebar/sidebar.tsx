"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const query = usePathname();

  const isActive = (route: string) => {
    return query.indexOf(route) > -1;
  };

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-medium tracking-tight">Menu</h2>
          <div className="space-y-1">
            <NextLink href="/panel/products">
              <Button
                variant={isActive("products") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Productos
              </Button>
            </NextLink>
            <NextLink href="/panel/warranties">
              <Button
                variant={isActive("warranties") ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Garantias
              </Button>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
