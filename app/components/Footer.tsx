'use client'

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="footer-content-luxury">
        <div className="footer-brand-luxury">
          <div className="footer-logo">
            <img src="/669fcd4c0c0dbd743aad047a_Untitled design (1).svg" alt="ISapori" className="footer-logo-svg" />
          </div>
          
          <div className="footer-contact">
            <h4>{t('footer.address_label')}</h4>
            <p>22 Route de Colornex<br />1218, Le Grand-Saconnex</p>
            
            <h4>{t('footer.contact_label')}</h4>
            <p>Tel: +41 770075413<br />Mail: restopizza.mt@gmail.com</p>
          </div>
          
          <div className="social-links-luxury">
            <a href="#" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-hours">
          <h4>{t('footer.hours_label')}</h4>
          <div className="hours-list">
            <p>Lundi: 11h30 - 22h30</p>
            <p style={{color: 'var(--or-imperial)', fontWeight: '500', marginTop: '1rem'}}>NOS HORAIRES D'ÉTÉ:</p>
            <p>Mardi à Jeudi: 11h30 - 22h30</p>
            <p>Vendredi et Samedi: 11h30 - 23h00</p>
            <p>Dimanche: 12h00 - 22h00</p>
          </div>
        </div>
        
        <div className="footer-menu">
          <h4>{t('footer.menu_label')}</h4>
          <ul>
            <li><a href="/reserver">{t('footer.reserve')}</a></li>
            <li><a href="/commander">{t('footer.order')}</a></li>
            <li><a href="#contact">{t('footer.contact')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom-luxury">
        <p>{t('footer.rights')}</p>
        <p>{t('footer.made_by')} <a href="mailto:codebrch@gmail.com">CodeBR - codebrch@gmail.com</a></p>
      </div>
    </footer>
  )
} 