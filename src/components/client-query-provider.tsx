"use client";

import { queryClient } from "@/lib/react-query"; // Importe seu cliente de consulta
import { QueryClientProvider } from "@tanstack/react-query";

export default function ClientQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
