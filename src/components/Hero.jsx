import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Pause,
} from "lucide-react";

const slides = [
  {
    eyebrow: "INTELLIGENT AI",
    title: "Does Your Website?",
    highlight: "Actually Making You Money?",
    description:
      "From intelligent websites to autonomous AI revenue systems, we build connected digital experiences that attract the right visitors, capture leads, and grow your business around the clock.",
    button: "Build My Revenue Engine",
    image: "https://ladder7.in/Intelligent-AI.webp",
  },

  {
    eyebrow: "INTELLIGENT AUTOMATION",
    title: "Driving Efficiency with Applied",
    highlight: "AI.",
    description:
      "Harness the power of agentic workflows and machine learning to automate complex enterprise processes.",
    button: "Start Your AI Journey",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=90",
  },

  {
    eyebrow: "NEXTSTEP DIGITAL ENGINEERING",
    title: "Engineering the Future of",
    highlight: "Digital Business.",
    description:
      "From composable digital experiences to autonomous AI ecosystems, we architect scalable technology solutions that drive measurable market dominance.",
    button: "Schedule a Strategic Consultation",
    image:
      "https://ladder7.in/images/L7-Insights-Home.webp",
  },

  {
    eyebrow: "ENTERPRISE CLOUD STRATEGY",
    title: "Your Strategic Partner in",
    highlight: "Digital Engineering",
    description:
      "Take the right next step. From complex AEM implementations to autonomous AI workflows and system rescues, we provide the elite engineering and strategic clarity you need to lead your market.",
    button: "Consult an Architect",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90",
  },
];

function Hero() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#06172d]"
    >
      {/* Background slides */}
      {slides.map((item, index) => (
        <div
          key={item.eyebrow}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Navy overlay */}
          <div className="absolute inset-0 bg-[#04182f]/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#03152b] via-[#031a35]/80 to-[#03152b]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03172e]/90 via-transparent to-transparent" />
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={() =>
          setActive(
            (active - 1 + slides.length) %
              slides.length
          )
        }
        className="absolute left-8 top-1/2 z-20 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right arrow */}
      <button
        onClick={() =>
          setActive(
            (active + 1) % slides.length
          )
        }
        className="absolute right-8 top-1/2 z-20 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      >
        <ChevronRight size={26} />
      </button>

      {/* Content */}
      <div className="l7-container relative z-10 flex min-h-[calc(100vh-72px)] items-center">
        <div
          key={active}
          className="l7-fade-up max-w-[850px] pb-16"
        >
          {/* Eyebrow */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#1681ff]/40 bg-[#0666c9]/20 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3894ff]" />

            <span className="text-[12px] font-bold tracking-[0.12em] text-[#50a4ff]">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[900px] text-[52px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white md:text-[64px] lg:text-[72px]">
            {slide.title}
            <br />
            {slide.highlight}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[690px] text-[17px] leading-7 text-[#d5e5fa] md:text-[18px]">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="l7-blue-button flex items-center gap-5 rounded-xl px-7 py-4 text-[15px] font-bold"
            >
              {slide.button}
              <ArrowRight size={22} />
            </a>

            <a
              href="#services"
              className="flex items-center rounded-xl border border-white/25 bg-white/5 px-7 py-4 text-[15px] font-bold text-white backdrop-blur-sm hover:bg-white/10"
            >
              View Our Capabilities
            </a>
          </div>

          {/* Slider controls */}
          <div className="mt-14 flex items-center gap-5">
            <button
              onClick={() =>
                setPaused(!paused)
              }
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/40 text-white"
            >
              <Pause size={11} />
            </button>

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  active === index
                    ? "w-9 bg-white"
                    : "w-2.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <div className="h-9 w-5 rounded-full border-2 border-white/70 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}

export default Hero;