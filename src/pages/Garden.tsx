import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const GARDEN_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/c8344d8a-5610-48cf-8bc0-20ef7000b13f.jpg";

const TIPS = [
  {
    id: 1,
    author: "Людмила Архиповна",
    authorAge: "67 лет, цветовод",
    avatar: "👩",
    tag: "Розы",
    accent: "#a0364e",
    accentLight: "#fff0f4",
    title: "Бархатцы — телохранители моих роз",
    story: `Двадцать лет страдала от нематод на клубнике и розах. Покупала всякую химию — помогало на год, потом опять.

Подруга из Краснодара написала: посади бархатцы по краю. Я посмеялась — цветочки против вредителей? Но попробовала.

Следующей весной — нематод в разы меньше. А сад стал красивее. Теперь бархатцы у меня везде. Природа умнее нас.`,
    image: "",
    emoji: "🌼",
  },
  {
    id: 2,
    author: "Сергей Михайлович",
    authorAge: "55 лет, садовод",
    avatar: "👨",
    tag: "Обрезка",
    accent: "#2f6b3e",
    accentLight: "#edf7f0",
    title: "Обрезаю яблони зимой — и они благодарят",
    story: `Пятнадцать лет боялся трогать яблони зимой. Думал — замёрзнут, заболеют. Обрезал по весне, когда уже всё цвело.

Агроном на выставке объяснил: зимняя обрезка — лучшая. Дерево спит, стресса меньше, раны заживают быстро.

Попробовал в феврале, по снегу. Урожай летом был вдвое лучше. Теперь каждый февраль — праздник обрезки.`,
    image: "",
    emoji: "✂️",
  },
  {
    id: 3,
    author: "Нина Васильевна",
    authorAge: "71 год, цветовод",
    avatar: "👵",
    tag: "Цветы",
    accent: "#6b3fa0",
    accentLight: "#f5f0ff",
    title: "Пионы сажаю только осенью — и никак иначе",
    story: `Пыталась посадить пионы весной три раза. Все три — не прижились. Уже думала, что у меня просто не растут.

Соседка Зинаида смеётся: ты что, пионы весной не сажают! Только в конце августа — сентябре. Им нужен холод, чтобы корни укоренились.

Посадила в сентябре. На следующий год — три огромных бутона. Теперь у меня целая пионовая аллея. Всё дело в сроках.`,
    image: GARDEN_IMG,
    emoji: "🌸",
  },
  {
    id: 4,
    author: "Борис Андреевич",
    authorAge: "63 года, садовод",
    avatar: "👴",
    tag: "Деревья",
    accent: "#5c4a1e",
    accentLight: "#fdf6e8",
    title: "Побелка стволов — не красота, а защита",
    story: `Раньше белил деревья по привычке, как все. Думал — традиция такая, красиво. Оказалось, за этим стоит настоящая наука.

Белим осенью, до морозов. Кора не трескается от перепадов температур. Зайцы и мыши не грызут. Солнечные ожоги весной не страшны.

Сосед перестал белить — потерял молодую яблоню. Я белю каждый октябрь. Деревьям уже по 30 лет, а стоят как новые.`,
    image: "",
    emoji: "🌳",
  },
  {
    id: 5,
    author: "Ольга Тимофеевна",
    authorAge: "60 лет, дачница",
    avatar: "👩‍🌾",
    tag: "Клубника",
    accent: "#b83250",
    accentLight: "#fff0f3",
    title: "Ус клубники — бесплатная рассада на весь сад",
    story: `Каждый год тратила деньги на новую рассаду клубники. А старые кусты выбрасывала, не понимая зачем они пускают усы.

Однажды просто оставила ус в земле. К осени — полноценный куст. Так я поняла: природа сама всё делает, надо только не мешать.

Теперь каждое лето выбираю лучшие кусты, закрепляю усы в горшочках прямо на грядке. К августу — 50 новых растений бесплатно.`,
    image: "",
    emoji: "🍓",
  },
  {
    id: 6,
    author: "Валентина Петровна",
    authorAge: "68 лет, садовод",
    avatar: "👩",
    tag: "Уход",
    accent: "#1a6b5a",
    accentLight: "#e8f7f3",
    title: "Хвойные мульчирую — и они зимуют без забот",
    story: `Первые три года все мои туи горели на весеннем солнце. Думала — плохой сорт. Покупала новые, они тоже горели.

Оказалось — проблема не в сорте. Весной хвоя начинает испарять воду, а корни ещё в мёрзлой земле. Растение сохнет изнутри.

Теперь мульчирую приствольные круги толстым слоем и притеняю нетканкой. Пять лет — ни одного ожога. Туи стоят зелёные круглый год.`,
    image: "",
    emoji: "🌲",
  },
];

const CATEGORIES = ["Все", "Розы", "Обрезка", "Цветы", "Деревья", "Клубника", "Уход"];

