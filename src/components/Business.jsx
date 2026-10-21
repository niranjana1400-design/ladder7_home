import {
  Building2,
  Rocket,
} from "lucide-react";

const businesses = [
  {
    icon: Building2,
    title:
      "For Established Brands & Scaling Businesses",
    text:
      "We deliver robust, high-performance digital platforms with AI-powered personalisation, CRM integration, and analytics engineered for reliability, security, and global market reach across India, the Middle East, and Southeast Asia.",
  },

  {
    icon: Rocket,
    title:
      "For Fast-Growing Startups & SMBs",
    text:
      "We give ambitious businesses the same intelligent web systems, AI chatbots, and automated lead pipelines that larger organisations rely on so you convert more visitors, respond faster, and compete without limits.",
  },
];

function Business() {
  return (
    <section
      id="about"
      className="l7-soft-section px-6 py-24 lg:px-8"
    >
      <div className="l7-container">

        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="l7-section-title">
            Every Business. Every Market.
            <br />
            One Goal — Revenue.
          </h2>

          <p className="l7-body mt-7">
            We build intelligent digital systems for organisations
            ready to turn their online presence into their most
            powerful sales asset. At Ladder7 Nextstep Solutions,
            we believe every business — regardless of size —
            deserves a digital presence that actively generates
            revenue. We act as the strategic delivery partner for
            growth-focused organisations, translating digital
            ambition into measurable business outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {businesses.map((business) => {
            const Icon = business.icon;

            return (
              <div
                key={business.title}
                className="
                  l7-hover-card
                  relative overflow-hidden
                  rounded-[24px]
                  border border-[#1775d5]
                  bg-white
                  p-10
                  shadow-[0_20px_50px_rgba(20,57,100,0.06)]
                  dark:border-[#1d5b98]
                  dark:bg-[#111722]
                "
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#0666c9]/10 blur-3xl" />

                <div className="relative">
                  <div
                    className="
                      l7-hover-icon
                      flex h-[60px] w-[60px]
                      items-center justify-center
                      rounded-2xl
                      border border-[#9bc7ef]
                      bg-[#dcecff]
                      text-[#0666c9]
                      dark:border-[#315a83]
                      dark:bg-[#17283d]
                      dark:text-[#73b5f5]
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-[26px] font-extrabold text-[#10203c] dark:text-white">
                    {business.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-8 text-[#536987] dark:text-[#9baac0]">
                    {business.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Business;