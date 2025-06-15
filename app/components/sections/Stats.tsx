"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()
  const [years, setYears] = useState(0)
  const [space, setSpace] = useState(0)
  const [seats, setSeats] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    // Animate years (20)
    let currentYears = 0
    const yearsInterval = setInterval(() => {
      currentYears += 20 / steps
      setYears(Math.min(Math.round(currentYears), 20))
      if (currentYears >= 20) clearInterval(yearsInterval)
    }, stepDuration)

    // Animate space (200)
    let currentSpace = 0
    const spaceInterval = setInterval(() => {
      currentSpace += 200 / steps
      setSpace(Math.min(Math.round(currentSpace), 200))
      if (currentSpace >= 200) clearInterval(spaceInterval)
    }, stepDuration)

    // Animate seats (130)
    let currentSeats = 0
    const seatsInterval = setInterval(() => {
      currentSeats += 130 / steps
      setSeats(Math.min(Math.round(currentSeats), 130))
      if (currentSeats >= 130) clearInterval(seatsInterval)
    }, stepDuration)
  }

  return (
    <section ref={sectionRef} className="stats-luxury">
      <div className="container">
        <div className="stats-content">
          <div className="stats-text">
            <h2 className="stats-title">
              {t('stats.title')} <span className="stats-title-accent">{t('stats.subtitle')}</span>
            </h2>
            <p className="stats-description">
              {t('stats.description')}
            </p>
          </div>
          <div className="stats-numbers">
            <div className="stat-item">
              <div className="stat-line"></div>
              <div className="stat-number">{years}</div>
              <div className="stat-label">{t('stats.years')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-line"></div>
              <div className="stat-number">{space}</div>
              <div className="stat-label">{t('stats.space')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-line"></div>
              <div className="stat-number">{seats}</div>
              <div className="stat-label">{t('stats.seats')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 