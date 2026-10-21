
const capabilities = [
  {
    number: "01",
    title: "Digital Experience & Web Engineering",
    text: "Modern digital experiences, high-performance websites, composable platforms and scalable web applications.",
  },
  {
    number: "02",
    title: "AI & Intelligent Automation",
    text: "AI assistants, chatbots, intelligent workflows and automation designed around practical business outcomes.",
  },
  {
    number: "03",
    title: "Strategy & Technology Consulting",
    text: "Technology strategy, product architecture, research, development and solution planning for complex initiatives.",
  },
  {
    number: "04",
    title: "Custom Development",
    text: "Tailored applications, billing systems, products and software built around your unique business workflows.",
  },
];

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-white px-6 py-32 dark:bg-[#0d0d0d] lg:px-10"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
              Strategic Capabilities
            </p>

            <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Technology
              <br />
              built for growth.
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-neutral-500 dark:text-neutral-400">
              Our capabilities combine digital experience,
              engineering, intelligent automation and technology
              strategy to create scalable business systems.
            </p>
          </div>

          <div className="border-t border-black/10 dark:border-white/10">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group border-b border-black/10 py-9 dark:border-white/10"
              >
                <div className="flex items-start gap-7">
                  <span className="pt-1 text-xs text-neutral-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-neutral-500 dark:text-neutral-400">
                      {item.text}
                    </p>
                  </div>

                  <span className="ml-auto text-xl text-violet-500 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Capabilities;

