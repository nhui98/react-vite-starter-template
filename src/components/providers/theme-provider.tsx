import { type PropsWithChildren, useEffect } from "react";

import { useAppStore } from "@/hooks/use-app-store";

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useAppStore((s) => s.theme);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}
