import React from 'react'

export default function ParticleEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute w-1 h-1 bg-or-imperial/30 rounded-full animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
} 