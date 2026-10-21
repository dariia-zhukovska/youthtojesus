import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import youthToJesusLogo from "../assets/youth-to-jesus-logo-cream.png";
import { useLang } from "../LangContext";
import { t } from "../i18n";
import PageTransition from "./PageTransition";
import StayConnected from "./StayConnected";

export default function Layout() {
  const { lang, setLang } = useLang();
  const tx = t[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const withLang = (path: string) => `/${lang}${path === "/" ? "" : path}`;

  const homePath = withLang("/");
  const contactPath = withLang("/contact");
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";

  const navLinks = [
    { to: homePath, label: tx.nav_home },
    { to: withLang("/about"), label: tx.nav_about },
    { to: withLang("/community"), label: tx.nav_life },
    { to: withLang("/mission"), label: tx.nav_mission },
    { to: withLang("/church"), label: tx.nav_church },
    { to: withLang("/donate"), label: tx.nav_donate },
    { to: contactPath, label: tx.nav_contact },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  return (
    <div
      style={{ backgroundColor: "#f6f1eb", color: "#2e1818" }}
      className="font-body min-h-screen overflow-x-hidden pt-[65px]"
    >
      {/* NAV */}
      <nav
        style={{ backgroundColor: "#f6f1eb" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-black/8"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink
            to={homePath}
            end
            onClick={() => setMenuOpen(false)}
            className="font-display text-xl font-bold tracking-tight"
            style={{ color: "#2e1818" }}
          >
            МдІ<span style={{ color: "#eb5e28" }}>.</span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === homePath}
                className={({ isActive }) =>
                  `text-sm font-medium transition-opacity pb-0.5 ${
                    isActive
                      ? "opacity-100 border-b-2 border-current"
                      : "opacity-55 hover:opacity-90"
                  }`
                }
                style={{ color: "#2e1818" }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            {/* Language switcher */}
            <div
              className="flex items-center gap-1 p-1 rounded-full"
              style={{ backgroundColor: "rgba(46,24,24,0.08)" }}
            >
              {(["uk", "en"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className="px-3 py-1 rounded-full text-xs font-bold transition-all"
                  style={{
                    backgroundColor: lang === l ? "#1f512a" : "transparent",
                    color: lang === l ? "white" : "#2e1818",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate(contactPath)}
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#eb5e28", color: "white" }}
            >
              {tx.nav_join}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="mr-2 p-2 xl:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={lang === "uk" ? "Меню" : "Menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-5 h-0.5 bg-current mb-1.5 transition-all origin-center"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "",
              }}
            />

            <span
              className="block w-5 h-0.5 bg-current mb-1.5 transition-all"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />

            <span
              className="block w-5 h-0.5 bg-current transition-all origin-center"
              style={{
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          inert={!menuOpen}
          className={`xl:hidden border-t border-black/8 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[32rem]" : "max-h-0"
          }`}
          style={{ backgroundColor: "#f6f1eb" }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === homePath}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-1 border-l-2 pl-3 transition-all ${
                    isActive
                      ? "border-current opacity-100"
                      : "border-transparent opacity-55"
                  }`
                }
                style={{ color: "#2e1818" }}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-2 pt-2">
              {(["uk", "en"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => {
                    setLang(l);
                    setMenuOpen(false);
                  }}
                  aria-pressed={lang === l}
                  className="px-3 py-1.5 rounded text-xs font-bold border transition-all"
                  style={{
                    backgroundColor: lang === l ? "#1f512a" : "transparent",
                    color: lang === l ? "white" : "#2e1818",
                    borderColor: "#2e1818",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <NavLink
              to={contactPath}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
              style={{ backgroundColor: "#eb5e28", color: "white" }}
            >
              {tx.nav_join}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <PageTransition>
        <Outlet />
      </PageTransition>

      {currentPath !== contactPath && (
        <StayConnected compact={currentPath !== homePath} />
      )}

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-dark text-bg">
        <img
          src={youthToJesusLogo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute right-4 bottom-40 w-32 max-w-none opacity-[.17] md:right-6 md:bottom-30 md:w-60"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.75fr_.6fr]">
            <div>
              <NavLink
                to={homePath}
                end
                className="inline-flex font-display text-3xl font-bold tracking-tight text-white"
              >
                МдІ<span className="text-orange">.</span>
              </NavLink>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                {tx.footer_tagline}
              </p>

              <NavLink
                to={withLang("/community/bible-study")}
                className="mt-7 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white/65 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-yellow" />
                {tx.footer_weekly}
              </NavLink>
            </div>

            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">
                {tx.footer_links}
              </div>

              <div className="flex flex-col items-start gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === homePath}
                    className="text-sm text-white/60 transition-all hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">
                {tx.footer_more}
              </div>

              <div className="flex flex-col items-start gap-3">
                <NavLink
                  to={withLang("/church")}
                  className="text-sm text-white/60 transition-all hover:translate-x-1 hover:text-white"
                >
                  {tx.nav_church}
                </NavLink>

                <NavLink
                  to={withLang("/community/bible-study")}
                  className="text-sm text-white/60 transition-all hover:translate-x-1 hover:text-white"
                >
                  {tx.act1_title}
                </NavLink>
              </div>
            </div>

            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">
                {tx.footer_lang}
              </div>

              <div className="flex flex-col items-start gap-2">
                {(["uk", "en"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`rounded-full px-3 py-1.5 text-left text-xs font-semibold transition-colors ${
                      lang === l
                        ? "bg-orange text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {l === "uk" ? "Українська" : "English"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 py-7">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} {tx.footer_rights}
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/youthtojesus",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/youthtojesus.org/",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@youthtojesus3105/streams",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45 transition-colors hover:border-white/25 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
