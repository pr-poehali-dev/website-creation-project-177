import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const TIPS = [
  {
    id: 1,
    author: "Василий Петрович",
    authorAge: "72 года, огородник",
    avatar: "👴",
    tag: "Полив",
    accent: "#2b7fc4",
    accentLight: "#e8f4fd",
    title: "Поливаю только утром — и никогда не болею",
    story: `Лет сорок уже огородничаю. Раньше поливал когда придётся — то вечером после работы, то в обед в жару. И всё время на помидорах фитофтора, на огурцах мучнистая роса.

Сосед Михалыч подсказал: поливай строго в 6 утра. Поначалу думал — блажь. Но попробовал. И знаешь — уже третий год без болезней на листьях. Вода впитывается, пока прохладно, а к полудню листья сухие.

Теперь встаю с петухами, и не жалею ни капли.`,
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/ef2813a3-8e79-4aa3-a767-cee72a5de715.jpg",
    emoji: "💧",
  },
  {
    id: 2,
    author: "Галина Фёдоровна",
    authorAge: "65 лет, дачница",
    avatar: "👵",
    tag: "Почва",
    accent: "#38a169",
    accentLight: "#e6f4ea",
    title: "Мульча спасла мою спину — и мой урожай",
    story: `Раньше я всё лето воевала с сорняками. Каждую неделю — пропалывай, рыхли, поливай. Спина болела страшно, колени ныли.

Дочка привезла из города книжку про природное земледелие. Там про мульчу написано. Накидала между рядами солому, слоем сантиметров семь.

Сорняков стало впятеро меньше. Земля под мульчой — живая, рыхлая, червей тьма. И влага держится — полив вдвое реже. Теперь без мульчи — ни шагу.`,
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/997d85f1-8331-40a1-881d-4ab30f49f242.jpg",
    emoji: "🌿",
  },
  {
    id: 3,
    author: "Николай Иванович",
    authorAge: "58 лет, фермер",
    avatar: "👨‍🌾",
    tag: "Томаты",
    accent: "#c05621",
    accentLight: "#fef3e2",
    title: "Пасынки удаляю — и томаты вырастают с кулак",
    story: `Когда только начинал с томатами, не понимал зачем вообще эти пасынки убирать. Ну растёт и растёт куст — больше листьев, больше плодов, думал я.

Первый год — кусты пышные, а помидоров мало и мелкие. Старый агроном объяснил: куст тратит силы на зелень, а не на плод.

На следующий год убрал все пасынки, оставил два стебля. Томаты — крупные, мясистые. Сейчас соседи спрашивают секрет. Отвечаю: просто убирайте лишнее.`,
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/dbec53ef-e57e-4ba3-a4d1-c049d9fb4210.jpg",
    emoji: "✂️",
  },
  {
    id: 4,
    author: "Тамара Степановна",
    authorAge: "70 лет, огородница",
    avatar: "👩‍🌾",
    tag: "Полив",
    accent: "#2c5282",
    accentLight: "#ebf8ff",
    title: "Дождевая бочка — моя главная помощница",
    story: `Вода у нас на даче из скважины — жёсткая, хлорированная. Розы желтели, рассада плохо шла. Тратила деньги на удобрения, а толку мало.

Муж поставил две бочки по 200 литров под крышей. После хорошего дождя — полные. Я ими стала поливать всё самое нежное: рассаду, клубнику, огурцы.

Разница — небо и земля. Листья тёмно-зелёные, рассада пошла в рост. Теперь и соседки попросили мужа бочки поставить.`,
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/a91a5292-c94a-414a-93e7-5f9fd74acc5c.jpg",
    emoji: "🌧️",
  },
  {
    id: 5,
    author: "Петрович с третьей улицы",
    authorAge: "61 год, огородник",
    avatar: "🧑‍🌾",
    tag: "Почва",
    accent: "#744210",
    accentLight: "#fef3e2",
    title: "Червей берегу как зеницу ока",
    story: `Сосед по весне сыпал химию мешками. Урожай у него первые два года — хороший. На третий — земля как асфальт, ни одного червяка.

Я пошёл другим путём. Компост из кухонных отходов, никакой химии. И знаешь — у меня под каждым кустом по десятку червяков. Земля рыхлится сама, без лопаты.

Агроном из соседнего района приезжал — сказал, что у меня живая почва. Горжусь этим больше, чем урожаем.`,
    image: "",
    emoji: "🪱",
  },
  {
    id: 6,
    author: "Зинаида Кузьминична",
    authorAge: "74 года, огородница",
    avatar: "👵",
    tag: "Огурцы",
    accent: "#276749",
    accentLight: "#f0fff4",
    title: "Огурцы вяжу вертикально — места меньше, урожай больше",
    story: `Всю жизнь пускала огурцы по земле. Грядки занимали полого участка. Плоды гнили на земле, собирать неудобно.

Внук показал в интернете вертикальные шпалеры. Я посмеялась — это что, цирк? Но сделала.

Оказалось — огурцы любят расти вверх. Хорошо продуваются, не болеют. На 2 метрах грядки вешаю теперь столько же, сколько раньше на 6. И собирать одно удовольствие.`,
    image: "",
    emoji: "🥒",
  },
];

const CATEGORIES = ["Все", "Полив", "Почва", "Томаты", "Огурцы", "Рассада"];

export default function Vegetable() {
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
        style={{ background: "linear-gradient(180deg, #f5f8e8 0%, hsl(var(--cream)) 100%)" }}
      >
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>
            Советы по огороду
          </p>
          <h1 className="text-5xl md:text-7xl font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
            Живой{" "}
            <em className="italic" style={{ color: "hsl(var(--terra))" }}>огород</em>
          </h1>
          <p className="text-base max-w-lg mx-auto" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>
            Честные истории про помидоры, огурцы, картошку и весь урожай — от тех, кто копает с утра до вечера
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
                    background: isActive ? "hsl(var(--terra))" : "hsl(var(--parchment))",
                    color: isActive ? "white" : "hsl(var(--bark))",
                    border: `1px solid ${isActive ? "transparent" : "hsl(var(--border))"}`,
                    boxShadow: isActive ? "0 4px 16px rgba(180,80,30,0.25)" : "none",
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
                      <span className="text-xs italic" style={{ color: tip.accent, fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}>«Проверено на собственном огороде»</span>
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
              <p className="text-5xl mb-4">{showFavOnly ? "🤍" : "🥕"}</p>
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
