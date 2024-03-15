"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { warrantySchema } from "@/components/warranties/data/schema";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWarranty } from "@/utils/actions";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function Actions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const warranty = warrantySchema.parse(row.original);

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteWarranty,
    onSuccess: () => {
      toast({
        description: "Your warranty has been successfully deleted.",
      });
      queryClient.invalidateQueries({ queryKey: ["warranties"] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(warranty.id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
