import { useEffect } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import AboutSection from './AboutSection.jsx'
import ContactSection from './ContactSection.jsx'
import HeroSection from './HeroSection.jsx'
import ProjectsSection from './ProjectsSection.jsx'
import SkillsSection from './SkillsSection.jsx'
import { navItems } from './portfolioData.js'

function PortfolioPage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.2,
  })

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const glowX = useSpring(cursorX, { stiffness: 180, damping: 26, mass: 0.3 })
  const glowY = useSpring(cursorY, { stiffness: 180, damping: 26, mass: 0.3 })
  const heroX = useTransform(pointerX, [-1, 1], [26, -26])
  const heroY = useTransform(pointerY, [-1, 1], [20, -20])

  useEffect(() => {
    const handlePointerMove = (event) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      pointerX.set((event.clientX / window.innerWidth) * 2 - 1)
      pointerY.set((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [cursorX, cursorY, pointerX, pointerY])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 top-0 z-50 h-px w-full origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300"
      />

      <motion.div
        style={{ x: glowX, y: glowY }}
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-40 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      />

      <div className="grid-overlay pointer-events-none fixed inset-0 -z-20 opacity-40" />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10" />

      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/50 px-5 py-3 backdrop-blur-2xl">
          <a href="#home" className="text-sm font-medium uppercase tracking-[0.32em] text-slate-100">
            Raj Singh
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300/80 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="button-glow text-sm">
            Let&apos;s Build
          </a>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <HeroSection heroX={heroX} heroY={heroY} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </motion.main>
    </div>
  )
}

export default PortfolioPage
