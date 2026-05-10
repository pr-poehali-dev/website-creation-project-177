import Layout from "@/components/Layout";

const LANDSCAPE_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/68ae7399-7c40-4eae-9483-16d48fb9eba3.jpg";
const COTTAGE_IMG = "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/08aded38-1295-46b6-9d2d-12979526281f.jpg";

const STYLES = [
  {
    title: "Английский коттедж",
    desc: "Романтичные клумбы, вьющиеся розы, деревянные арки и естественный беспорядок, который выглядит идеально.",
    color: "#a0364e",
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/13d3decb-a223-4efe-b9b7-378b1627da70.jpg",
  },
  {
    title: "Японский минимализм",
    desc: "Камни, мох, вода и тишина. Каждый элемент на своём месте. Пространство для созерцания.",
    color: "#2c5282",
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/2593682c-1ec3-4ded-8c30-40047a43136f.jpg",
  },
  {
    title: "Прованский стиль",
    desc: "Лаванда, тимьян, выгоревшие краски, глиняные горшки и терракота. Юг Франции у вас дома.",
    color: "#7c3aed",
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/488ca3c1-9d3d-4d01-ba9f-d1485c06a562.jpg",
  },
  {
    title: "Природный сад",
    desc: "Дикие травы, луговые цветы, без строгих форм. Максимальная польза для пчёл и бабочек.",
    color: "#276749",
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/175a7e52-5881-4233-b92d-4af9510004f1.jpg",
  },
  {
    title: "Регулярный стиль",
    desc: "Симметрия, стриженые бордюры, геометрические клумбы. Классика версальских парков.",
    color: "#1a6b5a",
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/338b1a52-800b-4a5e-af71-4305eb2593fa.jpg",
  },
  {
    title: "Альпийская горка",
    desc: "Камни, карликовые хвойные, суккуленты и почвопокровные. Рельеф и природная фактура.",
    color: "#744210",
    image: "https://cdn.poehali.dev/projects/1a543a21-315b-4420-99b6-2c1390619624/files/95fc2454-1935-4778-9eb5-754dbc33a4b5.jpg",
  },
];

const ELEMENTS = [
  { emoji: "🚿", title: "Водоёмы и ручьи", desc: "Небольшой пруд или журчащий ручей превращают участок в живой оазис. Привлекают птиц и создают атмосферу покоя." },
  { emoji: "🪵", title: "Дорожки и мощение", desc: "Природный камень, деревянные спилы или гравий — выбор материала задаёт настроение всему саду." },
  { emoji: "🌲", title: "Живые изгороди", desc: "Тис, самшит, боярышник — зелёные стены делят пространство на уютные комнаты под открытым небом." },
  { emoji: "💡", title: "Садовое освещение", desc: "Правильно расставленные фонари и гирлянды превращают сад в волшебное место с наступлением темноты." },
  { emoji: "🪑", title: "Зоны отдыха", desc: "Беседка, качели, гамак или патио с мощением — каждая семья найдёт своё любимое место для отдыха." },
  { emoji: "🌺", title: "Вертикальное озеленение", desc: "Клематис, плетистые розы, хмель на опорах — используйте третье измерение для красоты и тени." },
];

const PROJECTS = [
  {
    title: "Маленький участок 6 соток",
    desc: "Как разместить всё необходимое на небольшой площади: зону отдыха, огород и декоративный сад без ощущения тесноты.",
    emoji: "📐",
    accent: "#38a169",
    bg: "#e6f4ea",
    tags: ["6 соток", "Зонирование", "Малый сад"],
  },
  {
    title: "Сад без ухода",
    desc: "Растения, которые растут сами: засухоустойчивые многолетники, почвопокровные и дикорастущие виды для тех, кто бывает на даче редко.",
    emoji: "🌾",
    accent: "#c05621",
    bg: "#fef3e2",
    tags: ["Многолетники", "Минимум ухода", "Засухоустойчивые"],
  },
  {
    title: "Детский сад — безопасно и интересно",
    desc: "Мягкие покрытия, нет ядовитых растений, игровые зоны, домик на дереве и грядка где дети могут сами что-нибудь вырастить.",
    emoji: "🎪",
    accent: "#2c5282",
    bg: "#ebf8ff",
    tags: ["Дети", "Безопасность", "Игровые зоны"],
  },
];

