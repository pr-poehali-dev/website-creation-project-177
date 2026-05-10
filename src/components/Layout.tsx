import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { path: "/", label: "Главная" },
  { path: "/gallery", label: "Галерея" },
  { path: "/garden", label: "Сад" },
  { path: "/vegetable", label: "Огород" },
  { path: "/landscape", label: "Дизайн участка" },
  { path: "/calendar", label: "Календарь" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--cream))" }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(250, 245, 235, 0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <span className="text-2xl leaf-decor">🌿</span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--forest))" }}
          >
            Сад & Огород
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="nav-link text-sm font-medium transition-colors"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  color: isActive ? "hsl(var(--terra))" : "hsl(var(--bark))",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "hsl(var(--forest))" }}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>

        {menuOpen && (
          <div
            className="absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4 animate-fade-in"
            style={{
              background: "rgba(250, 245, 235, 0.98)",
              borderBottom: "1px solid hsl(var(--border))",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setMenuOpen(false); }}
                className="text-left text-base font-medium"
                style={{ color: "hsl(var(--bark))", fontFamily: "'Golos Text', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="py-12 px-6 text-center" style={{ background: "hsl(var(--bark))" }}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🌿</span>
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#d4a86a" }}
          >
            Сад & Огород
          </span>
        </div>
        <p className="text-sm" style={{ color: "rgba(220,205,180,0.45)", fontFamily: "'Golos Text', sans-serif" }}>
          С любовью к земле и природе · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}