import { Suspense, lazy } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroCanvas = lazy(() => import('./HeroCanvas.jsx'))

function HeroSection({ heroX, heroY }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_55%)]" />
          }
        >
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          style={{ x: heroX, y: heroY }}
          className="relative z-10 space-y-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex rounded-full border border-cyan-200/15 bg-cyan-200/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-100/80"
          >
            Full Stack MERN Developer
          </motion.span>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl xl:text-[5.8rem]"
            >
              Hi, I&apos;m <span className="text-gradient">Raj Singh</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-base leading-8 text-slate-300/80 sm:text-lg"
            >
              I craft futuristic digital experiences with elegant interfaces,
              resilient backend systems, and interactive 3D motion that gives
              every screen depth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects" className="button-glow justify-center sm:justify-start">
              View Projects
              <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="button-ghost justify-center sm:justify-start">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            <div className="surface-panel rounded-[1.5rem] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">
                Focus
              </p>
              <p className="mt-2 text-lg text-white">Premium Web Interfaces</p>
            </div>
            <div className="surface-panel rounded-[1.5rem] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">
                Stack
              </p>
              <p className="mt-2 text-lg text-white">React, Node, MongoDB</p>
            </div>
            <div className="surface-panel rounded-[1.5rem] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/60">
                Signature
              </p>
              <p className="mt-2 text-lg text-white">Motion + 3D Depth</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative hidden min-h-[34rem] lg:block" />
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.32em] text-slate-400"
      >
        Scroll
        <span className="flex h-14 w-8 justify-center rounded-full border border-white/10">
          <span className="mt-2 h-3 w-1 rounded-full bg-cyan-200" />
        </span>
      </motion.a>
    </section>
  )
}

export default HeroSection
