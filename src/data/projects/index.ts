import type { ProjectCase } from './types'
import honeyBadger from './honey-badger'
import gemes from './gemes'
import englishJourney from './english-journey'
import zonaClientes from './zona-clientes'

export const projectCases: ProjectCase[] = [honeyBadger, gemes, englishJourney, zonaClientes]

export function getProjectCase(slug: string): ProjectCase | undefined {
  return projectCases.find((p) => p.slug === slug)
}

export type { ProjectCase } from './types'
