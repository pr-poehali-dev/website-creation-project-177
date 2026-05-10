import Layout from "@/components/Layout";

const HERO_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/00925000-7777-447a-bd8f-7fff4ade14d2.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/8430761d-66e8-43b0-b4b5-2b28834e0df7.jpg";

const GALLERY_ITEMS = [
  { label: "Томаты черри", emoji: "🍅", bg: "#fde8dc", desc: "Июль — август" },
  { label: "Грядки в мае", emoji: "🌱", bg: "#dff2df", desc: "Весенний посев" },
  { label: "Сбор урожая", emoji: "🧺", bg: "#fef3dc", desc: "Осенняя уборка" },
  { label: "Тыквенное поле", emoji: "🎃", bg: "#fde8c8", desc: "Сентябрь" },
  { label: "Ароматные травы", emoji: "🌿", bg: "#e8f5e8", desc: "Базилик и укроп" },
  { label: "Осенний сад", emoji: "🍂", bg: "#f5ead8", desc: "Листопад" },
  { label: "Клубника", emoji: "🍓", bg: "#fde0e8", desc: "Июнь — урожай" },
  { label: "Подсолнухи", emoji: "🌻", bg: "#fffbd8", desc: "Середина лета" },
];

export default function Gallery() {
  return (
    <Layout>
      {/* HEADER */}
      <div className="pt-28 pb-14 px-6" style={{ background: "hsl(var(--parchment))" }}>
        <div className="container max-w-6xl mx-auto">
          <p
            className="text-sm uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}
          >
            Фотогалерея
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1
              className="text-5xl md:text-7xl font-light leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}
            >
              Живые
              <br />
              <em className="italic" style={{ color: "hsl(var(--terra))" }}>
                моменты сада
              </em>
            </h1>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}
            >
              Запечатлённые мгновения садового года — от первых ростков до осеннего урожая
            </p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="py-12 px-6" style={{ background: "hsl(var(--parchment))" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Реальное фото — большое */}
            <div
              className="gallery-item rounded-2xl overflow-hidden col-span-2 md:col-span-1 row-span-2"
              style={{ minHeight: "420px" }}
            >
              <img src={HERO_IMG} alt="Сад" className="w-full h-full object-cover" />
            </div>

            {GALLERY_ITEMS.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="gallery-item rounded-2xl flex flex-col items-center justify-center gap-3 p-6"
                style={{
                  background: item.bg,
                  minHeight: "160px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span className="text-5xl">{item.emoji}</span>
                <div className="text-center">
                  <span
                    className="block text-sm font-medium"
                    style={{ color: "hsl(var(--bark))", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="block text-xs mt-1"
                    style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}

            {/* Реальное фото — широкое */}
            <div className="gallery-item rounded-2xl overflow-hidden col-span-2" style={{ height: "240px" }}>
              <img src={GALLERY_IMG} alt="Урожай" className="w-full h-full object-cover" />
            </div>

            {GALLERY_ITEMS.slice(4).map((item, i) => (
              <div
                key={i}
                className="gallery-item rounded-2xl flex flex-col items-center justify-center gap-3 p-6"
                style={{
                  background: item.bg,
                  minHeight: "160px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span className="text-5xl">{item.emoji}</span>
                <div className="text-center">
                  <span
                    className="block text-sm font-medium"
                    style={{ color: "hsl(var(--bark))", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="block text-xs mt-1"
                    style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
