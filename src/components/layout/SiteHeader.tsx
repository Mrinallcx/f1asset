import { NavLink } from "@/components/NavLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export const SiteHeader = () => (
  <header className="border-b bg-background/80 backdrop-blur">
    <div className="container flex h-16 items-center justify-between">
      <div className="text-sm font-medium tracking-tight text-muted-foreground">
        Minimal Crypto Journal
      </div>
      <nav className="flex items-center gap-6 text-sm text-muted-foreground">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} className="hover:text-foreground">
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);
