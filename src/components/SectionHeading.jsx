function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-cyan-100/80">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="text-base leading-8 text-slate-300/80 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SectionHeading
