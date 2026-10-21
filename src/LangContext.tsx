import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import type { Lang } from "./i18n";

type LangCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const Ctx = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const prefix = location.pathname.split("/")[1];
  const hasLang = prefix === "en" || prefix === "uk";
  const lang: Lang = prefix === "uk" ? "uk" : "en";

  // Додаємо /en, якщо мови в адресі немає.
  useEffect(() => {
    if (!hasLang) {
      navigate(
        {
          pathname:
            "/en" + (location.pathname === "/" ? "" : location.pathname),
          search: location.search,
          hash: location.hash,
        },
        { replace: true },
      );
    }
  }, [hasLang, location.pathname, location.search, location.hash, navigate]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (nextLang: Lang) => {
    const pagePath = hasLang
      ? location.pathname.replace(/^\/(en|uk)(?=\/|$)/, "")
      : location.pathname;

    navigate({
      pathname: `/${nextLang}${pagePath === "/" ? "" : pagePath}`,
      search: location.search,
      hash: location.hash,
    });
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
