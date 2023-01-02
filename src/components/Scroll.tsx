import { useRouter } from "next/router";
import { useEffect } from "react";

export function Scroll({ children }) {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
}
