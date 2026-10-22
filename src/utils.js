const getMediaQueryMatches = query => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia(query).matches
}

export const RM = getMediaQueryMatches('(prefers-reduced-motion:reduce)')
export const CAN_HOVER = getMediaQueryMatches('(hover:hover)')
