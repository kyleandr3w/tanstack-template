import { X } from 'lucide-react'
import { useState } from 'react'

export function TopBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="flex items-center justify-between px-4 py-2 text-sm text-white bg-gradient-to-r from-orange-500 to-red-600">
      <p className="flex-1">
        <a
          href="https://sonoraxav.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold underline-offset-2 hover:underline"
        >
          SonoraX AV
        </a>{' '}
        · Tech chat for professional audio, video, networking, home automation, and security systems.
      </p>
      <button
        type="button"
        aria-label="Dismiss banner"
        onClick={() => setVisible(false)}
        className="ml-4 rounded-full p-1 hover:bg-white/10 focus:outline-none focus:ring focus:ring-white/40"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
