'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Nariste K_13",
      text: "Excellent restaurant italien ! Les plats sont délicieux et le service impeccable. Je recommande vivement !",
      stars: 5
    },
    {
      name: "Lakeisha Finney", 
      text: "Une expérience culinaire fantastique. Les pâtes fraîches sont un délice et l'ambiance est parfaite.",
      stars: 5
    },
    {
      name: "Miles Barnett",
      text: "Service exceptionnel et nourriture authentique. C'est notre restaurant italien préféré à Genève !",
      stars: 5
    },
    {
      name: "Emre",
      text: "Qualité irréprochable, personnel très accueillant. Les pizzas sont cuites à la perfection !",
      stars: 5
    },
    {
      name: "Pavol Kico",
      text: "Ambiance chaleureuse et plats savoureux. Une adresse incontournable pour les amateurs de cuisine italienne.",
      stars: 5
    },
    {
      name: "Rob Watkins",
      text: "Restaurant de qualité avec des ingrédients frais. Le rapport qualité-prix est excellent !",
      stars: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <h2>{t('testimonials.title')}</h2>
          <div className="google-badge">
            <svg className="google-logo" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="google-text">{t('testimonials.google')}</span>
            <div className="google-stars">
              ★★★★★
            </div>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <svg className="google-icon" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="author-name">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 