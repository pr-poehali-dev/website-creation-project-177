import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/00925000-7777-447a-bd8f-7fff4ade14d2.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/8430761d-66e8-43b0-b4b5-2b28834e0df7.jpg";

const SEASONS = ["Весна", "Лето", "Осень", "Зима"];

const CALENDAR_DATA: Record<string, { month: string; items: { name: string; emoji: string; action: string; color: string }[] }[]> = {
  Весна: [
    {
      month: "Март",
      items: [
        { name: "Томаты", emoji: "🍅", action: "Посев на рассаду", color: "#e07b54" },
        { name: "Перец", emoji: "🌶️", action: "Посев на рассаду", color: "#d94f3d" },
        { name: "Баклажаны", emoji: "🍆", action: "Посев на рассаду", color: "#7b5fa0" },
        { name: "Лук-порей", emoji: "🧅", action: "Посев на рассаду", color: "#8fb85c" },
      ],
    },
    {
      month: "Апрель",
      items: [
        { name: "Огурцы", emoji: "🥒", action: "Посев на рассаду", color: "#5a9e55" },
        { name: "Капуста", emoji: "🥬", action: "Высадка рассады", color: "#4a8c4a" },
        { name: "Морковь", emoji: "🥕", action: "Посев в открытый грунт", color: "#e8873a" },
        { name: "Редис", emoji: "🌱", action: "Посев в открытый грунт", color: "#c94068" },
      ],
    },
    {
      month: "Май",
      items: [
        { name: "Томаты", emoji: "🍅", action: "Высадка рассады", color: "#e07b54" },
        { name: "Тыква", emoji: "🎃", action: "Посев/высадка", color: "#d97b2a" },
        { name: "Зелень", emoji: "🌿", action: "Посев в открытый грунт", color: "#5aaa5a" },
        { name: "Картофель", emoji: "🥔", action: "Посадка", color: "#b8924a" },
      ],
    },
  ],
  Лето: [
    {
      month: "Июнь",
      items: [
        { name: "Огурцы", emoji: "🥒", action: "Уход, подкормка", color: "#5a9e55" },
        { name: "Томаты", emoji: "🍅", action: "Пасынкование", color: "#e07b54" },
        { name: "Клубника", emoji: "🍓", action: "Сбор урожая", color: "#d43e4c" },
        { name: "Горох", emoji: "🫛", action: "Сбор урожая", color: "#6aaa44" },
      ],
    },
    {
      month: "Июль",
      items: [
        { name: "Смородина", emoji: "🫐", action: "Сбор урожая", color: "#5a3d8a" },
        { name: "Огурцы", emoji: "🥒", action: "Сбор урожая", color: "#5a9e55" },
        { name: "Лук", emoji: "🧅", action: "Посев на зиму", color: "#b8924a" },
        { name: "Укроп", emoji: "🌿", action: "Посев", color: "#5aaa5a" },
      ],
    },
    {
      month: "Август",
      items: [
        { name: "Томаты", emoji: "🍅", action: "Сбор урожая", color: "#e07b54" },
        { name: "Перец", emoji: "🌶️", action: "Сбор урожая", color: "#d94f3d" },
        { name: "Капуста", emoji: "🥬", action: "Посев озимых", color: "#4a8c4a" },
        { name: "Малина", emoji: "🍇", action: "Сбор урожая", color: "#c94068" },
      ],
    },
  ],
  Осень: [
    {
      month: "Сентябрь",
      items: [
        { name: "Картофель", emoji: "🥔", action: "Уборка урожая", color: "#b8924a" },
        { name: "Свёкла", emoji: "🫚", action: "Уборка урожая", color: "#8b2252" },
        { name: "Морковь", emoji: "🥕", action: "Уборка урожая", color: "#e8873a" },
        { name: "Чеснок", emoji: "🧄", action: "Посадка озимого", color: "#c8a86a" },
      ],
    },
    {
      month: "Октябрь",
      items: [
        { name: "Тюльпаны", emoji: "🌷", action: "Посадка луковиц", color: "#d44060" },
        { name: "Деревья", emoji: "🌳", action: "Подготовка к зиме", color: "#5a7a40" },
        { name: "Земляника", emoji: "🍓", action: "Мульчирование", color: "#d43e4c" },
        { name: "Компост", emoji: "♻️", action: "Закладка компоста", color: "#8a6a3a" },
      ],
    },
    {
      month: "Ноябрь",
      items: [
        { name: "Инструменты", emoji: "🔧", action: "Чистка и хранение", color: "#7a7a7a" },
        { name: "Розы", emoji: "🌹", action: "Укрытие на зиму", color: "#c94068" },
        { name: "Газон", emoji: "🌾", action: "Последняя стрижка", color: "#7aaa4a" },
        { name: "Теплица", emoji: "🏠", action: "Подготовка к весне", color: "#4a9aaa" },
      ],
    },
  ],
  Зима: [
    {
      month: "Декабрь",
      items: [
        { name: "Семена", emoji: "🌱", action: "Ревизия и заказ", color: "#5aaa5a" },
        { name: "Инвентарь", emoji: "🛠️", action: "Ремонт и заточка", color: "#7a7a7a" },
        { name: "Снег", emoji: "❄️", action: "Накидать на гряды", color: "#9ab8d8" },
        { name: "Планы", emoji: "📐", action: "Планировка участка", color: "#6a8aaa" },
      ],
    },
    {
      month: "Январь",
      items: [
        { name: "Рассада", emoji: "🌿", action: "Планирование посева", color: "#5a9e55" },
        { name: "Удобрения", emoji: "🌾", action: "Заказ удобрений", color: "#b8924a" },
        { name: "Птицы", emoji: "🐦", action: "Подкормка птиц", color: "#8a6a4a" },
        { name: "Дерево", emoji: "🌳", action: "Защита от зайцев", color: "#5a7a40" },
      ],
    },
    {
      month: "Февраль",
      items: [
        { name: "Перец", emoji: "🌶️", action: "Ранний посев на рассаду", color: "#d94f3d" },
        { name: "Баклажаны", emoji: "🍆", action: "Ранний посев на рассаду", color: "#7b5fa0" },
        { name: "Сельдерей", emoji: "🥬", action: "Посев на рассаду", color: "#4a8c4a" },
        { name: "Обрезка", emoji: "✂️", action: "Обрезка сада по снегу", color: "#7a7a7a" },
      ],
    },
  ],
};

