import { useState } from "react";
import Layout from "@/components/Layout";

const TIPS = [
  {
    emoji: "💧",
    title: "Полив ранним утром",
    text: "Поливайте растения в 6–8 утра. Вода успевает впитаться до жары, а листья успевают просохнуть, предотвращая грибковые болезни.",
    tag: "Уход",
    accent: "#4a9fd4",
    bg: "linear-gradient(135deg, #e8f4fd 0%, #d0eaf8 100%)",
    iconBg: "#bee3f8",
  },
  {
    emoji: "🌿",
    title: "Мульчирование — секрет успеха",
    text: "Слой мульчи 5–7 см из соломы или коры сохраняет влагу, подавляет сорняки и постепенно питает почву. Лучшее вложение для огородника.",
    tag: "Почва",
    accent: "#38a169",
    bg: "linear-gradient(135deg, #e6f4ea 0%, #d0edda 100%)",
    iconBg: "#c3e6cb",
  },
  {
    emoji: "🪱",
    title: "Дружите с червями",
    text: "Дождевые черви — лучшие помощники. Рыхлите почву аккуратно, не используйте хлорсодержащие удобрения и добавляйте компост для их привлечения.",
    tag: "Экология",
    accent: "#c05621",
    bg: "linear-gradient(135deg, #fef3e2 0%, #fde8c4 100%)",
    iconBg: "#fbd38d",
  },
  {
    emoji: "🌼",
    title: "Компаньонные посадки",
    text: "Базилик рядом с томатами отпугивает тлю. Бархатцы защищают от нематод. Укроп привлекает полезных насекомых — природная защита без химии.",
    tag: "Советы",
    accent: "#b7410e",
    bg: "linear-gradient(135deg, #fff0f0 0%, #fde0e0 100%)",
    iconBg: "#fed7d7",
  },
  {
    emoji: "✂️",
    title: "Пасынкование томатов",
    text: "Удаляйте пасынки утром в сухую погоду, когда они не длиннее 5 см. Оставляйте пенёк 1 см — это предотвратит повторный рост и убережёт от болезней.",
    tag: "Агротехника",
    accent: "#dd6b20",
    bg: "linear-gradient(135deg, #fff5eb 0%, #fde8d0 100%)",
    iconBg: "#fbd0a8",
  },
  {
    emoji: "🌧️",
    title: "Сбор дождевой воды",
    text: "Дождевая вода мягкая и не содержит хлора — растения её обожают. Установите бочку под водосток: 200 л воды хватает на 2–3 полива среднего огорода.",
    tag: "Полив",
    accent: "#2b6cb0",
    bg: "linear-gradient(135deg, #ebf8ff 0%, #d5effc 100%)",
    iconBg: "#bee3f8",
  },
  {
    emoji: "🌱",
    title: "Правило севооборота",
    text: "Не сажайте одну культуру на одно место два года подряд. Чередование культур снижает риск болезней и восстанавливает питательные вещества в почве.",
    tag: "Агротехника",
    accent: "#276749",
    bg: "linear-gradient(135deg, #f0fff4 0%, #d5f5e3 100%)",
    iconBg: "#c3fae8",
  },
  {
    emoji: "🧪",
    title: "Проверяйте кислотность почвы",
    text: "pH 6.0–7.0 — оптимальный диапазон для большинства овощей. Добавьте доломитовую муку для снижения кислотности или торф для её повышения.",
    tag: "Почва",
    accent: "#553c9a",
    bg: "linear-gradient(135deg, #faf5ff 0%, #ede0fa 100%)",
    iconBg: "#e9d8fd",
  },
  {
    emoji: "🐛",
    title: "Биологическая защита",
    text: "Высадите бархатцы и настурцию по периметру грядок — они отпугивают вредителей. Золотистые нематоды помогут справиться с проволочником в почве.",
    tag: "Защита",
    accent: "#276749",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    iconBg: "#bbf7d0",
  },
];

const CATEGORIES = ["Все", "Уход", "Почва", "Полив", "Агротехника", "Экология", "Советы", "Защита"];

