'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="contact" id="contact">
      <div className="contact-container-luxury">
        <div className="contact-info-luxury">
          <p className="section-label-luxury">{t('contact.label')}</p>
          <h2>{t('contact.title')}</h2>
          <div className="contact-details-luxury">
            <div className="contact-item-luxury">
              <h4>{t('contact.address')}</h4>
              <p>22 Route de Colornex<br />1218 Le Grand-Saconnex<br />Suisse</p>
            </div>
            <div className="contact-item-luxury">
              <h4>{t('contact.reservations')}</h4>
              <p>+41 770075413<br />restopizza.mt@gmail.com</p>
            </div>
            <div className="contact-item-luxury">
              <h4>{t('contact.concierge')}</h4>
              <p>{t('contact.events')}<br />restopizza.mt@gmail.com</p>
            </div>
          </div>
          <div className="hours-luxury">
            <h3>{t('contact.hours')}</h3>
            <div className="hours-list-luxury">
              <div className="hours-item-luxury">
                <span>{t('contact.monday')}</span>
                <span>11h30 - 22h30</span>
              </div>
              <div className="hours-item-luxury" style={{color: 'var(--or-imperial)', fontWeight: '500'}}>
                <span>{t('contact.summer')}</span>
                <span></span>
              </div>
              <div className="hours-item-luxury">
                <span>{t('contact.tuesday_thursday')}</span>
                <span>11h30 - 22h30</span>
              </div>
              <div className="hours-item-luxury">
                <span>{t('contact.friday_saturday')}</span>
                <span>11h30 - 23h00</span>
              </div>
              <div className="hours-item-luxury">
                <span>{t('contact.sunday')}</span>
                <span>12h00 - 22h00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation-form-luxury" id="reservation">
          <div className="reservation-header">
            <h3>{t('contact.reserve_table')}</h3>
            <p className="reservation-subtitle">{t('contact.reserve_subtitle')}</p>
          </div>
          <div className="reservation-buttons">
            <a href="/reserver" className="form-button-luxury">
              {t('contact.reserve_table')}
            </a>
            <a href="/commander" className="form-button-luxury" style={{background: 'transparent', border: '2px solid var(--or-imperial)', color: 'var(--or-imperial)', marginTop: '1rem'}}>
              {t('contact.order_online')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 