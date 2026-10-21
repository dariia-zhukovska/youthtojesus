import { Link } from "react-router";
import { useLang } from "../LangContext";
import { t } from "../i18n";

type SocialName = "Instagram" | "Facebook" | "YouTube";

const socials: Array<{ name: SocialName; accent: string; href: string }> = [
  {
    name: "Instagram",
    accent: "text-orange",
    href: "https://www.instagram.com/youthtojesus",
  },
  {
    name: "Facebook",
    accent: "text-blue",
    href: "https://www.facebook.com/youthtojesus.org/",
  },
  {
    name: "YouTube",
    accent: "text-green",
    href: "https://www.youtube.com/@youthtojesus3105/streams",
  },
];

function SocialIcon({ name }: { name: SocialName }) {
  if (name === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-none stroke-current stroke-2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.3H7.8V13h2.7v8h3.2Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7 fill-none stroke-current stroke-2 [stroke-linejoin:round]"
    >
      <path d="M21 12c0-2.3-.3-4.7-.9-5.3C19.5 6 15.8 6 12 6s-7.5 0-8.1.7C3.3 7.3 3 9.7 3 12s.3 4.7.9 5.3c.6.7 4.3.7 8.1.7s7.5 0 8.1-.7c.6-.6.9-3 .9-5.3Z" />
      <path d="m10 9 5 3-5 3V9Z" className="fill-current stroke-none" />
    </svg>
  );
}

export default function StayConnected({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      className={`border-t border-dark/10 bg-bg ${compact ? "py-16 md:py-20" : "py-20 md:py-28"}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div
          className={`grid gap-12 ${compact ? "lg:grid-cols-12 lg:gap-10" : "lg:grid-cols-12 lg:gap-16"}`}
        >
          <div className="flex flex-col items-start lg:col-span-5">
            <span className="mb-5 text-xs font-bold uppercase tracking-widest text-green">
              {tx.social_tag}
            </span>
            <h2
              className={`font-display leading-none text-dark ${compact ? "text-5xl md:text-6xl" : "text-5xl sm:text-6xl md:text-7xl"}`}
            >
              {lang === "uk" ? (
                <>
                  Ми живемо
                  <br />
                  <em className="font-normal text-orange">тут теж.</em>
                </>
              ) : (
                <>
                  We live
                  <br />
                  <em className="font-normal text-orange">here too.</em>
                </>
              )}
            </h2>
            <p
              className={`max-w-lg leading-relaxed text-dark/65 ${compact ? "mt-6 text-base" : "mt-8 text-lg"}`}
            >
              {tx.social_desc}
            </p>
            <Link
              to={`/${lang}/contact#contact-form`}
              className="group mt-8 inline-flex items-center gap-3 border-b border-orange pb-1 text-sm font-bold text-orange"
            >
              {tx.social_form_link}
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="border-y border-dark/15">
              <span className="block pt-5 text-xs font-bold uppercase tracking-widest text-dark/40">
                {tx.social_follow}
              </span>
              <div className="grid md:grid-cols-3">
                {socials.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={`group flex items-center justify-between gap-4 py-6 text-dark transition-colors hover:text-orange md:px-5 ${
                      index > 0
                        ? "border-t border-dark/15 md:border-l md:border-t-0"
                        : ""
                    }`}
                  >
                    <span
                      className={`flex items-center gap-3 ${social.accent}`}
                    >
                      <SocialIcon name={social.name} />
                      <span className="font-display text-xl font-bold text-dark">
                        {social.name}
                      </span>
                    </span>
                    <span
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`mt-5 grid items-start gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-12"}`}
            >
              <div
                className={`${compact ? "" : "md:col-span-7"} bg-yellow p-7 text-dark md:p-8`}
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center bg-dark text-yellow">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span className="font-display text-lg italic text-dark/40">
                    01
                  </span>
                </div>
                <h3
                  className={`font-display font-bold ${compact ? "text-2xl" : "text-3xl"}`}
                >
                  {tx.social_email_title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-dark/70">
                  {tx.social_email_desc}
                </p>
              </div>

              <div
                className={`${compact ? "md:mt-8" : "md:col-span-5 md:mt-12"} bg-blue/60 p-7 text-dark md:p-8`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border border-dark/20 text-dark">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                    >
                      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        className="fill-current stroke-none"
                      />
                    </svg>
                  </span>
                  <span className="font-display text-lg italic text-dark/40">
                    02
                  </span>
                </div>
                <h3
                  className={`font-display font-bold ${compact ? "text-2xl" : "text-3xl"}`}
                >
                  {tx.social_cards_title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-dark/70">
                  {tx.social_cards_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
