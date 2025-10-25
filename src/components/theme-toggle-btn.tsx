import { useAppStore } from "@/hooks/use-app-store";

export function ThemeToggleBtn() {
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="cursor-pointer rounded border px-4 py-2"
    >
      {theme}
    </button>
  );
}
