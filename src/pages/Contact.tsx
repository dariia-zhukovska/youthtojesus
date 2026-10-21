import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router";
import { useLang } from "../LangContext";
import { t } from "../i18n";

const FORM_ENDPOINT = "https://formspree.io/f/moejgyeq";

const emptyForm = {
  name: "",
  email: "",
  address: "",
  msg: "",
};

export default function Contact() {
  const { lang } = useLang();
  const { hash } = useLocation();
  const tx = t[lang];
  const isUk = lang === "uk";

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ ...emptyForm });

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      try {
        const id = decodeURIComponent(hash.slice(1));

        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } catch {
        // Ignore malformed URL fragments.
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [hash]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setError(false);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
          message: form.msg.trim(),
          language: lang,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSent(true);
      setForm({ ...emptyForm });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setSent(false);
    setError(false);
    setForm({ ...emptyForm });
  }

  return (
    <>
      {/* HERO */}
      <div style={{ backgroundColor: "#ede8e1" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <span
            className="block text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: "#1f512a" }}
          >
            {tx.contact_tag}
          </span>

          <h1
            className="font-display leading-tight mb-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#2e1818",
            }}
          >
            {tx.contact_title}
          </h1>

          <p
            className="text-xl leading-relaxed max-w-xl"
            style={{ color: "#2e1818", opacity: 0.7 }}
          >
            {tx.contact_desc}
          </p>
        </div>
      </div>

      {/* CONTACT BODY */}
      <section style={{ backgroundColor: "#f6f1eb" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact information */}
            <div className="min-w-0">
              <div className="space-y-8 mb-14">
                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase mb-2 opacity-50">
                    {isUk ? "Адреса" : "Address"}
                  </span>

                  <a
                    href="https://maps.app.goo.gl/AzNQ3gmcB4fzPWc78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl hover:opacity-70 transition-opacity"
                    style={{ color: "#2e1818" }}
                  >
                    {isUk
                      ? "м. Львів, пл. Григоренка, 5, кв. 17"
                      : "5 Hryhorenka Square, apartment 17, Lviv"}{" "}
                    ↗
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase mb-2 opacity-50">
                    {tx.contact_email_label}
                  </span>

                  <a
                    href="mailto:moloddoisusa@gmail.com"
                    className="font-display text-2xl break-words hover:opacity-70 transition-opacity"
                    style={{ color: "#2e1818" }}
                  >
                    moloddoisusa@gmail.com
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase mb-2 opacity-50">
                    {tx.contact_phone_label}
                  </span>

                  <a
                    href="tel:+380989534201"
                    className="font-display text-2xl hover:opacity-70 transition-opacity"
                    style={{ color: "#2e1818" }}
                  >
                    +380 98 953 42 01
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold tracking-widest uppercase mb-5 opacity-50">
                  {tx.contact_social_label}
                </span>

                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "Instagram",
                      handle: "@youthtojesus",
                      icon: "📸",
                      color: "#eb5e28",
                      href: "https://www.instagram.com/youthtojesus",
                    },
                    {
                      label: "Facebook",
                      handle: "Youth to Jesus",
                      icon: "👥",
                      color: "#6ea7cb",
                      href: "https://www.facebook.com/youthtojesus.org/",
                    },
                    {
                      label: "YouTube",
                      handle: "Youth to Jesus UA",
                      icon: "▶",
                      color: "#2e1818",
                      href: "https://www.youtube.com/@youthtojesus3105/streams",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 rounded-xl hover:-translate-y-0.5 transition-all group"
                      style={{ backgroundColor: "#ede8e1" }}
                    >
                      <span className="text-xl" aria-hidden="true">
                        {social.icon}
                      </span>

                      <div className="min-w-0">
                        <span
                          className="font-semibold text-sm"
                          style={{ color: social.color }}
                        >
                          {social.label}
                        </span>

                        <span className="text-sm opacity-50 ml-2">
                          {social.handle}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className="ml-auto opacity-30 group-hover:opacity-70 group-hover:translate-x-1 transition-all"
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div
              id="contact-form"
              className="min-w-0 p-6 sm:p-10 rounded-2xl scroll-mt-28"
              style={{ backgroundColor: "#2e1818" }}
            >
              {sent ? (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                >
                  <div
                    aria-hidden="true"
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white mb-6"
                    style={{ backgroundColor: "#1f512a" }}
                  >
                    ✓
                  </div>

                  <p className="font-display text-2xl text-white mb-3">
                    {tx.contact_form_success}
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 text-sm opacity-50 hover:opacity-80 text-white transition-opacity"
                  >
                    {isUk ? "← Надіслати ще" : "← Send another"}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-busy={sending}
                  className="flex flex-col gap-5"
                >
                  <h2 className="font-display text-2xl text-white mb-3">
                    {isUk ? "Напиши нам" : "Write to us"}
                  </h2>

                  <p
                    className="text-sm leading-relaxed -mt-2 mb-2"
                    style={{ color: "rgba(246,241,235,0.64)" }}
                  >
                    {tx.contact_form_intro}
                  </p>

                  {[
                    {
                      key: "name" as const,
                      label: tx.contact_form_name,
                      type: "text",
                      autoComplete: "name",
                    },
                    {
                      key: "email" as const,
                      label: tx.contact_form_email,
                      type: "email",
                      autoComplete: "email",
                    },
                    {
                      key: "address" as const,
                      label: tx.contact_form_address,
                      type: "text",
                      autoComplete: "street-address",
                    },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        htmlFor={`contact-${field.key}`}
                        className="block text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: "rgba(246,241,235,0.5)" }}
                      >
                        {field.label}
                      </label>

                      <input
                        id={`contact-${field.key}`}
                        name={field.key}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required={field.key !== "address"}
                        disabled={sending}
                        maxLength={field.key === "address" ? 500 : 254}
                        value={form[field.key]}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            [field.key]: e.target.value,
                          }))
                        }
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all disabled:opacity-60"
                        style={{
                          backgroundColor: "rgba(246,241,235,0.08)",
                          color: "#f6f1eb",
                          border: "1px solid rgba(246,241,235,0.12)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "#eb5e28";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(246,241,235,0.12)";
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: "rgba(246,241,235,0.5)" }}
                    >
                      {tx.contact_form_msg}
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      maxLength={10000}
                      disabled={sending}
                      value={form.msg}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          msg: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all resize-none disabled:opacity-60"
                      style={{
                        backgroundColor: "rgba(246,241,235,0.08)",
                        color: "#f6f1eb",
                        border: "1px solid rgba(246,241,235,0.12)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#eb5e28";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(246,241,235,0.12)";
                      }}
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-sm leading-relaxed text-red-300"
                    >
                      {isUk
                        ? "Не вдалося надіслати повідомлення. Спробуй ще раз або напиши на "
                        : "Could not send your message. Please try again or email "}
                      <a
                        href="mailto:moloddoisusa@gmail.com"
                        className="underline break-words"
                      >
                        moloddoisusa@gmail.com
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#eb5e28", color: "white" }}
                  >
                    {sending
                      ? isUk
                        ? "Надсилаємо…"
                        : "Sending…"
                      : `${tx.contact_form_send} →`}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
