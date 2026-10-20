import { Link } from 'react-router'
import CommunityPhotoGallery, { type CommunityPhoto } from '../components/CommunityPhotoGallery'
import { useLang } from '../LangContext'
import { t } from '../i18n'
import { additionalInitiativesIntro, initiativeContent } from '../initiativeContent'
import { communityIntro, ministryContent } from '../ministryContent'

const iconPaths = [
  <path key="book" d="M5 4.5h10a3 3 0 0 1 3 3V20H7a2 2 0 0 1-2-2V4.5Zm0 11.75h10.5M18 20V7.5" />,
  <path key="prayer" d="M9 4.5c1.7 2 2.5 4.2 2.5 6.5L8 16m7-11.5c-1.7 2-2.5 4.2-2.5 6.5L16 16m-8 0 4 4 4-4" />,
  <path key="leaders" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-1a2.5 2.5 0 1 0 0-5M3.5 20v-2.5A4.5 4.5 0 0 1 8 13h1a4.5 4.5 0 0 1 4.5 4.5V20m2-7a4 4 0 0 1 5 4v3" />,
  <path key="heart" d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />,
  <path key="mountain" d="m3 19 6.2-12 3.1 5 2.2-3.5L21 19H3Zm4.1-4.1 2.2-1.8 2 1.6 2.1-1.7" />,
  <path key="home" d="m3 11 9-8 9 8v9h-6v-6H9v6H3v-9Z" />,
]

const cardStyles = [
  'border-orange/25 bg-orange/[0.06]',
  'border-green/20 bg-green/[0.06]',
  'border-yellow/35 bg-yellow/[0.12]',
  'border-blue/35 bg-blue/[0.13]',
  'border-dark/10 bg-white',
  'border-green/20 bg-green/[0.07]',
]

const iconStyles = [
  'bg-orange text-white',
  'bg-green text-white',
  'bg-yellow text-dark',
  'bg-blue text-dark',
  'bg-dark text-white',
  'bg-green text-white',
]

// Add only approved, authentic community photographs to this array.
const communityPhotos: CommunityPhoto[] = []

const initiativeIconPaths = [
  <path key="conversation" d="M4 5h16v11H9l-5 4V5Zm4 4h8m-8 3h5" />,
  <path key="hands" d="m4 13 4-4 4 4 4-4 4 4m-14 4h12M8 6l2-2 2 2 2-2 2 2" />,
  <path key="light" d="M12 3a6 6 0 0 0-3 11.2V18h6v-3.8A6 6 0 0 0 12 3Zm-3 18h6" />,
  <path key="community" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2m-1-5a4 4 0 0 1 3-1h2a4 4 0 0 1 4 4v2" />,
]

export default function Community() {
  const { lang } = useLang()
  const tx = t[lang]
  const intro = communityIntro[lang]
  const ministries = ministryContent[lang]
  const initiativesIntro = additionalInitiativesIntro[lang]
  const initiatives = initiativeContent[lang]

  return (
    <>
      <section className="bg-card py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-12 md:items-end md:px-14">
          <div className="md:col-span-7">
            <span className="mb-5 block text-xs font-bold uppercase tracking-widest text-green">
              {intro.eyebrow}
            </span>
            <h1 className="font-display text-5xl leading-none text-dark md:text-7xl">{intro.title}</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-dark/70 md:col-span-5">
            {intro.description}
          </p>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry, index) => (
              <article
                key={ministry.slug}
                className={`flex min-h-80 flex-col rounded-2xl border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(46,24,24,0.07)] ${cardStyles[index]}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${iconStyles[index]}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                      {iconPaths[index]}
                    </svg>
                  </span>
                  <span className="font-display text-base italic text-dark/35">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="pt-9">
                  <h2 className="font-display text-2xl font-bold leading-tight text-dark">
                    {ministry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-dark/65">
                    {ministry.cardDescription}
                  </p>
                </div>

                <Link
                  to={`/community/${ministry.slug}`}
                  className="mt-auto flex items-center gap-2 border-t border-dark/10 pt-5 text-sm font-semibold text-green transition-all hover:gap-3"
                >
                  {tx.read_more}
                  <span aria-hidden="true" className="text-orange">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-dark/10 bg-card py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-14">
          <div className="grid gap-7 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="mb-5 block text-xs font-bold uppercase tracking-widest text-green">
                {initiativesIntro.eyebrow}
              </span>
              <h2 className="font-display text-4xl leading-tight text-dark md:text-6xl">
                {initiativesIntro.title}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-dark/70 md:col-span-5">
              {initiativesIntro.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <article
                key={initiative.slug}
                className="flex min-h-72 flex-col rounded-2xl border border-dark/10 bg-bg p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    ['bg-blue text-dark', 'bg-yellow text-dark', 'bg-orange text-white', 'bg-green text-white'][index]
                  }`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                      {initiativeIconPaths[index]}
                    </svg>
                  </span>
                  <span className="font-display text-base italic text-dark/35">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-9 font-display text-3xl font-bold leading-tight text-dark">
                  {initiative.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-dark/65">
                  {initiative.cardDescription}
                </p>
                <Link
                  to={`/community/${initiative.slug}`}
                  className="mt-auto flex items-center gap-2 border-t border-dark/10 pt-5 text-sm font-semibold text-green transition-all hover:gap-3"
                >
                  {tx.read_more}
                  <span aria-hidden="true" className="text-orange">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CommunityPhotoGallery images={communityPhotos} />

      <section className="bg-card py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 md:px-14">
          <h2 className="font-display text-3xl leading-tight text-dark md:text-4xl">
            {lang === 'uk' ? 'Хочеш бути частиною цього?' : 'Want to be part of this?'}
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              {lang === 'uk' ? 'Приєднатись' : 'Join us'} →
            </Link>
            <Link to="/donate" className="rounded-full border border-dark px-7 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-bg">
              {lang === 'uk' ? 'Підтримати' : 'Support us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
