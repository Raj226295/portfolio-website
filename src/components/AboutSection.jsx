import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { aboutLines, sectionMotion } from './portfolioData.js'

function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]"
      >
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About"
            title="Minimal on the surface. Deeply engineered underneath."
            description="I like interfaces that feel clean and calm while still carrying serious technical depth, thoughtful motion, and production-grade structure."
          />

          <div className="space-y-5">
            {aboutLines.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: '120%' }}
                  whileInView={{ opacity: 1, y: '0%' }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-base leading-8 text-slate-300/80 sm:text-lg"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="surface-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.15),_transparent_35%)]" />
          <div className="relative space-y-8">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200/70">
                Design Philosophy
              </span>
              <h3 className="text-2xl text-white sm:text-3xl">
                Clean structure, cinematic lighting, and purposeful motion.
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">
                  Frontend
                </p>
                <p className="mt-3 text-lg text-white">
                  React, Tailwind, Framer Motion
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">
                  Backend
                </p>
                <p className="mt-3 text-lg text-white">Node, Express, MongoDB</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">
                  Motion
                </p>
                <p className="mt-3 text-lg text-white">
                  3D scenes, tilt cards, scroll reveals
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">
                  Outcome
                </p>
                <p className="mt-3 text-lg text-white">
                  Fast, elegant, launch-ready products
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
