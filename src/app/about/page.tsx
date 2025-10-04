import Footer from '@/components/Footer';
import Header from '../../components/Header';
import ProfileCard from '@/components/ProfileCard';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20 md:py-0">
        <section className="min-h-screen md:h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-16 md:py-0 mt-16 md:mt-32">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Rodolfo Rodríguez"
              title="Frontend Developer"
              description="Desde que tengo memoria, la tecnología me fascinaba. Mientras otros soñaban con ser astronautas o futbolistas, yo soñaba con entender cómo funcionaban los ordenadores, los videojuegos, los cables, los códigos. Me pasaba horas imaginando que algún día podría crear cosas increíbles con solo unas líneas en una pantalla. Aunque no lo sabía entonces, esa pasión infantil sería la semilla de algo mucho más grande."
              subtitle="Mi Enfoque"
              additionalDescription="En algun punto pense que no se iba a poder, pero, descubrí que la vida te puede dar sorpresas."
              image="/rodolfo_perfil.png"
              showReadMore={true}
              extendedContent={`
                <div class="space-y-6">
                  <p>
                   La vida me llevó por un camino diferente inicialmente. Durante años, trabajé en otros campos, pero la pasión por la tecnología nunca se apagó. Siempre encontraba la manera de incorporar soluciones tecnológicas en mi trabajo diario. Finalmente, decidí dar el salto y convertirme en desarrollador profesional.
                  </p>
                  <p>
                    Este cambio no fue fácil, pero la satisfacción de crear soluciones digitales y ver cómo impactan positivamente en la vida de las personas hace que todo el esfuerzo valga la pena. Un año después de terminar el bootcamp, tras muchos proyectos personales y noches de aprendizaje, fui reclutado por un grupo de desarrolladores como junior. Desde entonces, no he parado de crecer.
                  </p>
                  <p>
                    Hoy lidero equipos, diseño soluciones, y creo aplicaciones que funcionan y emocionan. Programar no solo me dio una nueva carrera: me devolvió la alegría, me quitó el estrés, me hizo sentir vivo. Cada línea de código que escribo es un paso más hacia el futuro que siempre soñé.
                  </p>
                </div>
              `}
            />
          </div>
        </section>

        {/* Sección 2 - Verde salvia */}
        <section className="min-h-screen md:h-screen w-full bg-black-800 flex items-center justify-center px-4 py-16 md:py-0">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Experiencia Técnica"
              title="React & Next.js Specialist"
              description="Mi viaje en el desarrollo web comenzó con HTML y CSS, pero rápidamente me enamoré de React y su ecosistema. La capacidad de crear interfaces dinámicas y escalables me cautivó desde el primer momento."
              subtitle="Tecnologías Principales"
              additionalDescription={`
                <ul class="space-y-2 list-none text-sm">
                  <li class="flex flex-col">
                    <span class="font-semibold text-green-800 mb-1 text-xs">Frontend:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">JavaScript</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">TypeScript</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">React</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Next JS.</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Material UI</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">HTML</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">CSS</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Tailwind</span>
                    </div>
                  </li>
                  <li class="flex flex-col">
                    <span class="font-semibold text-green-800 mb-1 text-xs">Backend:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Node.js</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Express.js</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Nest JS.</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Python (FastAPI)</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Supabase</span>
                    </div>
                  </li>
                  <li class="flex flex-col">
                    <span class="font-semibold text-green-800 mb-1 text-xs">Bases de datos:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">MongoDB</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">PostgreSQL</span>
                    </div>
                  </li>
                  <li class="flex flex-col">
                    <span class="font-semibold text-green-800 mb-1 text-xs">Cloud y herramientas:</span>
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">AWS</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">IAM</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Cognito</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">S3</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Amazon Connect</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Salesforce</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">Git</span>
                      <span class="px-2 py-0.5 bg-green-50 rounded-full text-green-700 text-xs">GitHub</span>
                    </div>
                  </li>
                </ul>
              `}
              image="/rodolfo_perfil.png"
              showReadMore={true}
              extendedContent="Mi stack tecnológico incluye experiencia profunda en React y sus patrones avanzados, Next.js para aplicaciones full-stack, TypeScript para código más seguro y mantenible, y Tailwind CSS para diseños elegantes y responsivos control de versiones con Git, y metodologías ágiles. Constantemente me mantengo actualizado con las últimas tendencias y mejores prácticas del desarrollo frontend."
            />
          </div>
        </section>

        {/* Sección 3 - Verde bosque claro */}
        <section className="min-h-screen md:h-screen w-full bg-emerald-800 flex items-center justify-center px-4 py-16 md:py-0">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Metodología"
              title="Clean Code Advocate"
              description="Creo firmemente en la importancia del código limpio y mantenible. Cada proyecto es una oportunidad para implementar las mejores prácticas de desarrollo."
              subtitle="Principios de Desarrollo"
              additionalDescription="DRY, SOLID, y arquitectura limpia son los pilares de mi enfoque de desarrollo."
              image="/rodolfo_perfil.png"
              showReadMore={true}
              extendedContent="Mi enfoque metodológico se basa en años de experiencia y mejores prácticas de la industria. Creo en la importancia de escribir código que no solo funcione, sino que sea fácil de entender y mantener. Implemento patrones de diseño probados, prácticas de testing exhaustivas y documentación clara. La refactorización constante y la revisión de código son parte fundamental de mi proceso de desarrollo."
            />
          </div>
        </section>

        {/* Sección 4 - Verde primavera */}
        <section className="min-h-screen md:h-screen w-full bg-black-800 flex items-center justify-center px-4 py-16 md:py-0 mb-16 md:mb-0">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Objetivos"
              title="Innovación Continua"
              description="Constantemente busco nuevas formas de mejorar y optimizar los proyectos en los que trabajo, manteniéndome al día con las últimas tendencias."
              subtitle="Visión de Futuro"
              additionalDescription="Comprometido con el aprendizaje continuo y la adopción de nuevas tecnologías que beneficien a los proyectos y usuarios finales."
              image="/rodolfo_perfil.png"
              showReadMore={true}
              extendedContent={`
                <div class="space-y-6">
                  <p>
                    Mi objetivo principal es seguir creciendo como desarrollador mientras creo soluciones que realmente marquen la diferencia. Me apasiona construir aplicaciones que no solo sean técnicamente sólidas, sino que también mejoren la vida de quienes las usan.
                  </p>
                  <p>
                    Día a día continúo formándome y perfeccionando mis habilidades, especialmente en plataformas como Amazon Connect y Salesforce, que me permiten desarrollar soluciones más integrales, escalables y centradas en la experiencia del usuario.
                  </p>
                  <p>
                    Estoy especialmente interesado en proyectos que desafíen mis capacidades y me impulsen a explorar nuevas tecnologías, metodologías ágiles y enfoques innovadores. A largo plazo, aspiro a contribuir activamente a la comunidad tech compartiendo conocimientos, experiencias y acompañando a otros desarrolladores en su camino a través de la mentoría.
                  </p>
                </div>
              `}
            />
          </div>
        </section>

        {/* Sección 4 - Verde primavera */}
        <section className="min-h-screen md:h-screen w-full bg-emerald-800 flex items-center justify-center px-4 py-16 md:py-0 mb-16 md:mb-0">
          <div className="max-w-5xl w-11/12">
            <ProfileCard
              name="Objetivo"
              title="Innovación Continua"
              description="Constantemente busco nuevas formas de mejorar y optimizar los proyectos en los que trabajo, manteniéndome al día con las últimas tendencias."
              subtitle="Visión de Futuro"
              additionalDescription="Comprometido con el aprendizaje continuo y la adopción de nuevas tecnologías que beneficien a los proyectos y usuarios finales."
              image="/rodolfo_perfil.png"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
