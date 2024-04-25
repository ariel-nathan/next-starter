export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex h-12 items-center justify-end">
        <p className="text-muted-foreground">
          &copy; Footer, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
