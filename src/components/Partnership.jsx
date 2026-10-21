import {
  Scale,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Revenue-First, Always",
    text:
      "We do not build technology for technology's sake. Every platform, AI system, and integration we deliver is tied to a clear business outcome — more leads, lower acquisition costs, faster market entry, or higher conversion rates.",
  },

  {
    icon: ShieldCheck,
    title: "Global Delivery, Local Intelligence",
    text:
      "We are an active delivery partner across India, UAE, Saudi Arabia, Singapore, the UK, and North America. Our work is informed by the specific cultural, linguistic, and compliance requirements of each market — not applied generically.",
  },

  {
    icon: TrendingUp,
    title: "Security and Compliance Built In",
    text:
      "Every website, AI model, and data integration we build is privacy-first by design — aligned with GDPR, India's DPDP Act, UAE AI Policy, and Singapore's PDPA.",
  },
];

function Partnership() {
  return (
    <section className="bg-[#0d1b38] px-6 py-24 text-white lg:px-8">
      <div className="l7-container">

        <h2 className="text-center text-[40px] font-extrabold tracking-[-0.03em] md:text-[48px]">
          Why Innovators Partner With Ladder7
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  rounded-2xl p-6
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:bg-white/[0.04]
                "
              >
                <div
                  className="
                    mx-auto flex h-[68px] w-[68px]
                    items-center justify-center
                    rounded-full
                    bg-[#082c60]
                    text-white
                    transition-all duration-300
                    hover:scale-110
                    hover:bg-[#0666c9]
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-[22px] font-extrabold">
                  {reason.title}
                </h3>

                <p className="mt-5 text-[16px] leading-7 text-[#9bb8dc]">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Partnership;