'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Limpar formulário
        e.currentTarget.reset()
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        setErrorMessage(errorData.error || 'Erreur lors de l\'envoi du message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="contact-page">
        {/* Hero Section with Background Image */}
        <section className="contact-hero">
          <div className="contact-hero-overlay">
            <div className="container">
              <h1>{t('contact.page_title')}</h1>
              <p>{t('contact.page_subtitle')}</p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Hours Section */}
              <div className="contact-hours-section">
                <div className="hours-card">
                  <h2>{t('contact.hours_title')}</h2>
                  <div className="hours-list-contact">
                    <div className="hour-item">
                      <span>Lundi: 11h30-22:30h</span>
                    </div>
                    <div className="hour-item special">
                      <span>Mardi à Jeudi: 11h30-22h30</span>
                    </div>
                    <div className="hour-item">
                      <span>Vendredi et Samedi : 11h30-23h00</span>
                    </div>
                    <div className="hour-item">
                      <span>Dimanche: 12h-15h _ 22h00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="contact-form-section">
                <div className="contact-form-card">
                  <h2>{t('contact.form_title')}</h2>
                  <p>{t('contact.form_subtitle')}</p>
                  
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <input type="text" id="firstName" name="firstName" required />
                        <label htmlFor="firstName">{t('contact.first_name')}</label>
                      </div>
                      <div className="form-group">
                        <input type="text" id="lastName" name="lastName" required />
                        <label htmlFor="lastName">{t('contact.last_name')}</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="email" id="email" name="email" required />
                      <label htmlFor="email">{t('contact.email')}</label>
                    </div>

                    <div className="form-group">
                      <input type="tel" id="phone" name="phone" />
                      <label htmlFor="phone">{t('contact.phone')}</label>
                    </div>

                    <div className="form-group">
                      <select id="subject" name="subject" required>
                        <option value="">{t('contact.subject_placeholder')}</option>
                        <option value="reservation">{t('contact.subject_reservation')}</option>
                        <option value="event">{t('contact.subject_event')}</option>
                        <option value="catering">{t('contact.subject_catering')}</option>
                        <option value="other">{t('contact.subject_other')}</option>
                      </select>
                      <label htmlFor="subject">{t('contact.subject')}</label>
                    </div>

                    <div className="form-group">
                      <textarea id="message" name="message" rows={5} required></textarea>
                      <label htmlFor="message">{t('contact.message')}</label>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="form-success-message">
                        ✅ Message envoyé avec succès ! Nous vous recontacterons prochainement.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="form-error-message">
                        ❌ {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : t('contact.submit')}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="contact-info-grid">
                <div className="info-card">
                  <h3>{t('contact.info_address')}</h3>
                  <p>Rte de Colovrex 22<br />1218 Le Grand-Saconnex<br />Suisse</p>
                </div>
                <div className="info-card">
                  <h3>{t('contact.info_phone')}</h3>
                  <p>+41 770075413</p>
                </div>
                <div className="info-card">
                  <h3>{t('contact.info_email')}</h3>
                  <p>restopizza.mt@gmail.com</p>
                </div>
                <div className="info-card">
                  <h3>{t('contact.info_reservations')}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{t('contact.info_reservations_desc')}</p>
                </div>
              </div>

              {/* Google Maps Section - Integrated */}
              <div className="map-section-integrated">
                <div className="map-header">
                  <h2>{t('contact.location_title')}</h2>
                  <p>{t('contact.location_subtitle')}</p>
                </div>
                <div className="map-container">
                  <iframe
                    src="https://maps.google.com/maps?q=Restaurant+Pizzeria+I+SAPORI,+Rte+de+Colovrex+22,+1218+Le+Grand-Saconnex,+Switzerland&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Pizzeria I SAPORI Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
} 