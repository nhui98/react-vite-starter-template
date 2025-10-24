import { createFileRoute } from "@tanstack/react-router";

import { HelloWorld } from "@/components/hello-world";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}
