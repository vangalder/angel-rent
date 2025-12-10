'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BackgroundImage() {
  const [imageSrc, setImageSrc] = useState('/images/background-desktop.png')

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth
      if (width < 768) {
        setImageSrc('/images/background-mobile.png')
      } else if (width < 1024) {
        setImageSrc('/images/background-tablet.png')
      } else {
        setImageSrc('/images/background-desktop.png')
      }
    }

    updateImage()
    window.addEventListener('resize', updateImage)
    return () => window.removeEventListener('resize', updateImage)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={imageSrc}
        alt="El Ángel - Reforma 326, CDMX"
        fill
        priority
        quality={90}
        className="object-cover"
        sizes="100vw"
      />
    </div>
  )
}