export default function Tips() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === "Все" ? TIPS : TIPS.filter((t) => t.tag === activeCategory);

  return (
    <Layout>
      {/* HEADER */}
      <div
        className="pt-28 pb-16 px-6"
        style={{ background: "linear-gradient(180deg, hsl(40,35%,93%) 0%, hsl(var(--cream)) 100%)" }}
      >
        <div className="container max-w-6xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}
          >
            Советы садовода
          </p>
          <h1
            className="text-5xl md:text-7xl font-light mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}
          >
            Мудрость{" "}
            <em className="italic" style={{ color: "hsl(var(--moss))" }}>
              из опыта
            </em>
          </h1>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}
          >
            Проверенные советы от опытных садоводов — для тех, кто хочет вырастить богатый урожай без лишних хлопот
          </p>
        </div>
      </div>

      <section className="py-12 px-6" style={{ background: "hsl(var(--cream))" }}>
        <div className="container max-w-6xl mx-auto">

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Golos Text', sans-serif",
                    background: isActive ? "hsl(var(--forest))" : "hsl(var(--parchment))",
                    color: isActive ? "hsl(var(--cream))" : "hsl(var(--bark))",
                    border: `1px solid ${isActive ? "transparent" : "hsl(var(--border))"}`,
                    boxShadow: isActive ? "0 4px 16px rgba(30,70,20,0.25)" : "none",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tip, i) => {
              const isOpen = expanded === i;
              return (
                <div
                  key={i}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    background: tip.bg,
                    border: `1px solid ${tip.accent}22`,
                    boxShadow: isOpen
                      ? `0 16px 48px ${tip.accent}30`
                      : `0 4px 16px ${tip.accent}12`,
                    transform: isOpen ? "scale(1.02)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Цветная полоска сверху */}
                  <div
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${tip.accent}, ${tip.accent}88)` }}
                  />

                  <div className="p-6">
                    {/* Иконка + тег */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                        style={{
                          background: tip.iconBg,
                          boxShadow: `0 4px 12px ${tip.accent}20`,
                          transition: "transform 0.3s ease",
                          transform: isOpen ? "rotate(-5deg) scale(1.1)" : "rotate(0deg) scale(1)",
                        }}
                      >
                        {tip.emoji}
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full mt-1"
                        style={{
                          background: tip.accent + "18",
                          color: tip.accent,
                          fontFamily: "'Golos Text', sans-serif",
                          border: `1px solid ${tip.accent}30`,
                        }}
                      >
                        {tip.tag}
                      </span>
                    </div>

                    {/* Заголовок */}
                    <h3
                      className="text-xl font-semibold mb-3 leading-snug"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "hsl(var(--bark))",
                        fontSize: "1.25rem",
                      }}
                    >
                      {tip.title}
                    </h3>

                    {/* Текст — всегда видимый */}
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        fontFamily: "'Golos Text', sans-serif",
                      }}
                    >
                      {tip.text}
                    </p>

                    {/* Разворачиваемая подсказка */}
                    <div
                      style={{
                        maxHeight: isOpen ? "120px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      <div
                        className="mt-4 pt-4 text-xs leading-relaxed"
                        style={{
                          borderTop: `1px dashed ${tip.accent}40`,
                          color: tip.accent,
                          fontFamily: "'Golos Text', sans-serif",
                        }}
                      >
                        💬 <em>Совет от практика:</em> попробуйте применить этот метод уже в следующем сезоне — результат не заставит себя ждать.
                      </div>
                    </div>

                    {/* Кнопка развернуть */}
                    <div
                      className="flex items-center gap-1.5 mt-4 text-xs font-medium"
                      style={{ color: tip.accent, fontFamily: "'Golos Text', sans-serif" }}
                    >
                      <span>{isOpen ? "Свернуть" : "Подробнее"}</span>
                      <span
                        style={{
                          display: "inline-block",
                          transition: "transform 0.3s ease",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        ↓
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🌱</p>
              <p style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>
                В этой категории пока нет советов
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
