import { cn } from "@/lib/utils/cn";

export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "mb-2 mt-3 py-2 font-sans text-2xl font-medium underline decoration-gray-300 decoration-4 underline-offset-[6px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
