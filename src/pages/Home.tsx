import { useState } from "react";
import { Link } from "react-router";
import youthToJesusLogo from "../assets/youth-to-jesus-logo-cream.png";
import { useLang } from "../LangContext";
import { t } from "../i18n";
import ourLife1 from "../assets/life/1.webp";
import ourLife2 from "../assets/life/3.webp";
import ourLife3 from "../assets/life/2.webp";
import ourLife4 from "../assets/life/4.webp";
import ourLife5 from "../assets/life/5.webp";
import hero from "../assets/church/main.webp";

const photos = {
  hero: hero,
  who: "https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?w=800&h=600&fit=crop&auto=format",
  gallery: [ourLife1, ourLife2, ourLife3, ourLife4, ourLife5],
};

// Replace this URL with your own hosted hero video when it is ready.
const heroVideo = `${import.meta.env.BASE_URL}videos/hero.mp4`;

const bibleStudyLocation = "м. Львів, пл. Григоренка, 5, кв. 17";
const bibleStudyMapUrl = "https://maps.app.goo.gl/AzNQ3gmcB4fzPWc78";

const activityIcons = [
  <path
    key="book"
    d="M6 4.5h9a3 3 0 0 1 3 3V20H8a2 2 0 0 1-2-2V4.5Zm0 11.75h9.5M18 20V7.5"
  />,
  <path
    key="prayer"
    d="M9 4.5c1.7 2 2.5 4.2 2.5 6.5L8 16m7-11.5c-1.7 2-2.5 4.2-2.5 6.5L16 16m-8 0 4 4 4-4"
  />,
  <path
    key="leaders"
    d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-1a2.5 2.5 0 1 0 0-5m-11 14v-2.2a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4V19m2-6.2a3.5 3.5 0 0 1 4 3.5V19"
  />,
  <path
    key="heart"
    d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"
  />,
  <path
    key="mountain"
    d="m3 19 6.2-12 3.1 5 2.2-3.5L21 19H3Zm4.1-4.1 2.2-1.8 2 1.6 2.1-1.7"
  />,
  <path key="home" d="m3 11 9-8 9 8v9h-6v-6H9v6H3v-9Z" />,
];

function ActivityIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
    >
      {activityIcons[index]}
    </svg>
  );
}

function getNextThursdayDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Kyiv",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    weekday: "short",
    hour12: false,
  }).formatToParts(new Date());
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";
  const weekdays: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  let daysUntilThursday = (4 - weekdays[part("weekday")] + 7) % 7;

  if (daysUntilThursday === 0 && Number(part("hour")) >= 19)
    daysUntilThursday = 7;

  const date = new Date(
    Date.UTC(
      Number(part("year")),
      Number(part("month")) - 1,
      Number(part("day")),
    ),
  );
  date.setUTCDate(date.getUTCDate() + daysUntilThursday);
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
}

