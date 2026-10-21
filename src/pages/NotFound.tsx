import { Link, useLocation } from "react-router";

const translations = {
  uk: {
    label: "Трохи не туди",
    title: "Цієї сторінки немає.",
    subtitle: "Але місце для тебе є.",
    description:
      "Можливо, посилання застаріло або в адресі є помилка. Повернімося до нашої спільноти.",
    home: "На головну",
    community: "Наша спільнота",
    belong: "Ти належиш сюди.",
    note: "Навіть якщо трохи заблукав на сайті.",
  },
  en: {
    label: "A little off track",
    title: "This page isn’t here.",
    subtitle: "But there’s a place for you.",
    description:
      "The link may be outdated, or there might be a typo in the address. Let’s head back to our community.",
    home: "Back to home",
    community: "Our community",
    belong: "You belong here.",
    note: "Even if you took a wrong turn on our website.",
  },
};

export default function NotFound() {
  const { pathname } = useLocation();

  const lang = /^\/uk(\/|$)/.test(pathname) ? "uk" : "en";
  const t = translations[lang];

  return (
    <section
      lang={lang}
      aria-labelledby="not-found-title"
      className="relative isolate overflow-hidden bg-bg px-6 py-20 font-body text-dark sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-12 h-64 w-64 rounded-full bg-yellow/30"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-orange">
            {t.label}
          </p>

          <h1
            id="not-found-title"
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
          >
            {t.title}

            <span className="mt-2 block italic text-green">{t.subtitle}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-dark/70">
            {t.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to={`/${lang}`}
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-orange px-6 py-3 font-semibold text-bg transition-colors hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
            >
              {t.home}
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to={`/${lang}/community`}
              className="inline-flex min-h-12 items-center justify-center border border-dark/25 px-6 py-3 font-semibold transition-colors hover:bg-green hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
            >
              {t.community}
            </Link>
          </div>
        </div>

        <div className="border border-dark/15 bg-card px-6 py-12 sm:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-dark/50">
            Youth to Jesus
          </p>

          <div
            aria-hidden="true"
            className="my-8 flex justify-center font-display text-[clamp(7rem,22vw,12rem)] font-bold leading-none tracking-tight"
          >
            <span>4</span>
            <span className="-rotate-12 text-orange">0</span>
            <span>4</span>
          </div>

          <div className="border-t border-dark/15 pt-6">
            <p className="font-display text-3xl font-bold">{t.belong}</p>

            <p className="mt-2 text-sm text-dark/60">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
