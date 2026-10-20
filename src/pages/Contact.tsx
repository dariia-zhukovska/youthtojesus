import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useLang } from '../LangContext'
import { t } from '../i18n'

export default function Contact() {
  const { lang } = useLang()
  const { hash } = useLocation()
  const tx = t[lang]
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', address: '', msg: '' })

  useEffect(() => {
    if (!hash) return

    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ backgroundColor: '#ede8e1' }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <span className="block text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#1f512a' }}>{tx.contact_tag}</span>
          <h1 className="font-display leading-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#2e1818' }}>
            {tx.contact_title}
          </h1>
          <p className="text-xl leading-relaxed max-w-xl" style={{ color: '#2e1818', opacity: 0.7 }}>
            {tx.contact_desc}
          </p>
        </div>
      </div>

      {/* ── CONTACT BODY ── */}
      <section style={{ backgroundColor: '#f6f1eb' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <div className="space-y-8 mb-14">
                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase mb-2 opacity-50">
                    {lang === 'uk' ? 'Адреса' : 'Address'}
                  </span>
                  <a
                    href="https://maps.app.goo.gl/AzNQ3gmcB4fzPWc78"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl hover:opacity-70 transition-opacity"
                    style={{ color: '#2e1818' }}
                  >
                    {lang === 'uk'
                      ? 'м. Львів, пл. Григоренка, 5, кв. 17'
                      : '5 Hryhorenka Square, apartment 17, Lviv'} ↗
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase mb-2 opacity-50">{tx.contact_email_label}</span>
                  <a href="mailto:moloddoisusa@gmail.com"
                    className="font-display text-2xl hover:opacity-70 transition-opacity"
                    style={{ color: '#2e1818' }}>moloddoisusa@gmail.com</a>
                </div>
                <div>
                  <span className="block text-xs font-bold tracking-widest uppercase mb-2 opacity-50">{tx.contact_phone_label}</span>
                  <a href="tel:+380989534201"
                    className="font-display text-2xl hover:opacity-70 transition-opacity"
                    style={{ color: '#2e1818' }}>+380 98 953 42 01</a>
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold tracking-widest uppercase mb-5 opacity-50">{tx.contact_social_label}</span>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Instagram', handle: '@youthtojesus', icon: '📸', color: '#eb5e28', href: 'https://www.instagram.com/youthtojesus' },
                    { label: 'Facebook', handle: 'Youth to Jesus', icon: '👥', color: '#6ea7cb', href: 'https://www.facebook.com/youthtojesus.org/' },
                    { label: 'YouTube', handle: 'Youth to Jesus UA', icon: '▶', color: '#2e1818', href: 'https://www.youtube.com/@youthtojesus3105/streams' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-4 p-5 rounded-xl hover:-translate-y-0.5 transition-all group"
                      style={{ backgroundColor: '#ede8e1' }}>
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <span className="font-semibold text-sm" style={{ color: s.color }}>{s.label}</span>
                        <span className="text-sm opacity-50 ml-2">{s.handle}</span>
                      </div>
                      <span className="ml-auto opacity-30 group-hover:opacity-70 group-hover:translate-x-1 transition-all">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="contact-form" className="p-10 rounded-2xl scroll-mt-28" style={{ backgroundColor: '#2e1818' }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6"
                    style={{ backgroundColor: '#1f512a' }}>✓</div>
                  <p className="font-display text-2xl text-white mb-3">{tx.contact_form_success}</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', address: '', msg: '' }) }}
                    className="mt-6 text-sm opacity-50 hover:opacity-80 text-white transition-opacity">
                    {lang === 'uk' ? '← Надіслати ще' : '← Send another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-display text-2xl text-white mb-3">
                    {lang === 'uk' ? 'Напиши нам' : 'Write to us'}
                  </h2>
                  <p className="text-sm leading-relaxed -mt-2 mb-2" style={{ color: 'rgba(246,241,235,0.64)' }}>
                    {tx.contact_form_intro}
                  </p>

                  {[
                    { key: 'name' as const, label: tx.contact_form_name, type: 'text' },
                    { key: 'email' as const, label: tx.contact_form_email, type: 'email' },
                    { key: 'address' as const, label: tx.contact_form_address, type: 'text' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(246,241,235,0.5)' }}>
                        {f.label}
                      </label>
                      <input type={f.type} required={f.key !== 'address'} value={form[f.key]}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all"
                        style={{
                          backgroundColor: 'rgba(246,241,235,0.08)',
                          color: '#f6f1eb',
                          border: '1px solid rgba(246,241,235,0.12)',
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = '#eb5e28' }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(246,241,235,0.12)' }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(246,241,235,0.5)' }}>
                      {tx.contact_form_msg}
                    </label>
                    <textarea required rows={5} value={form.msg}
                      onChange={e => setForm(prev => ({ ...prev, msg: e.target.value }))}
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{
                        backgroundColor: 'rgba(246,241,235,0.08)',
                        color: '#f6f1eb',
                        border: '1px solid rgba(246,241,235,0.12)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#eb5e28' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(246,241,235,0.12)' }}
                    />
                  </div>

                  <button type="submit"
                    className="mt-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: '#eb5e28', color: 'white' }}>
                    {tx.contact_form_send} →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
