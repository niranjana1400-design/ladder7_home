
const solutions = [
  {
    number: "01",
    title: "Growing Businesses",
    text: "Build a stronger digital presence with modern websites and applications designed around your customers.",
  },
  {
    number: "02",
    title: "Established Teams",
    text: "Modernize existing digital systems and create better connected experiences for your organization.",
  },
  {
    number: "03",
    title: "New Products",
    text: "Turn your idea into a polished digital product with a clear interface and reliable technology.",
  },
];

function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-[#111111] px-5 py-28 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            SOLUTIONS
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Technology that works for your business.
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-white/50">
            Practical digital solutions designed to help businesses improve
            their online presence, workflows and customer experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="group min-h-[320px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/50 hover:bg-gradient-to-br hover:from-violet-600/30 hover:to-blue-600/20"
            >
              <span className="text-sm text-white/30">
                {solution.number}
              </span>

              <h3 className="mt-20 text-2xl font-bold">
                {solution.title}
              </h3>

              <p className="mt-5 leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/80">
                {solution.text}
              </p>

              <div className="mt-8 text-xl text-violet-400 transition-transform duration-300 group-hover:translate-x-2">
                →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;

