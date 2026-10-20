import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'

export type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

export default function PhotoGallery({ title, images }: { title: string; images: GalleryImage[] }) {
  const { lang } = useLang()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [activeIndex])

  if (images.length === 0) return null

  const activeImage = activeIndex === null ? null : images[activeIndex]

  return (
    <div className="mt-12">
      <div className="mb-7 flex items-end justify-between gap-5 border-b border-dark/15 pb-4">
        <h3 className="font-display text-3xl font-bold text-dark md:text-4xl">{title}</h3>
        <span className="text-xs font-bold uppercase tracking-widest text-dark/40">
          {String(images.length).padStart(2, '0')}
        </span>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden text-left"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {image.caption && (
              <span className="mt-2 block text-sm leading-relaxed text-dark/55">{image.caption}</span>
            )}
          </button>
        ))}
      </div>

      {activeImage && (
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
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:bg-white hover:text-dark"
            aria-label={lang === 'uk' ? 'Закрити' : 'Close'}
          >
            ×
          </button>
          {images.length > 1 && activeIndex !== null && (
            <>
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation()
                  setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-colors hover:bg-white hover:text-dark"
                aria-label={lang === 'uk' ? 'Попереднє фото' : 'Previous photo'}
              >
                ←
              </button>
              <button
                type="button"
                onClick={event => {
                  event.stopPropagation()
                  setActiveIndex((activeIndex + 1) % images.length)
                }}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-colors hover:bg-white hover:text-dark"
                aria-label={lang === 'uk' ? 'Наступне фото' : 'Next photo'}
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
              <figcaption className="mt-3 text-center text-sm text-white/65">
                {activeImage.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </div>
  )
}