export default function Home() {
  const { lang } = useLang();
  const tx = t[lang];
  const [calendarOpen, setCalendarOpen] = useState(false);

  const activities = [
    { slug: "bible-study", title: tx.act1_title, short: tx.act1_desc },
    { slug: "prayer", title: tx.act2_title, short: tx.act2_desc },
    { slug: "leadership", title: tx.act3_title, short: tx.act3_desc },
    { slug: "communa", title: tx.act4_title, short: tx.act4_desc },
    { slug: "trips-retreats", title: tx.act5_title, short: tx.act5_desc },
    { slug: "hospitality", title: tx.act6_title, short: tx.act6_desc },
  ];
  const eventDate = getNextThursdayDate();
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams(
    {
      action: "TEMPLATE",
      text: tx.act1_title,
      dates: `${eventDate}T190000/${eventDate}T203000`,
      ctz: "Europe/Kyiv",
      recur: "RRULE:FREQ=WEEKLY;BYDAY=TH",
      details: tx.act1_detail,
      location: bibleStudyLocation,
    },
  ).toString()}`;

  function downloadBibleStudyCalendar() {
    const escapeIcs = (value: string) =>
      value
        .replace(/\\/g, "\\\\")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;")
        .replace(/\n/g, "\\n");
    const calendar = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Youth to Jesus//Bible Study//UK",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:bible-study@youthtojesus.ua",
      `DTSTAMP:${new Date()
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "")}`,
      `DTSTART;TZID=Europe/Kyiv:${eventDate}T190000`,
      `DTEND;TZID=Europe/Kyiv:${eventDate}T203000`,
      "RRULE:FREQ=WEEKLY;BYDAY=TH",
      `SUMMARY:${escapeIcs(tx.act1_title)}`,
      `DESCRIPTION:${escapeIcs(tx.act1_detail)}`,
      `LOCATION:${escapeIcs(bibleStudyLocation)}`,
      `URL:${bibleStudyMapUrl}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(
      new Blob([calendar], { type: "text/calendar;charset=utf-8" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "youth-to-jesus-bible-study.ics";
    anchor.click();
    URL.revokeObjectURL(url);
    setCalendarOpen(false);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative" style={{ backgroundColor: "#f6f1eb" }}>
        <div
          className="relative overflow-hidden"
          style={{ height: "80vh", minHeight: 520 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={photos.hero}
            aria-hidden="true"
            className="hero-video h-full w-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 30%, rgba(46,24,24,0.6) 100%)",
            }}
          />

          {/* Event pill */}
          <div className="absolute top-6 right-6">
            <button
              type="button"
              aria-expanded={calendarOpen}
              aria-controls="bible-study-calendar-menu"
              onClick={() => setCalendarOpen((open) => !open)}
              className="flex items-center gap-2 rounded-full bg-yellow px-4 py-2.5 text-xs font-bold text-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
              {tx.hero_event}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
              >
                <path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
              </svg>
            </button>

            {calendarOpen && (
              <div
                id="bible-study-calendar-menu"
                className="absolute right-0 top-full z-10 mt-3 w-72 rounded-2xl bg-white p-3 text-dark shadow-[0_20px_60px_rgba(46,24,24,0.25)]"
              >
                <div className="px-3 pb-3 pt-2">
                  <p className="font-display text-lg font-bold">
                    {tx.calendar_add}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-dark/55">
                    {tx.calendar_weekly}
                  </p>
                </div>
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setCalendarOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-bg"
                >
                  {tx.calendar_google}
                  <span aria-hidden="true">↗</span>
                </a>
                <button
                  type="button"
                  onClick={downloadBibleStudyCalendar}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold transition-colors hover:bg-bg"
                >
                  {tx.calendar_download}
                  <span aria-hidden="true">↓</span>
                </button>
              </div>
            )}
          </div>

          <div className="absolute bottom-7 left-7 md:bottom-8 md:left-14">
            <img
              src={youthToJesusLogo}
              alt={lang === "uk" ? "Молодь до Ісуса" : "Youth to Jesus"}
              className="hero-brand-logo w-20 md:w-28"
            />
          </div>
        </div>

        {/* Hero text */}
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-14 grid md:grid-cols-2 gap-8 items-end">
          <h1
            className="font-display leading-none"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "#2e1818" }}
          >
            {tx.hero_h1_a}{" "}
            <em style={{ color: "#eb5e28", fontStyle: "italic" }}>
              {tx.hero_h1_b}
            </em>{" "}
            {tx.hero_h1_c}
          </h1>
          <div className="flex flex-col gap-6">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#2e1818", opacity: 0.72 }}
            >
              {tx.hero_sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#eb5e28", color: "white" }}
              >
                {tx.hero_cta1} <span>→</span>
              </Link>
              <Link
                to={`/${lang}/mission`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border transition-all hover:bg-black/5"
                style={{ borderColor: "#2e1818", color: "#2e1818" }}
              >
                {tx.hero_cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE (preview) ── */}
      <section style={{ backgroundColor: "#ede8e1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <span
            className="block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#1f512a" }}
          >
            {tx.who_tag}
          </span>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <h2
              className="font-display leading-tight"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#2e1818",
                whiteSpace: "pre-line",
              }}
            >
              {tx.who_title}
            </h2>
            <div>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#2e1818", opacity: 0.72 }}
              >
                {tx.who_desc}
              </p>
              <Link
                to={`/${lang}/about`}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: "#eb5e28" }}
              >
                {lang === "uk" ? "Більше про нас" : "More about us"} →
              </Link>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: tx.val1_title, desc: tx.val1_desc, color: "#eb5e28" },
              { title: tx.val2_title, desc: tx.val2_desc, color: "#1f512a" },
              { title: tx.val3_title, desc: tx.val3_desc, color: "#f4b917" },
              { title: tx.val4_title, desc: tx.val4_desc, color: "#6ea7cb" },
            ].map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f6f1eb" }}
              >
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: v.color }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-65">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="bg-bg py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-green">
                {tx.what_tag}
              </span>
              <h2 className="max-w-2xl font-display text-4xl leading-tight text-dark md:text-6xl">
                {tx.what_home_title}
              </h2>
            </div>
            <div className="md:justify-self-end">
              <p className="max-w-xl text-lg leading-relaxed text-dark/70">
                {tx.what_home_intro}
              </p>
              <span className="mt-5 inline-flex rounded-full border border-dark/15 px-3 py-1 text-xs font-bold tracking-widest text-dark/50">
                01—06
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => {
              const cardStyles = [
                "border-orange/25 bg-orange/[0.06]",
                "border-green/20 bg-green/[0.05]",
                "border-yellow/35 bg-yellow/[0.10]",
                "border-blue/35 bg-blue/[0.10]",
                "border-dark/10 bg-white",
                "border-green/20 bg-green/[0.06]",
              ];
              const iconStyles = [
                "bg-orange text-white",
                "bg-green text-white",
                "bg-yellow text-dark",
                "bg-blue text-dark",
                "bg-dark text-white",
                "bg-green text-white",
              ];

              return (
                <article
                  key={activity.title}
                  className={`group flex min-h-72 flex-col rounded-2xl border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(46,24,24,0.07)] ${cardStyles[index]}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${iconStyles[index]}`}
                    >
                      <ActivityIcon index={index} />
                    </div>
                    <span className="font-display text-base italic text-dark/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="pt-10">
                    <h3 className="font-display text-2xl font-bold leading-tight text-dark">
                      {activity.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-dark/65">
                      {activity.short}
                    </p>
                  </div>

                  <Link
                    to={`/${lang}/community/${activity.slug}`}
                    className="mt-auto flex items-center gap-2 border-t border-dark/10 pt-5 text-sm font-semibold text-green transition-all hover:gap-3"
                  >
                    {tx.read_more}
                    <span aria-hidden="true" className="text-orange">
                      →
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              to={`/${lang}/community`}
              className="inline-flex items-center gap-2 rounded-full border border-dark px-7 py-3.5 text-sm font-semibold text-dark transition-all hover:gap-3 hover:bg-dark hover:text-bg"
            >
              {tx.what_all} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-20" style={{ backgroundColor: "#f6f1eb" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <span
                className="block text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#1f512a" }}
              >
                {tx.life_tag}
              </span>
              <h2
                className="font-display leading-tight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#2e1818",
                  whiteSpace: "pre-line",
                }}
              >
                {tx.life_title}
              </h2>
            </div>
            <Link
              to={`/${lang}/community`}
              className="text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              style={{ color: "#eb5e28" }}
            >
              {lang === "uk" ? "Більше фото" : "More photos"} →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.gallery.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl group"
                style={{ height: i % 2 === 0 ? 280 : 220 }}
              >
                <img
                  src={src}
                  alt={`Community moment ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section
        style={{ backgroundColor: "#1f512a" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-14">
          <span
            className="block text-xs font-bold tracking-widest uppercase mb-6"
            style={{ color: "#f4b917" }}
          >
            {tx.quote_tag}
          </span>
          <blockquote
            className="font-display leading-tight text-white mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            {tx.quote}
          </blockquote>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(246,241,235,0.72)", maxWidth: 520 }}
          >
            {tx.quote_sub}
          </p>
          <Link
            to={`/${lang}/mission`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#f4b917", color: "#2e1818" }}
          >
            {lang === "uk" ? "Наша місія" : "Our mission"} →
          </Link>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#f6f1eb" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-wrap items-center justify-between gap-8">
          <div>
            <span
              className="block text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#1f512a" }}
            >
              {tx.donate_tag}
            </span>
            <h2
              className="font-display text-3xl md:text-4xl leading-tight"
              style={{ color: "#2e1818" }}
            >
              {lang === "uk"
                ? "Твоя підтримка —\nце молоді люди, що зустрічають Бога."
                : "Your support is\nyoung people encountering God."}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${lang}/donate`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#eb5e28", color: "white" }}
            >
              {lang === "uk" ? "Підтримати" : "Support us"} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
