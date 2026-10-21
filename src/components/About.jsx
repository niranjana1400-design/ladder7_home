
function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-28 dark:bg-[#0d0d0d] lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 p-[1px]">

          <div className="rounded-[2.5rem] bg-white p-8 dark:bg-[#0d0d0d] lg:p-16">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-cyan-400">
                  About
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  We turn ideas into useful digital experiences.
                </h2>
              </div>

              <div>
                <p className="leading-8 text-neutral-600 dark:text-neutral-400">
                  Our approach combines thoughtful design with modern
                  development. Every project starts by understanding the
                  problem, then creating a practical digital experience
                  around the people who will use it.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-[#f5f5f5] p-6 dark:bg-white/5">
                    <p className="text-3xl font-black">25+</p>
                    <p className="mt-2 text-sm text-neutral-500">
                      Digital projects
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f5f5f5] p-6 dark:bg-white/5">
                    <p className="text-3xl font-black">4+</p>
                    <p className="mt-2 text-sm text-neutral-500">
                      Core capabilities
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

