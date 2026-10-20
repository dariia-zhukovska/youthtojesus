import { useLang } from '../LangContext'
import { t } from '../i18n'
import { Link } from 'react-router'

export default function Donate() {
  const { lang } = useLang()
  const tx = t[lang]

  const whyItems = lang === 'uk'
    ? [
        'Регулярні молодіжні зустрічі',
        'Гірські поїздки та ретрити',
        'Активності для побудови спільноти',
        'Євангелізаційні проєкти',
        'Розвиток молодіжного лідерства',
        'Часткова підтримка навчання',
        'Волонтерські та соціальні ініціативи',
        'Служіння гостинності й безпечні простори для молоді',
      ]
    : [
        'Regular youth gatherings',
        'Mountain trips and retreats',
        'Community-building activities',
        'Evangelism projects',
        'Youth leadership development',
        'Partial educational support',
        'Volunteer and social initiatives',
        'Hospitality ministry and safe spaces for young people',
      ]

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ backgroundColor: '#eb5e28' }} className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #f4b917 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-14 relative">
          <span className="block text-xs font-bold tracking-widest uppercase mb-5 text-white/70">{tx.donate_tag}</span>
          <h1 className="font-display leading-tight text-white mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', whiteSpace: 'pre-line' }}>
            {tx.donate_title}
          </h1>
          <p className="text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(246,241,235,0.85)' }}>
            {tx.donate_desc}
          </p>
        </div>
      </div>

      {/* ── DONATE OPTIONS ── */}
      <section style={{ backgroundColor: '#f6f1eb' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Donation methods */}
            <div>
              <h2 className="font-display text-3xl mb-8" style={{ color: '#2e1818' }}>
                {lang === 'uk' ? 'Спосіб підтримки' : 'Way to support'}
              </h2>

              <div className="space-y-4">
                <a
                  href="https://gbhem-umc.my.site.com/hemgm/s/campaign/a3fPo000000D42v/university-student-ministries-youth-to-jesus"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-5 p-7 rounded-2xl border-2 hover:-translate-y-1 transition-all duration-200 group"
                  style={{ borderColor: '#6ea7cb', backgroundColor: '#ede8e1' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    style={{ backgroundColor: '#6ea7cb', color: 'white' }}>ADV</div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1" style={{ color: '#2e1818' }}>{tx.donate_adv}</div>
                    <div className="text-sm opacity-50">Advance #14055A</div>
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform" style={{ color: '#6ea7cb' }}>→</span>
                </a>
              </div>

              <p className="text-sm italic opacity-50 mt-6 pl-1">{tx.donate_note}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-10">
                {[
                  { num: '200+', label: lang === 'uk' ? 'людей отримали прихисток' : 'people received shelter' },
                  { num: '20+', label: lang === 'uk' ? 'років разом' : 'years together' },
                  { num: '∞', label: lang === 'uk' ? 'зустрічей з Богом' : 'God encounters' },
                ].map(s => (
                  <div key={s.num} className="p-5 rounded-xl text-center" style={{ backgroundColor: '#ede8e1' }}>
                    <div className="font-display text-3xl font-bold" style={{ color: '#eb5e28' }}>{s.num}</div>
                    <div className="text-xs opacity-55 mt-1.5 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* How funds are used */}
            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#2e1818' }}>
              <h3 className="font-display text-2xl text-white mb-8">{tx.donate_why_title}</h3>
              <div className="space-y-4">
                {whyItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b"
                    style={{ borderColor: 'rgba(246,241,235,0.08)' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: '#eb5e28', color: 'white' }}>{i + 1}</div>
                    <span className="text-sm" style={{ color: 'rgba(246,241,235,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: 'rgba(244,185,23,0.12)' }}>
                <p className="text-xs" style={{ color: 'rgba(244,185,23,0.9)' }}>
                  {lang === 'uk'
                    ? '100% коштів йде на підтримку молодіжного служіння. Ми прозорі та підзвітні.'
                    : '100% of funds go to youth ministry support. We are transparent and accountable.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow/25 py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-14">
          <p className="font-display text-3xl leading-snug text-dark md:text-4xl">
            {lang === 'uk'
              ? 'Підтримуючи це служіння, ви допомагаєте не просто проводити заходи.'
              : 'By supporting this ministry, you help us do more than simply run events.'}
          </p>
          <p className="mt-6 text-lg leading-8 text-dark/70">
            {lang === 'uk'
              ? 'Ви інвестуєте в молодих людей — у їхню віру, розвиток, стосунки, освіту та здатність самим ставати лідерами й служити іншим.'
              : 'You invest in young people — in their faith, development, relationships, education, and ability to become leaders and serve others themselves.'}
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ backgroundColor: '#f6f1eb' }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-lg opacity-65">{lang === 'uk' ? 'Є питання щодо підтримки?' : 'Questions about supporting?'}</p>
          <Link to="/contact"
            className="px-7 py-3.5 rounded-full font-semibold text-sm border transition-all hover:bg-black/5"
            style={{ borderColor: '#2e1818', color: '#2e1818' }}>
            {lang === 'uk' ? 'Зв\'яжись з нами' : 'Contact us'} →
          </Link>
        </div>
      </section>
    </>
  )
}
