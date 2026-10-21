import { Link } from "react-router";
import { useLang } from "../LangContext";
import { t } from "../i18n";
import missionPic from "../assets/mission/000068100024.webp";

const missionPhoto = missionPic;

export default function Mission() {
  const { lang } = useLang();
  const tx = t[lang];
  const principles = [
    {
      num: "01",
      title: lang === "uk" ? "Слово Боже" : "God's Word",
      desc:
        lang === "uk"
          ? "Ми відкриваємо Біблію не як текст минулого, а як живе послання Бога сьогодні. Щотижня. Разом."
          : "We open the Bible not as a text from the past, but as God's living message today. Every week. Together.",
      accent: "text-orange",
    },
    {
      num: "02",
      title: lang === "uk" ? "Справжня спільнота" : "Authentic community",
      desc:
        lang === "uk"
          ? "Ми знаємо одне одного, підтримуємо, молимося і зростаємо разом — без потреби вдавати, що все ідеально."
          : "We know one another, offer support, pray, and grow together — without pretending everything is perfect.",
      accent: "text-green",
    },
    {
      num: "03",
      title: lang === "uk" ? "Віра в дії" : "Faith in action",
      desc:
        lang === "uk"
          ? "Наша місія не закінчується на зустрічах. Ми служимо людям, беремо відповідальність і вчимося дбати про свою спільноту."
          : "Our mission does not end at gatherings. We serve people, take responsibility, and learn to care for our community.",
      accent: "text-blue",
    },
  ];

  return (
    <>
      <section className="bg-bg">
        <div className="relative min-h-[34rem] overflow-hidden md:h-[72vh]">
          <img
            src={missionPhoto}
            alt=""
            className="h-full min-h-[34rem] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-transparent to-dark/70" />

          <div className="absolute right-6 top-6 rounded-full bg-yellow px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-dark md:right-12">
            {tx.mission_tag}
          </div>
          <div className="absolute bottom-8 left-6 md:bottom-10 md:left-14">
            <span className="text-xs font-bold uppercase tracking-widest text-white/65">
              {tx.quote_tag}
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.05fr_.95fr] md:items-end md:px-14 md:py-16">
          <h1 className="whitespace-pre-line font-display text-6xl leading-[0.92] text-dark md:text-8xl">
            {tx.mission_title}
          </h1>
          <div>
            <p className="font-display text-2xl leading-relaxed text-dark">
              {tx.quote_sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/${lang}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-all hover:gap-3 hover:opacity-90"
              >
                {lang === "uk" ? "Приєднатись" : "Join us"} →
              </Link>
              <Link
                to={`/${lang}/about`}
                className="rounded-full border border-dark px-7 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-bg"
              >
                {lang === "uk" ? "Наша історія" : "Our story"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="mb-10 flex items-end justify-between gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-green">
              {lang === "uk" ? "Наш напрямок" : "Our direction"}
            </span>
            <span className="font-display text-2xl italic text-dark/25">
              M / V
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.35fr_.65fr]">
            <article className="relative flex min-h-[30rem] flex-col overflow-hidden rounded-3xl bg-orange p-8 text-white md:p-12">
              <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full border-[4rem] border-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white/65">
                  {tx.mission_label}
                </span>
                <span className="font-display text-2xl italic text-white/35">
                  01
                </span>
              </div>
              <div className="relative mt-auto max-w-4xl pt-20">
                <span className="mb-6 block h-1 w-16 rounded-full bg-yellow" />
                <p className="font-display text-4xl leading-tight md:text-5xl">
                  {tx.mission_text}
                </p>
              </div>
            </article>

            <article className="flex min-h-80 flex-col rounded-3xl border border-dark/10 bg-blue/35 p-8 text-dark md:min-h-[30rem] md:p-9">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-dark/55">
                  {tx.vision_label}
                </span>
                <span className="font-display text-2xl italic text-dark/25">
                  02
                </span>
              </div>
              <p className="mt-auto pt-16 font-display text-2xl leading-relaxed md:text-3xl">
                {tx.vision_text}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green py-20 md:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[4rem] border-white/5" />
        <div className="relative mx-auto max-w-5xl px-6 md:px-14">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow">
            {tx.quote_tag}
          </span>
          <blockquote className="mt-7 font-display text-4xl leading-tight text-white md:text-6xl">
            {tx.quote}
          </blockquote>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
            {tx.quote_sub}
          </p>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green">
                {lang === "uk"
                  ? "Як ми живемо місію"
                  : "How we live the mission"}
              </span>
              <h2 className="mt-5 font-display text-4xl leading-tight text-dark md:text-5xl">
                {lang === "uk"
                  ? "Не лише слова.\nЩоденна практика."
                  : "More than words.\nA daily practice."}
              </h2>
            </div>

            <div className="border-t border-dark/15">
              {principles.map((principle) => (
                <article
                  key={principle.num}
                  className="grid gap-5 border-b border-dark/15 py-8 md:grid-cols-[4rem_.8fr_1.2fr] md:items-start"
                >
                  <span className="font-display text-lg italic text-dark/30">
                    {principle.num}
                  </span>
                  <h3
                    className={`font-display text-2xl font-bold ${principle.accent}`}
                  >
                    {principle.title}
                  </h3>
                  <p className="leading-7 text-dark/65">{principle.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 md:px-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-dark/50">
              {tx.mission_tag}
            </span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-dark md:text-4xl">
              {lang === "uk"
                ? "Знайди своє місце в цій історії."
                : "Find your place in this story."}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${lang}/contact`}
              className="rounded-full bg-dark px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {lang === "uk" ? "Приєднатись" : "Join us"} →
            </Link>
            <Link
              to={`/${lang}/donate`}
              className="rounded-full border border-dark px-7 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-white"
            >
              {lang === "uk" ? "Підтримати" : "Support us"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
