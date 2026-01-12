import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
    <div className="container flex h-16 items-center justify-between">
      <NavLink to="/" className="text-sm font-medium tracking-tight text-foreground hover:text-foreground/80">
        Minimal Crypto Journal
      </NavLink>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} className="hover:text-foreground">
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden">
        <Drawer shouldScaleBackground={false}>
          <DrawerTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border bg-background px-2 py-1 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
           >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation</span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="pb-6">
            <nav className="flex flex-col gap-3 p-4 text-sm text-foreground">
              {navItems.map((item) => (
                <DrawerClose asChild key={item.href}>
                  <NavLink to={item.href} className="hover:text-primary">
                    {item.label}
                  </NavLink>
                </DrawerClose>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  </header>
);
