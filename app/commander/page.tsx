"use client"

import { useLanguage } from '../contexts/LanguageContext'
import { useEffect, useState } from 'react'

export default function CommanderPage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento do iframe
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="iframe-page-wrapper">
      {/* Page Title Section - Rola normalmente, não fica fixo */}
      <div className="page-title-section">
        <div className="container">
          <div className="page-title-content">
            <h1 className="page-title">{t('hero.order')}</h1>
            <div className="page-title-divider"></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="iframe-content-area">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="iframe-loading">
            <div className="loading-spinner"></div>
            <p>Chargement du menu...</p>
          </div>
        )}

        {/* Iframe Container */}
        <div className="iframe-container">
          <iframe
            src="https://isaporigeneve.wixsite.com/isapori"
            title="Commander - iSapori Menu"
            className="external-iframe"
            onLoad={() => setIsLoading(false)}
            allow="payment; geolocation"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
          />
        </div>

        {/* Back Button */}
        <div className="back-button-container">
          <a href="/" className="btn-back">
            <span>← Retour à l'accueil</span>
          </a>
        </div>
      </div>
    </div>
  )
}
