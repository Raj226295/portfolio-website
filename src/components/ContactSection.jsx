import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { contactCards, sectionMotion } from './portfolioData.js'

function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s create something cinematic, useful, and unmistakably modern."
          description="If you need a portfolio, platform, dashboard, or immersive landing page with a premium edge, I’m ready to build it."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {contactCards.map((card, index) => {
              const Icon = card.icon

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="surface-panel rounded-[1.75rem] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-200/15 bg-cyan-200/10 p-3 text-cyan-100">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg text-white">{card.title}</h3>
                      <p className="text-sm leading-7 text-slate-300/75">
                        {card.copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.form
            variants={sectionMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={(event) => event.preventDefault()}
            className="surface-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.12),_transparent_35%)]" />
            <div className="relative space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/60">
                  Start a Conversation
                </p>
                <h3 className="text-2xl text-white sm:text-3xl">
                  Tell me what you want to build.
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-200/80">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="contact-input"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-200/80">
                  Email
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="contact-input"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-200/80">
                Project Type
                <input
                  type="text"
                  placeholder="Portfolio, dashboard, landing page, platform..."
                  className="contact-input"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-200/80">
                Brief
                <textarea
                  rows={6}
                  placeholder="Share the vision, goals, features, and timeline."
                  className="contact-input resize-none"
                />
              </label>

              <button type="submit" className="button-glow">
                Send Message
                <ArrowRight className="size-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