export default function Landscape() {
  return (
    <Layout>
      {/* HERO */}
      <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        <img src={LANDSCAPE_IMG} alt="Ландшафтный дизайн" className="w-full h-full object-cover absolute inset-0" style={{ minHeight: "480px" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,20,0.78) 0%, rgba(10,40,20,0.35) 60%, transparent 100%)" }} />
        <div className="relative z-10 container max-w-6xl mx-auto px-6 pt-36 pb-20">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "rgba(200,240,200,0.7)", fontFamily: "'Golos Text', sans-serif" }}>
            Ландшафтный дизайн
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-none mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f5ede0" }}>
            Участок как{" "}
            <em className="italic font-semibold" style={{ color: "#d4a86a" }}>произведение</em>
          </h1>
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: "rgba(245,237,224,0.78)", fontFamily: "'Golos Text', sans-serif" }}>
            Идеи, стили и решения для создания красивого, функционального и живого пространства вокруг вашего дома
          </p>
        </div>
      </div>

      {/* СТИЛИ САДОВ */}
      <section className="py-20 px-6" style={{ background: "hsl(var(--cream))" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>Выберите свой стиль</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
              Стили{" "}
              <em className="italic" style={{ color: "hsl(var(--moss))" }}>ландшафтного дизайна</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STYLES.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "white",
                  border: `1px solid ${s.color}20`,
                  boxShadow: `0 4px 20px ${s.color}0a`,
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px ${s.color}28`;
                  const img = (e.currentTarget as HTMLElement).querySelector("img");
                  if (img) img.style.transform = "scale(1.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${s.color}0a`;
                  const img = (e.currentTarget as HTMLElement).querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* Фото */}
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.6s ease" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${s.color}cc 0%, transparent 55%)` }}
                  />
                  <h3
                    className="absolute bottom-0 left-0 px-5 pb-4 text-xl font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "white", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
                  >
                    {s.title}
                  </h3>
                </div>
                {/* Описание */}
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ВДОХНОВЕНИЕ — ФОТО */}
      <section className="py-0" style={{ background: "hsl(var(--parchment))" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "420px" }}>
          <div className="relative overflow-hidden" style={{ minHeight: "380px" }}>
            <img src={COTTAGE_IMG} alt="Коттеджный сад" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ background: "#a0364e", color: "white", fontFamily: "'Golos Text', sans-serif" }}>Английский стиль</span>
              <h3 className="text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}>Романтика коттеджного сада</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 md:p-16" style={{ background: "hsl(var(--forest))" }}>
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>С чего начать</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f5ede0" }}>
              Три шага к красивому участку
            </h2>
            {[
              { num: "01", text: "Определите стиль — он задаст характер всему саду" },
              { num: "02", text: "Составьте план зонирования на бумаге или схеме" },
              { num: "03", text: "Начните с долговечных элементов: дорожки, живые изгороди, деревья" },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4 mb-5">
                <span className="text-2xl font-light flex-shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#d4a86a" }}>{step.num}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "rgba(240,235,220,0.75)", fontFamily: "'Golos Text', sans-serif" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭЛЕМЕНТЫ САДА */}
      <section className="py-20 px-6" style={{ background: "hsl(var(--cream))" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>Детали, которые меняют всё</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
              Ключевые{" "}
              <em className="italic" style={{ color: "hsl(var(--terra))" }}>элементы сада</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ELEMENTS.map((el, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-4"
                style={{
                  background: "white",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 4px 16px rgba(40,60,20,0.05)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <span className="text-3xl flex-shrink-0 mt-1">{el.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>{el.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОЕКТЫ */}
      <section className="py-20 px-6" style={{ background: "hsl(var(--parchment))" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}>Идеи для вашего участка</p>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>
              Готовые{" "}
              <em className="italic" style={{ color: "hsl(var(--moss))" }}>концепции</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: `1px solid ${p.accent}20`,
                  boxShadow: `0 6px 24px ${p.accent}10`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${p.accent}20`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 24px ${p.accent}10`; }}
              >
                <div className="px-6 pt-6 pb-4 flex items-center gap-4" style={{ background: p.bg }}>
                  <span className="text-4xl">{p.emoji}</span>
                  <h3 className="text-lg font-semibold leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--bark))" }}>{p.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif" }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: p.bg, color: p.accent, fontFamily: "'Golos Text', sans-serif", border: `1px solid ${p.accent}25` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}