export default function Garden() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showFavOnly, setShowFavOnly] = useState(false);

  const toggleFav = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  const filtered = TIPS.filter((t) => {
    const catOk = activeCategory === "Все" || t.tag === activeCategory;
    const favOk = !showFavOnly || favorites.has(t.id);
    return catOk && favOk;
  });

  return (
    <Layout>
      <div
        className="pt-28 pb-16 px-6"
        style={{ background: "linear-gradient(180deg, #e8f5ee 0%, hsl(var(--cream)) 100%)" }}
      >
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>
            Советы по саду
          </p>
          <h1 className="text-5xl md:text-7xl font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
            Живой{" "}
            <em className="italic" style={{ color: "#2f6b3e" }}>сад</em>
          </h1>
          <p className="text-base max-w-lg mx-auto" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>
            Истории и советы про деревья, кустарники, цветы и плодовый сад — от тех, кто вырастил своими руками
          </p>
        </div>
      </div>

      <section className="py-10 px-6" style={{ background: "hsl(var(--cream))" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-10 justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)} className="px-5 py-2 rounded-full text-sm font-medium"
                  style={{
                    fontFamily: "'Golos Text', sans-serif",
                    background: isActive ? "#2f6b3e" : "hsl(var(--parchment))",
                    color: isActive ? "white" : "hsl(var(--bark))",
                    border: `1px solid ${isActive ? "transparent" : "hsl(var(--border))"}`,
                    boxShadow: isActive ? "0 4px 16px rgba(30,100,50,0.25)" : "none",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
            <button
              onClick={() => setShowFavOnly(!showFavOnly)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium ml-2"
              style={{
                fontFamily: "'Golos Text', sans-serif",
                background: showFavOnly ? "#fff0f0" : "hsl(var(--parchment))",
                color: showFavOnly ? "#c53030" : "hsl(var(--bark))",
                border: `1px solid ${showFavOnly ? "#feb2b2" : "hsl(var(--border))"}`,
                transition: "all 0.2s ease",
              }}
            >
              <Icon name="Heart" size={14} />
              Избранное
              {favorites.size > 0 && (
                <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold" style={{ background: "#c53030", color: "white" }}>
                  {favorites.size}
                </span>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((tip) => {
              const isFav = favorites.has(tip.id);
              return (
                <article key={tip.id} className="rounded-3xl overflow-hidden"
                  style={{ background: "white", border: `1px solid ${tip.accent}20`, boxShadow: `0 6px 32px ${tip.accent}12`, transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${tip.accent}22`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 32px ${tip.accent}12`; }}
                >
                  {tip.image ? (
                    <div className="relative overflow-hidden" style={{ height: "220px" }}>
                      <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" style={{ transition: "transform 0.6s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)" }} />
                      <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: tip.accent, color: "white", fontFamily: "'Golos Text', sans-serif" }}>{tip.tag}</span>
                      <button onClick={(e) => toggleFav(tip.id, e)} className="absolute top-3 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: isFav ? "#c53030" : "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", transform: isFav ? "scale(1.1)" : "scale(1)", transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)" }}>
                        <Icon name="Heart" size={16} style={{ color: isFav ? "white" : "#c53030" }} />
                      </button>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-between px-6 pt-5 pb-4" style={{ background: tip.accentLight }}>
                      <span className="text-5xl">{tip.emoji}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: tip.accent, color: "white", fontFamily: "'Golos Text', sans-serif" }}>{tip.tag}</span>
                        <button onClick={(e) => toggleFav(tip.id, e)} className="w-9 h-9 rounded-full flex items-center justify-center"
                          style={{ background: isFav ? "#c53030" : "rgba(255,255,255,0.9)", border: `1px solid ${isFav ? "#c53030" : "#e2e8f0"}`, transform: isFav ? "scale(1.1)" : "scale(1)", transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)" }}>
                          <Icon name="Heart" size={16} style={{ color: isFav ? "white" : "#c53030" }} />
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: tip.accentLight, border: `2px solid ${tip.accent}30` }}>{tip.avatar}</div>
                      <div>
                        <div className="text-sm font-semibold leading-none mb-0.5" style={{ color: "hsl(var(--bark))", fontFamily: "'Golos Text', sans-serif" }}>{tip.author}</div>
                        <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>{tip.authorAge}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>{tip.title}</h3>
                    <div className="text-sm leading-7 whitespace-pre-line" style={{ color: "hsl(var(--foreground))", fontFamily: "'Golos Text', sans-serif", opacity: 0.82 }}>{tip.story}</div>
                    <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: `1px dashed ${tip.accent}30` }}>
                      <span className="text-xs italic" style={{ color: tip.accent, fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}>«Проверено на собственном участке»</span>
                      <button onClick={(e) => toggleFav(tip.id, e)} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{ background: isFav ? "#fff0f0" : "hsl(var(--parchment))", color: isFav ? "#c53030" : "hsl(var(--muted-foreground))", border: `1px solid ${isFav ? "#feb2b2" : "hsl(var(--border))"}`, fontFamily: "'Golos Text', sans-serif", transition: "all 0.2s ease" }}>
                        <Icon name="Heart" size={12} />
                        {isFav ? "В избранном" : "Сохранить"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">{showFavOnly ? "🤍" : "🌱"}</p>
              <p style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>
                {showFavOnly ? "Вы пока не сохранили ни одного совета" : "В этой категории пока нет историй"}
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
