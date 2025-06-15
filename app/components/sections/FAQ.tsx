"use client"

import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqItems = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="faq-luxury">
      <div className="container">
        <div className="faq-content">
          <div className="faq-header">
            <h2>{t('faq.title')}</h2>
            <p className="faq-subtitle">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className={`faq-item ${openItem === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{openItem === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openItem === index ? 'expanded' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h3>{t('faq.more')}</h3>
            <p>Contactez nous pour d'autres demandes, nous vous répondrons au plus vite.</p>
            <a href="#contact" className="faq-contact-btn">{t('faq.contact')}</a>
          </div>
        </div>
      </div>
    </section>
  )
} 