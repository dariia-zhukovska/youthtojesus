import { Link, Navigate, useParams } from "react-router";
import PhotoGallery, { type GalleryImage } from "../components/PhotoGallery";
import { useLang } from "../LangContext";
import { t } from "../i18n";
import { legacyMinistrySlugs, ministryContent } from "../ministryContent";

const ministryPhotos: Record<string, GalleryImage[]> = {};

const heroStyles = [
  "bg-orange",
  "bg-green",
  "bg-yellow",
  "bg-blue",
  "bg-dark",
  "bg-green",
];

const heroTextStyles = [
  "text-white",
  "text-white",
  "text-dark",
  "text-dark",
  "text-white",
  "text-white",
];

const sectionStyles = {
  cream: "bg-bg text-dark",
  yellow: "bg-yellow/30 text-dark",
  blue: "bg-blue/25 text-dark",
  green: "bg-green text-white",
};

export default function ActivityDetail() {
  const { activity } = useParams();
  const { lang } = useLang();
  const tx = t[lang];
  const redirectSlug = activity ? legacyMinistrySlugs[activity] : undefined;

  if (redirectSlug)
    return <Navigate to={`/community/${redirectSlug}`} replace />;

  const ministries = ministryContent[lang];
  const index = ministries.findIndex((item) => item.slug === activity);

  if (index === -1) return <Navigate to="/community" replace />;

  const ministry = ministries[index];
  const isDarkHero = [0, 1, 4, 5].includes(index);
  const visibleSections = ministry.sections.filter((section) => {
    const galleryImages = section.galleryKey
      ? (ministryPhotos[section.galleryKey] ?? [])
      : [];
    return (
      section.paragraphs.length > 0 ||
      Boolean(section.items?.length) ||
      Boolean(section.highlights?.length) ||
      Boolean(section.statistic) ||
      galleryImages.length > 0
    );
  });

  return (
    <>
      <section
        className={`${heroStyles[index]} ${heroTextStyles[index]} py-16 md:py-24`}
      >
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
              className={`mb-5 block text-xs font-bold uppercase tracking-widest ${isDarkHero ? "opacity-70" : "text-green"}`}
            >
              {ministry.eyebrow}
            </span>
            <h1 className="font-display text-5xl leading-none sm:text-6xl md:text-8xl">
              {ministry.heroTitle}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-xl leading-relaxed ${isDarkHero ? "text-white/75" : "text-dark/70"}`}
            >
              {ministry.subtitle}
            </p>
          </div>
        </div>
      </section>

      {(ministry.intro.length > 0 || ministry.when || ministry.where) && (
        <section className="bg-bg py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[minmax(0,1fr)_22rem] md:px-14">
            <div className="max-w-3xl">
              <span className="mb-5 block text-xs font-bold uppercase tracking-widest text-green">
                {tx.activity_about}
              </span>
              <div className="space-y-6">
                {ministry.intro.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-dark/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {(ministry.when || ministry.where) && (
              <aside className="h-fit border-t-4 border-orange bg-white p-7 md:p-8">
                <h2 className="font-display text-2xl font-bold text-dark">
                  {tx.activity_details}
                </h2>
                <dl className="mt-7 space-y-6">
                  {ministry.when && (
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-widest text-dark/45">
                        {tx.activity_when}
                      </dt>
                      <dd className="mt-1 text-base font-medium text-dark">
                        {ministry.when}
                      </dd>
                    </div>
                  )}
                  {ministry.where && (
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-widest text-dark/45">
                        {tx.activity_where}
                      </dt>
                      <dd className="mt-1 text-base font-medium text-dark">
                        {ministry.mapUrl ? (
                          <a
                            href={ministry.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-orange underline-offset-4 transition-colors hover:text-orange"
                          >
                            {ministry.where} ↗
                          </a>
                        ) : (
                          ministry.where
                        )}
                      </dd>
                    </div>
                  )}
                </dl>
              </aside>
            )}
          </div>
        </section>
      )}

      {visibleSections.map((section, sectionIndex) => {
        const tone = section.tone ?? "cream";
        const galleryImages = section.galleryKey
          ? (ministryPhotos[section.galleryKey] ?? [])
          : [];
        const darkSection = tone === "green";

        return (
          <section
            key={`${section.title}-${sectionIndex}`}
            className={`${sectionStyles[tone]} py-20 md:py-24`}
          >
            <div className="mx-auto max-w-7xl px-6 md:px-14">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span
                    className={`font-display text-5xl italic ${darkSection ? "text-yellow" : "text-orange/45"}`}
                  >
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                    {section.title}
                  </h2>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                  {section.statistic && (
                    <div
                      className={`mb-10 border-b pb-8 ${darkSection ? "border-white/20" : "border-dark/15"}`}
                    >
                      <span className="block font-display text-8xl leading-none text-orange">
                        {section.statistic.value}
                      </span>
                      <span
                        className={`mt-3 block text-sm font-bold uppercase tracking-widest ${darkSection ? "text-white/70" : "text-dark/55"}`}
                      >
                        {section.statistic.label}
                      </span>
                    </div>
                  )}

                  {section.paragraphs.length > 0 && (
                    <div
                      className={`space-y-5 text-lg leading-8 ${darkSection ? "text-white/75" : "text-dark/72"}`}
                    >
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.highlights && (
                    <div className="mt-9 grid gap-3 sm:grid-cols-2">
                      {section.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="border-l-4 border-orange bg-bg p-5 font-display text-xl font-bold leading-snug text-dark"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <ul className="mt-3 grid gap-px bg-dark/15 sm:grid-cols-2">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={item}
                          className="flex items-center gap-4 bg-bg p-5 text-dark"
                        >
                          <span className="font-display text-sm italic text-orange">
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {section.galleryTitle && (
                <PhotoGallery
                  title={section.galleryTitle}
                  images={galleryImages}
                />
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
              : "Want to join or learn more?"}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${lang}/contact`}
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
