import { Link } from "react-router";
import PhotoGallery, { type GalleryImage } from "../components/PhotoGallery";
import { useLang } from "../LangContext";
import { t } from "../i18n";
import { initiativeContent } from "../initiativeContent";

const initiativePhotos: Record<string, GalleryImage[]> = {};

const heroStyles = [
  "bg-blue text-dark",
  "bg-yellow text-dark",
  "bg-orange text-white",
  "bg-green text-white",
];

const sectionStyles = {
  cream: "bg-bg",
  yellow: "bg-yellow/25",
  blue: "bg-blue/25",
  green: "bg-green text-white",
};

function InitiativeDetail({ slug }: { slug: string }) {
  const { lang } = useLang();
  const tx = t[lang];
  const initiatives = initiativeContent[lang];
  const index = initiatives.findIndex((initiative) => initiative.slug === slug);
  const initiative = initiatives[index];
  const isDarkHero = index > 1;

  return (
    <>
      <section className={`${heroStyles[index]} py-16 md:py-24`}>
        <div className="mx-auto flex min-h-96 max-w-7xl flex-col justify-between px-6 md:px-14">
          <Link
            to={`/${lang}/community`}
            className={`w-fit rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              isDarkHero
                ? "border-white/40 hover:bg-white hover:text-dark"
                : "border-dark/30 hover:bg-dark hover:text-white"
            }`}
          >
            ← {tx.activity_back}
          </Link>
          <div className="mt-20 max-w-5xl">
            <span
              className={`mb-5 block text-xs font-bold uppercase tracking-widest ${isDarkHero ? "text-white/65" : "text-green"}`}
            >
              {lang === "uk"
                ? "Додаткові ініціативи"
                : "Additional initiatives"}
            </span>
            <h1 className="font-display text-5xl leading-none sm:text-6xl md:text-8xl">
              {initiative.heroTitle}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-xl leading-relaxed ${isDarkHero ? "text-white/75" : "text-dark/70"}`}
            >
              {initiative.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 md:px-14">
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-green">
              {tx.activity_about}
            </span>
          </div>
          <div className="space-y-6 md:col-span-7 md:col-start-6">
            {initiative.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-dark/75">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {initiative.sections.map((section, sectionIndex) => {
        const images = section.galleryKey
          ? (initiativePhotos[section.galleryKey] ?? [])
          : [];
        const hasContent = section.paragraphs.length > 0 || images.length > 0;

        if (!hasContent) return null;

        return (
          <section
            key={section.title}
            className={`${sectionStyles[section.tone ?? "cream"]} py-20 md:py-24`}
          >
            <div className="mx-auto max-w-7xl px-6 md:px-14">
              {section.paragraphs.length > 0 && (
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <span className="font-display text-5xl italic text-orange/45">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-dark md:text-5xl">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-5 text-lg leading-8 text-dark/72 md:col-span-7 md:col-start-6">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              {section.galleryTitle && (
                <PhotoGallery title={section.galleryTitle} images={images} />
              )}
            </div>
          </section>
        );
      })}

      <section className="bg-card py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 md:px-14">
          <p className="max-w-xl font-display text-3xl leading-tight text-dark">
            {lang === "uk"
              ? "Хочеш долучитися або дізнатися більше?"
              : "Want to take part or learn more?"}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${lang}/contac`}
              className="rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {tx.activity_join} →
            </Link>
            <Link
              to={`/${lang}/community`}
              className="rounded-full border border-dark px-7 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-bg"
            >
              {tx.activity_others}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function EnglishClubPage() {
  return <InitiativeDetail slug="english-club" />;
}

export function VolunteeringPage() {
  return <InitiativeDetail slug="volunteering" />;
}

export function EvangelismPage() {
  return <InitiativeDetail slug="evangelism" />;
}

export function InterchurchEventsPage() {
  return <InitiativeDetail slug="interchurch-events" />;
}
