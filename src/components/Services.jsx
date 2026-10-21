import {
  LayoutDashboard,
  Bot,
  GitBranch,
  PlusCircle,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Digital Experience & Composable Platforms",
    description:
      "Architecting seamless front-ends and headless back-ends for modern agility.",
    items: [
      "LANDING PAGES",
      "INTELLIGENT WEB SITES",
      "CUSTOM WEB APPLICATION",
      "SAAS TOOLS",
    ],
  },

  {
    icon: Bot,
    title: "Applied AI Hyperautomation",
    description:
      "Deploying autonomous agents and RAG-based systems for operational dominance.",
    items: [
      "AI ASSISTANTS",
      "CHATBOTS",
      "AGENTIC AI",
      "HYPERAUTOMATION",
    ],
  },

  {
    icon: GitBranch,
    title: "Technology Strategy & Consulting",
    description:
      "Strategic blueprinting and recovery roadmaps for complex platform initiatives.",
    items: [
      "PRODUCT IDEATION",
      "PRODUCT ARCHITECTURE",
      "RESEARCH AND DEVELOPMENT",
      "SOLUTIONING",
    ],
  },

  {
    icon: PlusCircle,
    title: "Custom Developments",
    description:
      "Build tailored solutions designed around your unique business needs and workflows.",
    items: [
      "CUSTOM APPLICATIONS",
      "BILLING SOFTWARE",
      "PRODUCT DEVELOPMENT",
      "SOFTWARE DEVELOPMENT",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="l7-soft-section px-6 py-24 lg:px-8"
    >
      <div className="l7-container">

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div>
            <h2 className="l7-section-title">
              Strategic Capabilities
            </h2>

            <p className="l7-body mt-5">
              Our four core pillars of excellence designed to
              future-proof your digital operations.
            </p>
          </div>

          <a
            href="#contact"
            className="
              flex items-center gap-2
              text-[16px] font-bold
              text-[#0666c9]
              transition-all duration-300
              hover:translate-x-1
              hover:text-[#673cff]
              dark:text-[#70b2f4]
              dark:hover:text-[#a78bfa]
            "
          >
            View Full Service Catalog
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  l7-hover-card
                  relative flex min-h-[470px]
                  flex-col items-center
                  rounded-[20px]
                  bg-white
                  px-7 py-9
                  text-center
                  shadow-[0_12px_40px_rgba(20,57,100,0.07)]
                  dark:bg-[#111722]
                  dark:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                "
              >
                <div
                  className="
                    l7-hover-icon
                    flex h-[70px] w-[70px]
                    items-center justify-center
                    rounded-2xl
                    border border-[#e0e8f2]
                    bg-[#fbfdff]
                    text-[#0666c9]
                    shadow-sm
                    dark:border-white/10
                    dark:bg-[#182131]
                    dark:text-[#72b6f5]
                  "
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-[22px] font-extrabold leading-tight text-[#0d1b38] dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#536987] dark:text-[#9baac0]">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-wrap justify-center gap-2 pt-8">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="
                        l7-tag
                        rounded-md
                        border border-[#c9e2f8]
                        bg-[#f2f8fe]
                        px-3 py-1.5
                        text-[10px]
                        font-bold
                        text-[#0870c9]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[7px] w-full rounded-b-[20px] ${
                    index === 0
                      ? "bg-[#8d6aff]"
                      : index === 1
                        ? "bg-[#ff8b35]"
                        : index === 2
                          ? "bg-[#21b6e7]"
                          : "bg-[#48d5a0]"
                  }`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;