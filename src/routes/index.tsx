import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggleBtn } from "@/components/theme-toggle-btn";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ThemeToggleBtn />
    </div>
  );
}
