"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { searchByRegistration } from "@/utils/actions";
import { useToast } from "@/components/ui/use-toast";
import { Database } from "@/utils/types/supabase";
import { Warranty, warrantySchema } from "@/components/warranties/data/schema";
import z from "zod";
import moment from "moment";

const Page: React.FC<{}> = ({}) => {
  const { toast } = useToast();
  const [results, setResults] = useState<Warranty[]>();
  const [registration, setRegistration] = useState("");
  const handleSearch = async () => {
    if (!registration) {
      toast({
        description: "¡Cuidado! :p",
        variant: "destructive",
        title: "La placa es requerida para la búsqueda.",
      });
      return;
    }
    const results = await searchByRegistration(registration);
    if (!results.data?.length) {
      toast({
        description: ":(",
        variant: "destructive",
        title: "No se encontraron resultados.",
      });
      return;
    }
    const parsedData = z.array(warrantySchema).parse(results.data);
    setResults(parsedData);
  };
  return (
    <div className="h-full w-full flex">
      <div className="flex w-full justify-center flex-col items-center space-y-4">
        <div className="flex md:w-4/6 lg:1/3 space-x-4 w-full mb-6">
          <Input
            placeholder="Buscar por placa..."
            maxLength={7}
            onInput={(e: React.FormEvent<HTMLInputElement>) =>
              setRegistration(e.currentTarget.value)
            }
          />
          <Button onClick={handleSearch}>Buscar</Button>
        </div>
        {results?.length && (
          <div className="flex flex-col gap-4 md:w-4/6 lg: 1/3 w-full ">
            {results.map((warranty) => (
              <div
                key={warranty.id}
                className="text-sm text-gray-500 rounded-lg border p-4 flex justify-between items-center"
              >
                <div className="text-gray-800 font-bold dark:text-white">
                  {warranty.product.name}
                </div>
                <div className="flex flex-col items-end">
                  <p>
                    Expiración:
                    {moment(warranty.expires_at).format("DD/MM/YYYY")}
                  </p>
                  <p>
                    Fecha de registro:
                    {moment(warranty.created_at).format("DD/MM/YYYY")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
