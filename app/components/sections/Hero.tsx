"use client"

import { useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  useEffect(() => {
    // Smooth Scroll
    const initSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const href = (e.target as HTMLAnchorElement).getAttribute('href')
          // Verificar se é um link interno válido (começa com # e não é uma URL externa)
          if (href && href.startsWith('#') && !href.includes('http')) {
            const target = document.querySelector(href)
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }
          }
        })
      })
    }

    // Premium Parallax Effects
    const initParallaxEffects = () => {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset
        const hero = document.querySelector('.hero')
        
        if (hero && scrolled < window.innerHeight) {
          (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
        }
      })

      // Mouse interaction for particles
      window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        
        document.querySelectorAll('.premium-particle').forEach((particle, index) => {
          const speed = (index + 1) * 0.02
          const x = (clientX - centerX) * speed
          const y = (clientY - centerY) * speed
          
          ;(particle as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`
        })
      })
    }

    // Hero Content Animation
    const initHeroAnimations = () => {
      setTimeout(() => {
        const elements = [
          '.hero-eyebrow',
          '.hero-title-main', 
          '.hero-description',
          '.hero-buttons'
        ]
        
        elements.forEach((selector, index) => {
          setTimeout(() => {
            const element = document.querySelector(selector) as HTMLElement
            if (element) {
              element.style.opacity = '1'
              element.style.transform = 'translateY(0)'
            }
          }, index * 200)
        })
      }, 500)
    }

    initSmoothScroll()
    initParallaxEffects()
    initHeroAnimations()
  }, [])

  return (
    <section className="hero" id="home">
      {/* Hero Video Background */}
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        poster="/66c35aa4f786c505441be010_ContactImage-p-2000.avif"
      >
        <source src="/668e67dd7c9c8d8287160b37_66a64cdd662062b2ef4cdfe9_IsaporiVideo (1)-transcode.mp4" type="video/mp4" />
        {/* Fallback para navegadores que não suportam vídeo */}
        Seu navegador não suporta vídeo HTML5.
      </video>
      
      {/* Video Overlay */}
      <div className="hero-video-overlay"></div>
      
      {/* Premium Floating Elements */}
      <div className="premium-particles">
        <div className="premium-particle premium-particle-1"></div>
        <div className="premium-particle premium-particle-2"></div>
        <div className="premium-particle premium-particle-3"></div>
        <div className="premium-particle premium-particle-4"></div>
        <div className="premium-particle premium-particle-5"></div>
        <div className="premium-particle premium-particle-6"></div>
      </div>
      
      {/* Elegant Geometric Elements */}
      <div className="geometric-elements">
        <div className="geometric-circle geometric-circle-1"></div>
        <div className="geometric-circle geometric-circle-2"></div>
        <div className="geometric-line geometric-line-1"></div>
        <div className="geometric-line geometric-line-2"></div>
      </div>
      
      {/* Luxury Ambient Effects */}
      <div className="ambient-effects">
        <div className="ambient-glow ambient-glow-1"></div>
        <div className="ambient-glow ambient-glow-2"></div>
        <div className="ambient-glow ambient-glow-3"></div>
      </div>
      
      <div className="hero-frame">
        <div className="frame-corner frame-corner-tl"></div>
        <div className="frame-corner frame-corner-tr"></div>
        <div className="frame-corner frame-corner-bl"></div>
        <div className="frame-corner frame-corner-br"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">{t('hero.subtitle')}</p>
          <h1>
            <span className="hero-title-main" data-text={t('hero.title')}>{t('hero.title')}</span>
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-buttons">
            <a href="/commander" className="btn-luxury">
              <span>{t('hero.order')}</span>
            </a>
            <a href="/reserver" className="btn-minimal">
              <span>{t('hero.reserve')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 