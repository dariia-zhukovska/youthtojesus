import { Link } from "react-router";
import churchLogo from "../assets/st-john-church-logo-original.png";
import { useLang } from "../LangContext";
import { t } from "../i18n";
import churchMain from "../assets/church/church-main-01.png";
import volunteer from "../assets/church/volunteering.jpg";
import youth from "../assets/church/youth.jpg";
import wesley from "../assets/church/wesley.png";
const worshipVideo = `${import.meta.env.BASE_URL}videos/sermon-church.mp4`;

const churchPhotos = {
  hero: churchMain,
  worship: "",
  youth: youth,
  volunteer: volunteer,
  sermons: wesley,
  community:
    "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?w=1600&h=1100&fit=crop&auto=format",
};

export default function Church() {
  const { lang } = useLang();
  const tx = t[lang];
  const ministries = [
    { title: tx.church_min1_title, desc: tx.church_min1_desc },
    { title: tx.church_min2_title, desc: tx.church_min2_desc },
    { title: tx.church_min3_title, desc: tx.church_min3_desc },
    { title: tx.church_min4_title, desc: tx.church_min4_desc },
    { title: tx.church_min5_title, desc: tx.church_min5_desc },
    { title: tx.church_min6_title, desc: tx.church_min6_desc },
  ];

  return (
    <>
      <section className="overflow-hidden bg-card pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:items-center md:px-14">
          <div className="relative z-10 md:col-span-7">
            <img
              src={churchLogo}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 top-1/2 w-72 -translate-y-1/2 opacity-30 md:-left-28 md:w-96"
            />
            <div className="relative">
              <span className="mb-7 block text-xs font-bold uppercase tracking-widest text-green">
                {tx.church_tag}
              </span>
              <h1 className="max-w-4xl font-display text-5xl leading-none text-dark sm:text-6xl md:text-7xl lg:text-8xl">
                {lang === "uk" ? (
                  <>
                    Церква Святого
                    <br />
                    <em className="font-normal text-orange">Івана</em> у Львові
                  </>
                ) : (
                  <>
                    St. <em className="font-normal text-orange">John&apos;s</em>
                    <br />
                    Lviv
                  </>
                )}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-dark/70 md:text-xl">
                {tx.church_intro}
              </p>
            </div>
          </div>

          <div className="relative md:col-span-5 md:-ml-8">
            <div className="overflow-hidden rounded-t-full">
              <img
                src={churchPhotos.hero}
                alt=""
                className="aspect-[4/5] w-full object-cover saturate-[.8]"
              />
            </div>
            <div className="absolute -bottom-8 -left-3 max-w-xs border-l-4 border-yellow bg-bg px-6 py-5 shadow-xl md:-left-12">
              <span className="text-xs font-bold uppercase tracking-widest text-green">
                {tx.church_service_label}
              </span>
              <p className="mt-2 font-display text-2xl font-bold leading-tight text-dark">
                {tx.church_service_time}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dark/65">
                {tx.church_service_note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-8 border-b border-dark/15 pb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="mb-5 block text-xs font-bold uppercase tracking-widest text-green">
                {tx.church_ministries_tag}
              </span>
              <h2 className="font-display text-5xl leading-none text-dark md:text-7xl">
                {lang === "uk" ? (
                  <>
                    Віра, що стає{" "}
                    <em className="font-normal text-orange">практикою.</em>
                  </>
                ) : (
                  <>
                    Faith becoming{" "}
                    <em className="font-normal text-orange">practice.</em>
                  </>
                )}
              </h2>
            </div>
            <p className="font-display text-right text-3xl italic text-dark/35 md:col-span-4">
              01—06
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-12">
            <article className="group relative min-h-[30rem] overflow-hidden md:col-span-7">
              <img
                src={churchPhotos.worship}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={churchPhotos.hero}
                aria-hidden="true"
                className="hero-video h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              >
                <source src={worshipVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                <span className="font-display text-lg italic text-yellow">
                  01
                </span>
                <h3 className="mt-4 font-display text-4xl font-bold">
                  {ministries[0].title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-white/75">
                  {ministries[0].desc}
                </p>
              </div>
            </article>

            <article className="flex min-h-96 flex-col bg-green p-8 text-white md:col-span-5 md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-display text-7xl leading-none text-white/15">
                  02
                </span>
                <span className="text-xl text-yellow" aria-hidden="true">
                  ↘
                </span>
              </div>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-3xl font-bold">
                  {ministries[1].title}
                </h3>
                <p className="mt-4 max-w-sm leading-relaxed text-white/70">
                  {ministries[1].desc}
                </p>
              </div>
            </article>

            <article className="relative min-h-80 overflow-hidden md:col-span-8">
              <img
                src={churchPhotos.youth}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/45" />
              <div className="absolute inset-x-0 bottom-0 grid gap-4 p-7 text-white md:grid-cols-[auto_1fr] md:items-end md:p-9">
                <span className="font-display text-6xl leading-none text-yellow">
                  03
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold">
                    {ministries[2].title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-white/75">
                    {ministries[2].desc}
                  </p>
                </div>
              </div>
            </article>

            <article className="flex min-h-80 flex-col border border-dark/15 bg-card p-8 md:col-span-4 md:p-9">
              <span className="font-display text-lg italic text-orange">
                04
              </span>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-3xl font-bold leading-tight text-dark">
                  {ministries[3].title}
                </h3>
                <p className="mt-4 leading-relaxed text-dark/65">
                  {ministries[3].desc}
                </p>
              </div>
            </article>

            <article className="group relative min-h-96 overflow-hidden md:col-span-5">
              <img
                src={churchPhotos.volunteer}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                <span className="font-display text-lg italic text-yellow">
                  05
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold">
                  {ministries[4].title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  {ministries[4].desc}
                </p>
              </div>
            </article>

            <article className="flex min-h-96 flex-col bg-blue/45 p-8 text-dark md:col-span-7 md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-display text-8xl leading-none text-dark/10">
                  06
                </span>
                <span className="h-px w-24 bg-dark/25" />
              </div>
              <div className="mt-auto max-w-xl pt-14">
                <h3 className="font-display text-4xl font-bold">
                  {ministries[5].title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-dark/65">
                  {ministries[5].desc}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-blue/45 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:items-center md:px-14">
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-4 -top-10 z-10 font-display text-9xl leading-none text-orange">
                “
              </div>
              <img
                src={churchPhotos.sermons}
                alt=""
                className="aspect-[3/5] w-full object-cover grayscale-[.15]"
              />
              <div className="absolute -bottom-5 -right-4 bg-yellow px-5 py-3 font-display text-lg italic text-dark">
                John Wesley
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <span className="mb-7 block text-xs font-bold uppercase tracking-widest text-green">
              {tx.church_wesley_tag}
            </span>
            <h2 className="font-display text-5xl leading-none text-dark md:text-6xl">
              {tx.church_wesley_title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-dark/70">
              {tx.church_wesley_desc}
            </p>
            <a
              href="https://wesley.org.ua/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-green transition-all hover:gap-4"
            >
              {tx.church_wesley_link} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-green py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-7 block text-xs font-bold uppercase tracking-widest text-yellow">
                {tx.church_youth_tag}
              </span>
              <h2 className="font-display text-5xl leading-none md:text-7xl">
                {lang === "uk" ? (
                  <>
                    Церква і
                    <br />
                    <em className="font-normal text-yellow">
                      молодіжна місія.
                    </em>
                  </>
                ) : (
                  <>
                    Church and
                    <br />
                    <em className="font-normal text-yellow">youth mission.</em>
                  </>
                )}
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-white/70 md:col-span-5">
              {tx.church_youth_desc}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="overflow-hidden md:col-span-8">
              <img
                src={churchPhotos.community}
                alt=""
                className="aspect-[16/10] w-full object-cover saturate-[.85]"
              />
            </div>
            <div className="md:col-span-4 md:pb-4">
              <div className="mb-8 h-px w-full bg-white/20" />
              <div className="flex flex-col items-start gap-5">
                <Link
                  to="/community"
                  className="group inline-flex items-center gap-3 text-sm font-bold text-yellow"
                >
                  {tx.church_youth_link}
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 text-sm font-bold text-white"
                >
                  {tx.church_contact_link}
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
