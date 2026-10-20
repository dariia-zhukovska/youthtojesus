import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'

export type CommunityPhoto = {
  src: string
  alt: string
  caption?: string
  category?: string
}

const initialPhotoCount = 6

export default function CommunityPhotoGallery({ images }: { images: CommunityPhoto[] }) {
  const { lang } = useLang()
  const [expanded, setExpanded] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex(index => index === null ? null : (index - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex(index => index === null ? null : (index + 1) % images.length)
      }
    }

    document.addEventListener('keydown', handleKeyboard)
    return () => document.removeEventListener('keydown', handleKeyboard)
  }, [activeIndex, images.length])

  if (images.length === 0) return null

  const visibleImages = expanded ? images : images.slice(0, initialPhotoCount)
  const activeImage = activeIndex === null ? null : images[activeIndex]

  return (
    <section className="bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-14">
        <div className="grid gap-7 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-5 block text-xs font-bold uppercase tracking-widest text-green">
              {lang === 'uk' ? 'Наші моменти' : 'Our moments'}
            </span>
            <h2 className="font-display text-4xl leading-tight text-dark md:text-6xl">
              {lang === 'uk' ? 'Життя, яке ми розділяємо.' : 'Life we share together.'}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-dark/70 md:col-span-5">
            {lang === 'uk'
              ? 'За кожною зустріччю, поїздкою чи спільною справою стоять люди, дружба та історії, які ми творимо разом.'
              : 'Behind every gathering, trip, and shared experience are people, friendships, and stories we create together.'}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-3 md:auto-rows-[16rem] md:grid-cols-4">
          {visibleImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`animate-in group overflow-hidden rounded-xl text-left ${
                index === 0
                  ? 'col-span-2 row-span-2'
                  : index === 3
                    ? 'col-span-2 md:col-span-1'
                    : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < initialPhotoCount ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </button>
          ))}
        </div>

        {images.length > initialPhotoCount && !expanded && (
          <div className="mt-9 text-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="rounded-full border border-dark px-7 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-bg"
            >
              {lang === 'uk' ? 'Показати більше фото' : 'View more photos'}
            </button>
          </div>
        )}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-dark/95 p-4 md:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label={lang === 'uk' ? 'Закрити' : 'Close'}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:bg-white hover:text-dark"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation()
                  setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }}
                aria-label={lang === 'uk' ? 'Попереднє фото' : 'Previous photo'}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-colors hover:bg-white hover:text-dark md:left-6"
              >
                ←
              </button>
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation()
                  setActiveIndex((activeIndex + 1) % images.length)
                }}
                aria-label={lang === 'uk' ? 'Наступне фото' : 'Next photo'}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-colors hover:bg-white hover:text-dark md:right-6"
              >
                →
              </button>
            </>
          )}

          <figure className="max-h-full max-w-6xl" onClick={event => event.stopPropagation()}>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            {activeImage.caption && (
              <figcaption className="mt-3 text-center text-sm text-white/70">
                {activeImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  )
}
