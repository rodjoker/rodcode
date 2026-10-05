import type { ProjectCase } from './types'
import honeyBadger from './honey-badger'

export const projectCases: ProjectCase[] = [honeyBadger]

export function getProjectCase(slug: string): ProjectCase | undefined {
  return projectCases.find((p) => p.slug === slug)
}

export type { ProjectCase } from './types'
