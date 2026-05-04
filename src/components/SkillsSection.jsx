import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { sectionMotion, skills } from './portfolioData.js'

function SkillOrb({ skill, index }) {
  const Icon = skill.icon

  return (
    <motion.div
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatDelay: 0.8 + index * 0.05,
      }}
      className="surface-panel group relative overflow-hidden rounded-[1.75rem] p-6"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />
      <div className="relative flex items-start gap-4">
        <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-cyan-200/15 bg-slate-950/80 shadow-[0_0_32px_rgba(34,211,238,0.16)]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14 + index * 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-1 rounded-full border border-dashed border-cyan-200/20"
          />
          <div className="relative z-10 rounded-full bg-cyan-300/10 p-2 text-cyan-100">
            <Icon className="size-5" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg text-white">{skill.name}</h3>
          <p className="text-sm leading-7 text-slate-300/70">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function OrbitDisplay() {
  return (
    <motion.div
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="surface-panel relative isolate min-h-[26rem] overflow-hidden rounded-[2rem] px-6 py-10 [perspective:1600px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.18),_transparent_58%)]" />
      <div className="pointer-events-none absolute inset-8 rounded-full border border-white/5" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-10 rounded-full border border-cyan-300/15 [transform-style:preserve-3d]"
      >
        <div className="orbit-node left-1/2 top-0 -translate-x-1/2">React</div>
        <div className="orbit-node left-1/2 top-full -translate-x-1/2 -translate-y-full">Node</div>
        <div className="orbit-node left-0 top-1/2 -translate-y-1/2">Mongo</div>
        <div className="orbit-node left-full top-1/2 -translate-x-full -translate-y-1/2">R3F</div>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-20 rounded-full border border-dashed border-white/10 [transform-style:preserve-3d]"
      >
        <div className="orbit-node left-1/2 top-0 -translate-x-1/2">API</div>
        <div className="orbit-node left-full top-1/2 -translate-x-full -translate-y-1/2">UI</div>
        <div className="orbit-node left-1/2 top-full -translate-x-1/2 -translate-y-full">Cloud</div>
        <div className="orbit-node left-0 top-1/2 -translate-y-1/2">Motion</div>
      </motion.div>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 shadow-[0_0_70px_rgba(34,211,238,0.2)] backdrop-blur-xl">
        <div className="space-y-1 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">
            Core Stack
          </p>
          <p className="text-2xl text-white">MERN</p>
        </div>
      </div>
    </motion.div>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit shaped for immersive product work."
          description="I blend modern frontend craft with backend reliability so every project feels premium to use and dependable to ship."
        />

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <OrbitDisplay />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillOrb key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
