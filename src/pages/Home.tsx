import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/00925000-7777-447a-bd8f-7fff4ade14d2.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Сад" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(28,55,20,0.72) 0%, rgba(28,55,20,0.3) 50%, rgba(180,100,40,0.25) 100%)",
            }}
          />
        </div>

        <div
          className="absolute top-24 right-12 w-64 h-64 opacity-20 blob-shape animate-float"
          style={{ background: "hsl(var(--sage))" }}
        />

        <div className="relative z-10 container max-w-5xl mx-auto px-6 py-24">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8 animate-fade-up opacity-0 delay-100"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#f0e8d8",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span>🌱</span>
            <span style={{ fontFamily: "'Golos Text', sans-serif" }}>Живая энциклопедия садовода</span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-light leading-none mb-6 animate-fade-up opacity-0 delay-200"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f5ede0" }}
          >
            Сад,
            <br />
            <em className="font-semibold italic" style={{ color: "#d4a86a" }}>
              который
            </em>
            <br />
            живёт
          </h1>

          <p
            className="text-lg md:text-xl max-w-md mb-10 leading-relaxed animate-fade-up opacity-0 delay-300"
            style={{ color: "rgba(245,237,224,0.82)", fontFamily: "'Golos Text', sans-serif" }}
          >
            Советы, галерея и сезонный календарь для тех, кто любит землю и хочет собирать богатый урожай каждый год.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-400">
            <button
              onClick={() => navigate("/calendar")}
              className="px-8 py-3.5 rounded-full text-base font-medium transition-all hover:scale-105"
              style={{
                background: "hsl(var(--terra))",
                color: "#fff",
                fontFamily: "'Golos Text', sans-serif",
                boxShadow: "0 8px 30px rgba(200,100,40,0.4)",
              }}
            >
              Открыть календарь
            </button>
            <button
              onClick={() => navigate("/garden")}
              className="px-8 py-3.5 rounded-full text-base font-medium transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#f5ede0",
                fontFamily: "'Golos Text', sans-serif",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              Советы садовода
            </button>
          </div>

          <div className="flex flex-wrap gap-8 mt-16 animate-fade-up opacity-0 delay-500">
            {[
              { val: "150+", label: "советов" },
              { val: "12", label: "месяцев в календаре" },
              { val: "4", label: "сезона ухода" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#d4a86a" }}
                >
                  {s.val}
                </div>
                <div className="text-sm" style={{ color: "rgba(245,237,224,0.65)", fontFamily: "'Golos Text', sans-serif" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ color: "rgba(245,237,224,0.5)" }}>
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20" style={{ background: "hsl(var(--parchment))" }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>Разделы сайта</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
              Всё, что нужно{" "}
              <em className="italic" style={{ color: "hsl(var(--terra))" }}>садоводу</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { path: "/gallery", emoji: "🖼️", title: "Галерея", desc: "Фотографии сада и огорода в разные сезоны года", bg: "#dff2df", accent: "#2f6b3e" },
              { path: "/garden", emoji: "🌸", title: "Советы по саду", desc: "Деревья, кустарники, цветы и плодовый сад — живые истории от опытных садоводов", bg: "#fff0f4", accent: "#a0364e" },
              { path: "/vegetable", emoji: "🥕", title: "Советы по огороду", desc: "Томаты, огурцы, картофель и зелень — проверенные способы получить богатый урожай", bg: "#fef3e2", accent: "#c05621" },
              { path: "/landscape", emoji: "🏡", title: "Дизайн участка", desc: "Стили, идеи и концепции для создания красивого и функционального пространства", bg: "#ebf8ff", accent: "#2c5282" },
              { path: "/calendar", emoji: "📅", title: "Календарь посева", desc: "Сезонный планировщик: что сажать и убирать каждый месяц", bg: "#f0fff4", accent: "#276749" },
            ].map((card) => (
              <button
                key={card.path}
                onClick={() => navigate(card.path)}
                className="text-left rounded-2xl p-6"
                style={{
                  background: card.bg,
                  border: `1px solid ${card.accent}20`,
                  boxShadow: `0 4px 20px ${card.accent}08`,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 36px ${card.accent}18`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${card.accent}08`; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: `${card.accent}12`, border: `1px solid ${card.accent}20` }}>
                  {card.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>
                  {card.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}