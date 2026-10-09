'use client'
import dynamic from 'next/dynamic'
import Lazy3D from './Lazy3D'
import { skills, categoryColors } from './skillsData'

const SkillsSphere = dynamic(() => import('./SkillsSphere'), { ssr: false })

// Versión sin 3D: mismas tecnologías agrupadas por categoría (móvil, ahorro de datos, sin JS de three).
function SkillsList() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
      {Object.entries(categoryColors).map(([category, color]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color }}>
            {category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills
              .filter((s) => s.category === category)
              .map((s) => (
                <li
                  key={s.name}
                  className="text-sm text-gray-200 border rounded-full px-3 py-1 bg-gray-900/60"
                  style={{ borderColor: `${s.color}66` }}
                >
                  {s.name}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function SkillsSphereClient() {
  return (
    <Lazy3D fallback={<SkillsList />} reserveHeight="55vh">
      <SkillsSphere />
    </Lazy3D>
  )
}
