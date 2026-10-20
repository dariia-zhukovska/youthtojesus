import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router'

interface Props {
  children: ReactNode
}

export default function PageTransition({ children }: Props) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle')
  const prevKey = useRef(location.key)

  useEffect(() => {
    if (location.key === prevKey.current) return

    // Start exit
    setPhase('exit')

    const exitTimer = setTimeout(() => {
      // Swap content + scroll to top
      setDisplayLocation(location)
      window.scrollTo({ top: 0, behavior: 'instant' })
      setPhase('enter')
      prevKey.current = location.key
    }, 260)

    const enterTimer = setTimeout(() => {
      setPhase('idle')
    }, 260 + 450)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(enterTimer)
    }
  }, [location])

  const cls =
    phase === 'exit' ? 'page-exit' :
    phase === 'enter' ? 'page-enter' :
    ''

  return (
    <div key={displayLocation.key} className={cls}>
      {children}
    </div>
  )
}
