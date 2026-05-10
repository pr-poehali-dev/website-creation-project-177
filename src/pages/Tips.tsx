import Layout from "@/components/Layout";

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
  {
    emoji: "🌱",
    title: "Правило севооборота",
    text: "Не сажайте одну культуру на одно место два года подряд. Чередование культур снижает риск болезней и восстанавливает питательные вещества в почве.",
    tag: "Агротехника",
    tagColor: "bg-orange-100 text-orange-800",
  },
  {
    emoji: "🧪",
    title: "Проверяйте кислотность почвы",
    text: "pH 6.0–7.0 — оптимальный диапазон для большинства овощей. Добавьте доломитовую муку для снижения кислотности или торф для её повышения.",
    tag: "Почва",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    emoji: "🐛",
    title: "Биологическая защита",
    text: "Высадите бархатцы и настурцию по периметру грядок — они отпугивают вредителей. Золотистые нематоды помогут справиться с проволочником в почве.",
    tag: "Защита",
    tagColor: "bg-purple-100 text-purple-800",
  },
];

const CATEGORIES = ["Все", "Уход", "Почва", "Полив", "Агротехника", "Экология", "Советы", "Защита"];

export default function Tips() {
  return (
    <Layout>
      {/* HEADER */}
      <div
        className="pt-28 pb-16 px-6"
        style={{
          background: "linear-gradient(180deg, hsl(40,35%,93%) 0%, hsl(var(--cream)) 100%)",
        }}
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

      {/* CATEGORY FILTERS */}
      <section
        className="py-12 px-6"
        style={{ background: "hsl(var(--cream))" }}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:scale-105"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  background: cat === "Все" ? "hsl(var(--forest))" : "hsl(var(--parchment))",
                  color: cat === "Все" ? "hsl(var(--cream))" : "hsl(var(--bark))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {cat}
              </span>
            ))}
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
    </Layout>
  );
}
