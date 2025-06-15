"use client"

import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    const initLoader = () => {
      setTimeout(() => {
        const loader = document.querySelector('.loader')
        if (loader) {
          (loader as HTMLElement).style.display = 'none'
        }
      }, 3000)

      // Start hero animations with stagger
      setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-eyebrow, .hero-title-main, .hero-description, .hero-buttons')
        heroElements.forEach((element, index) => {
          setTimeout(() => {
            const el = element as HTMLElement
            el.style.opacity = '1'
            
            // Aplicar transform específico para cada elemento
            if (el.classList.contains('hero-eyebrow')) {
              el.style.transform = 'translateY(0)'
            } else if (el.classList.contains('hero-title-main')) {
              el.style.transform = 'translateY(0)'
            } else if (el.classList.contains('hero-description')) {
              el.style.transform = 'translateY(0)'
            } else if (el.classList.contains('hero-buttons')) {
              el.style.transform = 'translateY(0)'
            }
          }, index * 150)
        })
      }, 1000)
    }

    if (document.readyState === 'complete') {
      initLoader()
    } else {
      window.addEventListener('load', initLoader)
    }

    return () => {
      window.removeEventListener('load', initLoader)
    }
  }, [])

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">ISapori</div>
        <div className="loader-line"></div>
      </div>
    </div>
  )
} 