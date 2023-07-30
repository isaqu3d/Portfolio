"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Scroll({ children }) {
  const location = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
}
