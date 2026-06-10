import { Link, useLocation } from "react-router-dom";
import { Code2, User, GraduationCap, Mail, Download } from "lucide-react";
import { Button } from "../components/ui/button";

const navItems = [
  { name: "About", path: "/", icon: User },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Contact", path: "/contact", icon: Mail },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
          <Code2 className="w-5 h-5" />
          <span className="font-semibold text-lg">Ighijjou</span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
          <Button
            variant="outline"
            size="sm"
            className="ml-2 gap-2 rounded-full"
            asChild
          >
            <a href="/CVMohamed_Ighijjou.pdf" download="CVMohamed_Ighijjou.pdf">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};