const TIPS = [
  {
    emoji: "💧",
    title: "Полив ранним утром",
    text: "Поливайте растения в 6–8 утра. Вода успевает впитаться до жары, а листья успевают просохнуть, предотвращая грибковые болезни.",
    tag: "Уход",
    tagColor: "bg-blue-100 text-blue-800",
  },
  {
    emoji: "🌿",
    title: "Мульчирование — секрет успеха",
    text: "Слой мульчи 5–7 см из соломы или коры сохраняет влагу, подавляет сорняки и постепенно питает почву. Лучшее вложение для огородника.",
    tag: "Почва",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    emoji: "🪱",
    title: "Дружите с червями",
    text: "Дождевые черви — лучшие помощники. Рыхлите почву аккуратно, не используйте хлорсодержащие удобрения и добавляйте компост для их привлечения.",
    tag: "Экология",
    tagColor: "bg-amber-100 text-amber-800",
  },
  {
    emoji: "🌡️",
    title: "Компаньонные посадки",
    text: "Базилик рядом с томатами отпугивает тлю. Бархатцы защищают от нематод. Укроп привлекает полезных насекомых — природная защита без химии.",
    tag: "Советы",
    tagColor: "bg-rose-100 text-rose-800",
  },
  {
    emoji: "✂️",
    title: "Пасынкование томатов",
    text: "Удаляйте пасынки утром в сухую погоду, когда они не длиннее 5 см. Оставляйте пенёк 1 см — это предотвратит повторный рост и убережёт от болезней.",
    tag: "Агротехника",
    tagColor: "bg-orange-100 text-orange-800",
  },
  {
    emoji: "🌧️",
    title: "Сбор дождевой воды",
    text: "Дождевая вода мягкая и не содержит хлора — растения её обожают. Установите бочку под водосток: 200 л воды хватает на 2–3 полива среднего огорода.",
    tag: "Полив",
    tagColor: "bg-cyan-100 text-cyan-800",
  },
];

