import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-[#f5f8fc] px-6 py-24 transition-colors duration-500 dark:bg-[#080b12] lg:px-8">
      <div
        className="
          l7-cta
          mx-auto max-w-[1300px]
          overflow-hidden
          rounded-[30px]
          px-6 py-20
          text-center
          md:px-16
        "
        style={{
          backgroundColor: "#0867c9",
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 1px, transparent 1px, transparent 11px)",
        }}
      >
        <h2 className="mx-auto max-w-[950px] text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white md:text-[58px]">
          Your Website Should Be Generating Revenue Right Now.
        </h2>

        <p className="mx-auto mt-7 max-w-[760px] text-[18px] leading-8 text-white/85">
          Partner with Ladder7 to build an intelligent, connected,
          and scalable digital revenue system — engineered for your
          markets, your goals, and your growth.
        </p>

        <a
          href="#contact"
          className="
            mx-auto mt-10
            flex w-fit items-center gap-4
            rounded-xl
            bg-white
            px-9 py-5
            text-[18px]
            font-bold
            text-[#0666c9]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[#f0f6ff]
            hover:shadow-xl
          "
        >
          Start Your Revenue Engine Today
          <ArrowRight
            size={21}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}

export default CTA;