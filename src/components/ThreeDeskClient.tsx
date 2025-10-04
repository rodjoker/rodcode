'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Import dinámico con ssr: false dentro de un Client Component
const ThreeDeskScene = dynamic(() => import('./ThreeDesk'), { ssr: false })

export default function ThreeDeskClient() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ThreeDeskScene />
    </div>
  )
}
