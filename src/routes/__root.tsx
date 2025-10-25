import { createRootRoute, Outlet } from "@tanstack/react-router";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
