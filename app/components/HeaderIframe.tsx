'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

export default function HeaderIframe() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrolled / maxHeight) * 100
      const progressBar = document.querySelector('.scroll-progress')
      if (progressBar) {
        (progressBar as HTMLElement).style.width = `${scrollPercent}%`
      }
    }

    // Para páginas iframe, sempre manter o header no estilo "scrolled" (preto)
    const header = document.getElementById('header-iframe')
    if (header) {
      header.classList.add('scrolled')
    }

    window.addEventListener('scroll', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress"></div>

      {/* Header Supreme - Sempre no estilo preto para páginas iframe */}
      <header id="header-iframe" className="header-iframe scrolled">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src="/669fcd4c0c0dbd743aad047a_Untitled design (1).svg" alt="ISapori" className="logo-svg" />
              <span className="logo-text">iSapori</span>
            </a>
            <nav>
              <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <li><a href="/" onClick={closeMobileMenu}>{t('nav.home')}</a></li>
                <li><a href="/commander" onClick={closeMobileMenu}>{t('nav.order')}</a></li>
                <li><a href="/#menu" onClick={closeMobileMenu}>{t('nav.menu')}</a></li>
                <li><a href="/contact" onClick={closeMobileMenu}>{t('nav.contact')}</a></li>
              </ul>
            </nav>
            <div className="header-actions">
              <LanguageSelector />
              <a href="/reserver" className="reservation-supreme"><span>{t('nav.reserve')}</span></a>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/669fcd4c0c0dbd743aad047a_Untitled design (1).svg" alt="ISapori" className="mobile-logo" />
              <button className="mobile-close-btn" onClick={closeMobileMenu}>✕</button>
            </div>
            <nav className="mobile-nav">
              <a href="/" onClick={closeMobileMenu}>{t('nav.home')}</a>
              <a href="/commander" onClick={closeMobileMenu}>{t('nav.order')}</a>
              <a href="/#menu" onClick={closeMobileMenu}>{t('nav.menu')}</a>
              <a href="/contact" onClick={closeMobileMenu}>{t('nav.contact')}</a>
            </nav>
            <div className="mobile-actions">
              <LanguageSelector />
              <a href="/reserver" className="mobile-reservation-btn" onClick={closeMobileMenu}>
                {t('nav.reserve')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
