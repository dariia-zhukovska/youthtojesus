import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useLang } from "../LangContext";
import { t } from "../i18n";

import start01 from "../assets/about/01.webp";
import start02 from "../assets/about/02.webp";
import start03 from "../assets/about/03.webp";
import start04 from "../assets/about/04.webp";

import piligrims05 from "../assets/about/05.webp";
import piligrims06 from "../assets/about/06.webp";
import piligrims07 from "../assets/about/07.webp";
import piligrims08 from "../assets/about/08.webp";
import piligrims09 from "../assets/about/09.webp";

const beginningPhotos = [start01, start02, start03, start04];
const piligrimsPhotos = [
  piligrims05,
  piligrims06,
  piligrims07,
  piligrims08,
  piligrims09,
];

type PhotoGalleryProps = {
  photos: readonly string[];
  lang: string;
  label: string;
};

function PhotoGallery({ photos, lang, label }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isUk = lang === "uk";
  const isOpen = openedIndex !== null;
  const count = photos.length;

  const visibleIndex = count > 0 ? activeIndex % count : 0;
  const modalIndex =
    openedIndex !== null && count > 0 ? openedIndex % count : null;

  // Автоперемикання призупиняється, поки відкритий перегляд.
  useEffect(() => {
    if (isOpen || count < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % count);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isOpen, count]);

  useEffect(() => {
    if (!isOpen || count === 0) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;

    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, count]);

  function changeOpenedPhoto(direction: number) {
    if (count < 2) return;

    setOpenedIndex((index) =>
      index === null ? null : (index + direction + count) % count,
    );
  }

  function closeGallery() {
    setOpenedIndex(null);
  }

  if (count === 0) return null;

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl bg-dark/5">
        <button
          type="button"
          onClick={() => setOpenedIndex(visibleIndex)}
          aria-label={isUk ? "Відкрити фото" : "Open photo"}
          className="group relative block aspect-video w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
        >
          {photos.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={`${label} — ${index + 1}`}
              aria-hidden={index !== visibleIndex}
              loading={index === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 motion-reduce:transition-none ${
                index === visibleIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-2 text-xs font-medium text-white">
            {isUk ? "Відкрити ↗" : "Open ↗"}
          </span>
        </button>

        {count > 1 && (
          <div className="absolute inset-x-4 bottom-3 flex flex-wrap justify-center gap-1">
            {photos.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={
                  isUk
                    ? `Показати фото ${index + 1}`
                    : `Show photo ${index + 1}`
                }
                aria-pressed={index === visibleIndex}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span
                  className={`h-2 rounded-full transition-all ${
                    index === visibleIndex ? "w-5 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={label}
        onCancel={(event) => {
          event.preventDefault();
          closeGallery();
        }}
        onClose={closeGallery}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeGallery();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changeOpenedPhoto(-1);
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            changeOpenedPhoto(1);
          }
        }}
        className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none overflow-hidden border-0 bg-black/95 p-0 text-white backdrop:bg-black/80"
      >
        {modalIndex !== null && (
          <>
            <button
              type="button"
              autoFocus
              onClick={closeGallery}
              aria-label={isUk ? "Закрити" : "Close"}
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl transition-colors hover:bg-white/25"
            >
              ×
            </button>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-14 py-20 md:px-24">
              <img
                src={photos[modalIndex]}
                alt={`${label} — ${modalIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => changeOpenedPhoto(-1)}
                  aria-label={isUk ? "Попереднє фото" : "Previous photo"}
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl transition-colors hover:bg-white/25 md:left-6"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={() => changeOpenedPhoto(1)}
                  aria-label={isUk ? "Наступне фото" : "Next photo"}
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl transition-colors hover:bg-white/25 md:right-6"
                >
                  ›
                </button>
              </>
            )}

            <div
              aria-live="polite"
              className="pointer-events-none absolute inset-x-0 bottom-6 text-center text-sm text-white/70"
            >
              {modalIndex + 1} / {count}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

export default function About() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <>
      <section className="overflow-hidden bg-card py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-9 px-6 md:grid-cols-12 md:items-end md:px-14">
          <div className="md:col-span-7">
            <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-green">
              {tx.about_history_tag}
            </span>

            <h1 className="max-w-3xl font-display text-5xl leading-[0.98] text-dark md:text-7xl">
              {tx.about_history_title}
            </h1>
          </div>

          <div className="border-l-2 border-orange pl-6 md:col-span-5 md:pl-8">
            <p className="max-w-md text-lg leading-8 text-dark/70 md:text-xl">
              {tx.about_history_lead}
            </p>

            <p className="mt-6 font-display text-2xl italic text-orange">
              2000 — {lang === "uk" ? "сьогодні" : "today"}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-dark/10 bg-bg py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <div className="relative min-w-0 pb-6">
            <PhotoGallery
              photos={beginningPhotos}
              lang={lang}
              label={lang === "uk" ? "Історія громади" : "Community history"}
            />

            <div className="pointer-events-none absolute -bottom-2 right-4 rounded-2xl bg-yellow px-5 py-4 text-dark md:-right-3">
              <span className="block text-xs font-bold uppercase tracking-widest opacity-50">
                {tx.about_beginning_label}
              </span>

              <span className="mt-1 block font-display text-2xl font-bold">
                {tx.about_beginning_note}
              </span>
            </div>
          </div>

          <div className="min-w-0">
            <span className="font-display text-4xl leading-none text-orange/25">
              01
            </span>

            <h2 className="mt-4 font-display text-3xl leading-tight text-dark md:text-4xl">
              {tx.about_beginning_title}
            </h2>

            <p className="mt-5 text-base leading-7 text-dark/70">
              {tx.about_beginning_text}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2">
            <article className="bg-dark p-8 md:p-12">
              <span className="font-display text-5xl text-orange">2003</span>

              <div className="mt-8 h-px w-16 bg-white/15" />

              <h2 className="mt-8 font-display text-3xl font-bold">
                {tx.about_2003_title}
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                {tx.about_2003_text}
              </p>
            </article>

            <article className="bg-dark p-8 md:p-12">
              <span className="font-display text-5xl text-blue">2010</span>

              <div className="mt-8 h-px w-16 bg-white/15" />

              <h2 className="mt-8 font-display text-3xl font-bold">
                {tx.about_2010_title}
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                {tx.about_2010_text}
              </p>
            </article>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[.35fr_.65fr]">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow">
              {tx.about_leadership_label}
            </span>

            <div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                {tx.about_leadership_title}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
                {tx.about_leadership_text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-green py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[.35fr_.65fr] md:px-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-yellow">
              {tx.about_memorial_tag}
            </span>

            <p className="mt-5 font-display text-5xl">
              {tx.about_memorial_title}
            </p>
          </div>

          <div className="border-l border-white/20 pl-7 md:pl-12">
            <p className="font-display text-2xl leading-relaxed text-white/90 md:text-3xl">
              {tx.about_memorial_text}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-dark/10 bg-bg py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:items-center lg:gap-14">
          <div className="order-2 min-w-0 lg:order-1">
            <span className="font-display text-4xl text-blue/40">2012 →</span>

            <h2 className="mt-4 font-display text-3xl leading-tight text-dark md:text-4xl">
              {tx.about_calling_title}
            </h2>

            <p className="mt-5 text-base leading-7 text-dark/70">
              {tx.about_calling_text}
            </p>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <PhotoGallery
              photos={piligrimsPhotos}
              lang={lang}
              label={
                lang === "uk" ? "Паломницькі подорожі" : "Pilgrimage journeys"
              }
            />
          </div>
        </div>
      </section>

      <section className="border-t border-dark/10 bg-blue/20 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[.35fr_.65fr] md:px-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-green">
              {tx.about_2022_label}
            </span>

            <p className="mt-4 font-display text-6xl text-dark">2022</p>
          </div>

          <div className="border-l-4 border-blue bg-white p-8 md:p-12">
            <h2 className="font-display text-4xl leading-tight text-dark md:text-5xl">
              {tx.about_2022_title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-dark/70">
              {tx.about_2022_text}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-dark/10 bg-bg py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-10 md:grid-cols-[1fr_.65fr] md:items-stretch">
            <div className="rounded-3xl border border-dark/10 bg-white p-8 md:p-12">
              <span className="text-xs font-bold uppercase tracking-widest text-green">
                {tx.about_today_label}
              </span>

              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-dark md:text-5xl">
                {tx.about_today_title}
              </h2>

              <p className="mt-7 text-lg leading-8 text-dark/70">
                {tx.about_today_text}
              </p>
            </div>

            <div className="flex flex-col rounded-3xl bg-yellow p-8 text-dark md:p-10">
              <span className="font-display text-8xl leading-none">
                {tx.about_baptism_number}
              </span>

              <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
                {tx.about_baptism_label}
              </h3>

              <p className="mt-auto pt-8 leading-relaxed text-dark/70">
                {tx.about_baptism_text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-14">
          <span className="font-display text-6xl leading-none text-white/35">
            “
          </span>

          <blockquote className="mt-3 max-w-5xl font-display text-3xl leading-tight text-white md:text-5xl">
            {tx.about_closing}
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={`/${lang}/contact`}
              className="rounded-full bg-dark px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {tx.nav_join} →
            </Link>

            <Link
              to={`/${lang}/community`}
              className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-orange"
            >
              {tx.nav_life}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
