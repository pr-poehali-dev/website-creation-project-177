import { useState } from "react";
import Layout from "@/components/Layout";

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

const SEASON_TIPS: Record<string, { short: string; full: string }> = {
  Весна: {
    short: "начните с подготовки почвы",
    full: "За 2 недели до посева внесите компост и перекопайте гряды. Хорошая почва — половина успеха урожая.",
  },
  Лето: {
    short: "не забывайте о регулярном поливе",
    full: "В жаркие дни поливайте обильно, но реже — глубокий полив развивает корневую систему.",
  },
  Осень: {
    short: "самое время для органической подкормки",
    full: "Сидераты, посеянные после уборки урожая, обогатят почву азотом к весне.",
  },
  Зима: {
    short: "изучите новые сорта для следующего года",
    full: "Январь — идеальное время для изучения каталогов семян и планирования нового сезона.",
  },
};

export default function Calendar() {
  const [activeSeason, setActiveSeason] = useState("Весна");

  return (
    <Layout>
      <div className="pt-28 pb-0" style={{ background: "hsl(var(--forest))" }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: "hsl(var(--sage))", fontFamily: "'Golos Text', sans-serif" }}
            >
              Сезонный планировщик
            </p>
            <h1
              className="text-5xl md:text-7xl font-light mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(var(--cream))" }}
            >
              Календарь{" "}
              <em className="italic" style={{ color: "#d4a86a" }}>
                посева и ухода
              </em>
            </h1>
            <p
              className="text-base max-w-lg mx-auto"
              style={{ color: "rgba(240,235,220,0.65)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Выберите сезон и узнайте, что сажать, пересаживать и убирать каждый месяц
            </p>
          </div>

          {/* Season tabs */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {SEASONS.map((season) => {
              const icons: Record<string, string> = { Весна: "🌸", Лето: "☀️", Осень: "🍂", Зима: "❄️" };
              const isActive = activeSeason === season;
              return (
                <button
                  key={season}
                  onClick={() => setActiveSeason(season)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium"
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

          {/* Calendar months */}
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

          {/* Seasonal tip */}
          <div
            className="mt-10 mb-0 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-4"
            style={{ background: "rgba(180,130,60,0.15)", border: "1px solid rgba(180,130,60,0.3)" }}
          >
            <span className="text-4xl">💡</span>
            <div>
              <p
                className="font-medium mb-1"
                style={{ color: "#d4a86a", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                Совет сезона — {SEASON_TIPS[activeSeason].short}
              </p>
              <p className="text-sm" style={{ color: "rgba(220,205,180,0.65)", fontFamily: "'Golos Text', sans-serif" }}>
                {SEASON_TIPS[activeSeason].full}
              </p>
            </div>
          </div>

          <div className="h-16" />
        </div>
      </div>
    </Layout>
  );
}
