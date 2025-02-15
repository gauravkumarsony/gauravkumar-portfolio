
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Blog", href: "#blog" },
    { name: "Study", href: "#study" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="glass px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-lg font-semibold">
            Portfolio
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="hidden md:inline-flex">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
