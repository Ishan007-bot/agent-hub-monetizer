import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
            <span className="font-bold">Lovable AI</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
              Marketplace
            </Link>
            <Link to="/producer" className="text-sm font-medium transition-colors hover:text-primary">
              Producer
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-9 w-9 px-0"
          >
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link to="/login">
            <Button variant="ghost" className="text-sm font-medium">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 