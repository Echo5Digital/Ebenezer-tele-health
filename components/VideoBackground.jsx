'use client'
import { useRef, useEffect } from 'react'

const START = 2   // seconds — loop begin
const END   = 7.8 // seconds — trigger reset just before 8 s end for clean transition

export default function VideoBackground() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rafId

    // Poll at ~60 fps — resets currentTime within ~16 ms of reaching END
    const tick = () => {
      if (!video.paused && video.currentTime >= END) {
        video.currentTime = START
      }
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      video.currentTime = START
      rafId = requestAnimationFrame(tick)
    }

    // If video data already loaded, start immediately; otherwise wait for canplay
    if (video.readyState >= 3) {
      start()
    } else {
      video.addEventListener('canplay', start, { once: true })
    }

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('canplay', start)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover opacity-20"
      autoPlay
      muted
      playsInline
      aria-hidden="true"
    >
      <source src="/telehealth.mp4" type="video/mp4" />
    </video>
  )
}