const GALLERY_ITEMS = [
  { label: "Томаты черри", emoji: "🍅", bg: "#fde8dc" },
  { label: "Грядки в мае", emoji: "🌱", bg: "#dff2df" },
  { label: "Сбор урожая", emoji: "🧺", bg: "#fef3dc" },
  { label: "Тыквенное поле", emoji: "🎃", bg: "#fde8c8" },
];

type Section = "home" | "gallery" | "tips" | "calendar";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeSeason, setActiveSeason] = useState("Весна");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: Section) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--cream))" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(250, 245, 235, 0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl leaf-decor">🌿</span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--forest))" }}
          >
            Сад & Огород
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {(["home", "gallery", "tips", "calendar"] as Section[]).map((s) => {
            const labels = { home: "Главная", gallery: "Галерея", tips: "Советы", calendar: "Календарь" };
            return (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === s ? "text-[hsl(var(--terra))]" : ""
                }`}
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  color: activeSection === s ? "hsl(var(--terra))" : "hsl(var(--bark))",
                }}
              >
                {labels[s]}
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
            style={{ background: "rgba(250, 245, 235, 0.98)", borderBottom: "1px solid hsl(var(--border))" }}
          >
            {(["home", "gallery", "tips", "calendar"] as Section[]).map((s) => {
              const labels = { home: "Главная", gallery: "Галерея", tips: "Советы", calendar: "Календарь" };
              return (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="text-left text-base font-medium"
                  style={{ color: "hsl(var(--bark))", fontFamily: "'Golos Text', sans-serif" }}
                >
                  {labels[s]}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
              onClick={() => scrollTo("calendar")}
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
              onClick={() => scrollTo("tips")}
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

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24" style={{ background: "hsl(var(--parchment))" }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p
                className="text-sm uppercase tracking-widest mb-2"
                style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}
              >
                Фотогалерея
              </p>
              <h2
                className="text-5xl md:text-6xl font-light leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}
              >
                Живые
                <br />
                <em className="italic" style={{ color: "hsl(var(--terra))" }}>
                  моменты сада
                </em>
              </h2>
            </div>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}
            >
              Запечатлённые мгновения садового года — от первых ростков до осеннего урожая
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              className="gallery-item rounded-2xl overflow-hidden col-span-2 md:col-span-1 row-span-2"
              style={{ minHeight: "380px" }}
            >
              <img src={HERO_IMG} alt="Сад" className="w-full h-full object-cover" />
            </div>

            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="gallery-item rounded-2xl flex flex-col items-center justify-center gap-3 p-6"
                style={{
                  background: item.bg,
                  minHeight: i === 1 ? "220px" : "160px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span className="text-5xl">{item.emoji}</span>
                <span
                  className="text-sm font-medium text-center"
                  style={{ color: "hsl(var(--bark))", fontFamily: "'Golos Text', sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
            ))}

            <div className="gallery-item rounded-2xl overflow-hidden col-span-2" style={{ height: "220px" }}>
              <img src={GALLERY_IMG} alt="Урожай" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPS ── */}
      <section
        id="tips"
        className="py-24"
        style={{ background: "linear-gradient(180deg, hsl(var(--cream)) 0%, hsl(40,35%,93%) 100%)" }}
      >
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}
            >
              Советы садовода
            </p>
            <h2
              className="text-5xl md:text-6xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}
            >
              Мудрость{" "}
              <em className="italic" style={{ color: "hsl(var(--moss))" }}>
                из опыта
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPS.map((tip, i) => (
              <div
                key={i}
                className="tip-card rounded-2xl p-6"
                style={{
                  background: "white",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 4px 20px rgba(40,60,20,0.06)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{tip.emoji}</span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${tip.tagColor}`}
                    style={{ fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {tip.tag}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}
                >
                  {tip.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}
                >
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDAR ── */}
      <section id="calendar" className="py-24" style={{ background: "hsl(var(--forest))" }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}
            >
              Сезонный планировщик
            </p>
            <h2
              className="text-5xl md:text-6xl font-light mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--cream))" }}
            >
              Календарь{" "}
              <em className="italic" style={{ color: "#d4a86a" }}>
                посева и ухода
              </em>
            </h2>
            <p
              className="text-base max-w-lg mx-auto"
              style={{ color: "rgba(240,235,220,0.65)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Выберите сезон и узнайте, что сажать, пересаживать и убирать каждый месяц
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {SEASONS.map((season) => {
              const icons: Record<string, string> = { Весна: "🌸", Лето: "☀️", Осень: "🍂", Зима: "❄️" };
              const isActive = activeSeason === season;
              return (
                <button
                  key={season}
                  onClick={() => setActiveSeason(season)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all"
                  style={{
                    fontFamily: "'Golos Text', sans-serif",
                    background: isActive ? "hsl(var(--terra))" : "rgba(255,255,255,0.08)",
                    color: isActive ? "#fff" : "rgba(240,235,220,0.75)",
                    border: isActive ? "none" : "1px solid rgba(255,255,255,0.15)",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    boxShadow: isActive ? "0 8px 24px rgba(200,100,40,0.35)" : "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>{icons[season]}</span>
                  {season}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALENDAR_DATA[activeSeason].map((monthData, mi) => (
              <div
                key={mi}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <h3
                  className="text-2xl font-semibold mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8dbc5" }}
                >
                  {monthData.month}
                </h3>
                <div className="flex flex-col gap-3">
                  {monthData.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="cal-cell flex items-center gap-3 rounded-xl px-4 py-3"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: item.color + "22", border: `1px solid ${item.color}44` }}
                      >
                        {item.emoji}
                      </div>
                      <div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "#e8dbc5", fontFamily: "'Golos Text', sans-serif" }}
                        >
                          {item.name}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "rgba(220,205,180,0.55)", fontFamily: "'Golos Text', sans-serif" }}
                        >
                          {item.action}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-4"
            style={{ background: "rgba(180,130,60,0.15)", border: "1px solid rgba(180,130,60,0.3)" }}
          >
            <span className="text-4xl">💡</span>
            <div>
              <p
                className="font-medium mb-1"
                style={{ color: "#d4a86a", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                Совет сезона —{" "}
                {activeSeason === "Весна"
                  ? "начните с подготовки почвы"
                  : activeSeason === "Лето"
                  ? "не забывайте о регулярном поливе"
                  : activeSeason === "Осень"
                  ? "самое время для органической подкормки"
                  : "изучите новые сорта для следующего года"}
              </p>
              <p className="text-sm" style={{ color: "rgba(220,205,180,0.65)", fontFamily: "'Golos Text', sans-serif" }}>
                {activeSeason === "Весна"
                  ? "За 2 недели до посева внесите компост и перекопайте гряды. Хорошая почва — половина успеха урожая."
                  : activeSeason === "Лето"
                  ? "В жаркие дни поливайте обильно, но реже — глубокий полив развивает корневую систему."
                  : activeSeason === "Осень"
                  ? "Сидераты, посеянные после уборки урожая, обогатят почву азотом к весне."
                  : "Январь — идеальное время для изучения каталогов семян и планирования нового сезона."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
