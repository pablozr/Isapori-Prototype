"use client"

import React from 'react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container-elegant section-elegant">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-crimson font-semibold text-gray-900 mb-4">
              ISapori
            </h3>
            <p className="text-elegant mb-6">
              Une expérience gastronomique incomparable où la tradition
              italienne rencontre l&apos;innovation contemporaine.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-yellow-600 hover:text-yellow-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-sm font-medium">FB</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-yellow-600 hover:text-yellow-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="text-sm font-medium">IG</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-yellow-600 hover:text-yellow-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-medium">LI</span>
              </a>
            </div>
          </div>
          
          {/* Menu Section */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="btn-ghost"
                >
                  Antipasti
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="btn-ghost"
                >
                  Primi Piatti
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="btn-ghost"
                >
                  Secondi Piatti
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="btn-ghost"
                >
                  Dolci
                </button>
              </li>
            </ul>
          </div>
          
          {/* Experiences Section */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Expériences
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="btn-ghost"
                >
                  Table du Chef
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="btn-ghost"
                >
                  Accord Mets-Vins
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="btn-ghost"
                >
                  Événements Privés
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-ghost"
                >
                  Réservations
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="btn-ghost"
                >
                  Notre Histoire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('awards')}
                  className="btn-ghost"
                >
                  Récompenses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-ghost"
                >
                  Nous Contacter
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="divider mb-8"></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            &copy; 2024 ISapori • Tous droits réservés • Ristorante Italiano d&apos;Excellence
          </p>
        </div>
      </div>
    </footer>
  )
} 