'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Menu() {
  const { t } = useLanguage()

  return (
    <section className="menu-dark" id="menu">
      <div className="container">
        <div className="menu-header-dark">
          <p className="menu-subtitle-dark">{t('menu.subtitle')}</p>
          <h2>{t('menu.title')}</h2>
          <div className="menu-divider"></div>
        </div>
        
        <div className="chef-suggestions-dark">
          <div className="menu-item-dark">
            <div className="menu-item-number">01</div>
            <div className="menu-item-content-dark">
              <h3>{t('menu.dish1.name')}</h3>
              <p>{t('menu.dish1.desc')}</p>
            </div>
            <div className="menu-price-dark">48.00 CHF</div>
          </div>
          
          <div className="menu-item-dark">
            <div className="menu-item-number">02</div>
            <div className="menu-item-content-dark">
              <h3>{t('menu.dish2.name')}</h3>
              <p>{t('menu.dish2.desc')}</p>
            </div>
            <div className="menu-price-dark">38.00 CHF</div>
          </div>

          <div className="menu-item-dark">
            <div className="menu-item-number">03</div>
            <div className="menu-item-content-dark">
              <h3>{t('menu.dish3.name')}</h3>
              <p>{t('menu.dish3.desc')}</p>
            </div>
            <div className="menu-price-dark">28.00 CHF</div>
          </div>
        </div>
      </div>
    </section>
  )
} 