const reasons = [
{
number: "01",
title: "Business Focused",
text: "We start with your business requirement and design the technology around the actual problem you need to solve.",
},
{
number: "02",
title: "Clear Process",
text: "From planning and design to development and launch, every stage is kept clear and structured.",
},
{
number: "03",
title: "Modern Technology",
text: "We use maintainable modern technologies to create reliable and responsive digital products.",
},
];

function WhyUs() {
return ( <section
   id="why-us"
   className="bg-[#111] px-6 py-32 text-white lg:px-10"
 > <div className="mx-auto max-w-[1500px]">


    <div className="max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
        Why Partner With Us
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
        A digital partner focused on useful results.
      </h2>

      <p className="mt-7 max-w-2xl leading-8 text-white/50">
        We combine design, development and business understanding
        to create digital experiences that are practical and easy
        to use.
      </p>
    </div>

    <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-white/10 md:grid-cols-3">

      {reasons.map((reason) => (
        <div
          key={reason.number}
          className="group min-h-[360px] border-b border-white/10 p-9 transition-all duration-500 hover:bg-violet-600 md:border-b-0 md:border-r md:last:border-r-0 lg:p-12"
        >
          <span className="text-xs text-white/30">
            {reason.number}
          </span>

          <h3 className="mt-24 text-2xl font-bold">
            {reason.title}
          </h3>

          <p className="mt-5 leading-7 text-white/45 group-hover:text-white/80">
            {reason.text}
          </p>

          <div className="mt-8 text-xl text-violet-400 group-hover:text-white">
            →
          </div>
        </div>
      ))}

    </div>
  </div>
</section>


);
}

export default WhyUs;
