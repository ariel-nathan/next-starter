import { ThemeToggle } from "@/components/theme-toggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <h1 className="text-xl font-bold">Logo</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
