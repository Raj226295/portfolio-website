import { ArrowRight } from 'lucide-react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { projects } from './portfolioData.js'

function ProjectCard({ project, index }) {
  const rotateXBase = useMotionValue(0)
  const rotateYBase = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const rotateX = useSpring(rotateXBase, { stiffness: 180, damping: 22 })
  const rotateY = useSpring(rotateYBase, { stiffness: 180, damping: 22 })
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, rgba(56, 189, 248, 0.18), transparent 58%)`

  const handleMove = ({ clientX, clientY, currentTarget }) => {
    const bounds = currentTarget.getBoundingClientRect()
    const x = (clientX - bounds.left) / bounds.width
    const y = (clientY - bounds.top) / bounds.height

    glowX.set(x * 100)
    glowY.set(y * 100)
    rotateXBase.set((0.5 - y) * 14)
    rotateYBase.set((x - 0.5) * 16)
  }

  const handleLeave = () => {
    glowX.set(50)
    glowY.set(50)
    rotateXBase.set(0)
    rotateYBase.set(0)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.01 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{ y: [0, -8, 0] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative rounded-[2rem] [perspective:1800px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="surface-panel relative h-full overflow-hidden rounded-[2rem] p-8"
      >
        <motion.div
          style={{ backgroundImage: glow }}
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        />
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-br ${project.theme}`}
        />
        <div className="relative flex h-full flex-col gap-8">
          <div className="space-y-5" style={{ transform: 'translateZ(56px)' }}>
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300/70">
                {project.outcome}
              </span>
              <ArrowRight className="size-5 text-cyan-200/70 transition duration-300 group-hover:translate-x-1" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-white">{project.title}</h3>
              <p className="text-sm leading-7 text-slate-300/75 sm:text-base">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="mt-auto space-y-4" style={{ transform: 'translateZ(32px)' }}>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200/80"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200/75">
              Built to feel elegant, fast, and deeply interactive across desktop
              and mobile.
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Interactive builds designed to feel like premium products."
          description="These concept projects emphasize depth, polish, and modern product storytelling with layered motion and tactile interactions."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
