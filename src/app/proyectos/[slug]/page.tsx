import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCaseStudy from '@/components/ProjectCaseStudy'
import { getProjectCase, projectCases } from '@/data/projects'

type Params = { slug: string }

export function generateStaticParams() {
  return projectCases.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectCase(slug)
  if (!project) return {}
  return {
    title: `${project.title} | RodCode`,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline, images: [project.cover] },
  }
}

export default async function ProyectoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProjectCase(slug)
  if (!project) notFound()

  return (
    <>
      <Header />
      <ProjectCaseStudy project={project} />
      <Footer />
    </>
  )
}
