import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Pause,
  Play,
} from "lucide-react";

const products = [
  {
    title: "Site 360",

    subtitle: "One audit, twelve lenses, one score.",

    description:
      "Site 360 runs live checks against your actual website across twelve lenses, from performance and accessibility to SEO, AEO, GEO and security, then returns a single Digital Health score with the highest-impact fixes ranked first. Built for anyone accountable for how a website performs across search and AI.",

    features: [
      "Twelve analysis lenses in one scan, not six tools with six verdicts",
      "Findings ranked by revenue impact, not a flat checklist",
      "Fixes pushed to Jira and Azure DevOps, so the work reaches the backlog",
    ],

    primaryButton: "Learn More on L7 Nexus",
    secondaryButton: "Book a demo",

    image: "https://ladder7.in/images/L7-Nexus-Home.webp",
  },

  {
    title: "L7 Nexus",

    subtitle:
      "An executive team for your business, working this afternoon.",

    description:
      "L7 Nexus reads your website, builds a company brain that stays yours, and puts ten named executives and fifty specialists to work on your business. Built for any business carrying decisions its owner should not have to make alone.",

    features: [
      "Ten executives covering finance, marketing, revenue, operations and people",
      "A board review that returns one decision, not nine dashboards",
      "A company brain in plain markdown you can download at any time",
      "Free for now on every account, no card",
    ],

    primaryButton: "Learn More on L7 Nexus",
    secondaryButton: "Book a demo",

    image: "https://ladder7.in/images/L7-Nexus-Home.webp",
  },

  {
    title: "L7 Insights",

    subtitle:
      "Your data is in six places. Your dashboard should not be.",

    description:
      "L7 Insights connects the systems you already use, from Google Sheets and CSVs to BigQuery, Snowflake, Zoho, SharePoint and SAP, then joins tables across them so one chart can draw on more than one source. The joined result behaves like any other data source.",

    features: [
      "Every connected source becomes a table you can chart, no warehouse project required",
      "Join tables across systems and build on the joined result directly",
      "Column matching suggestions in development, with confirmation required before anything is applied",
    ],

    primaryButton: "Learn More on L7 Insights",
    secondaryButton: "Book a demo",

    image: "https://ladder7.in/images/L7-Insights-Home.webp",
  },

  {
    title: "Outreach Engine",

    subtitle:
      "One email at a time, written for one person.",

    description:
      "Outreach Engine researches each prospect and writes them a single email rather than filling in a template, then runs the deliverability work that gets it into the primary inbox. Success is measured in calls booked, not emails sent. Currently in limited beta.",

    features: [
      "Every message written for one recipient, never a merge-tag blast",
      "Inbox rotation and an automatic warmup engine protecting sender reputation",
      "SPF, DKIM and DMARC validation plus address verification before you send",
    ],

    primaryButton: "Learn More on Outreach Engine",
    secondaryButton: "Request beta access",

    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90",
  },

  {
    title: "Infinite Insights",

    subtitle:
      "Every ad channel, one dashboard, one version of the truth.",

    description:
      "Infinite Insights unifies Meta, Google Ads, LinkedIn and GA4 into one marketing analytics platform, then reports cross-channel attribution, signal health and campaign performance in a single view. Built for anyone spending on more than one ad channel and tired of stitching exports together.",

    features: [
      "Meta, Google Ads, LinkedIn and GA4 joined into one cross-channel view",
      "Signal health monitoring that catches a broken pixel or conversions API before the spend is wasted",
      "AI-generated recommendations on where the next budget dollar works hardest",
    ],

    primaryButton: "Learn More on Infinite Insights",
    secondaryButton: "Request Demo",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=90",
  },
];

function Products() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const product = products[active];

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % products.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [paused]);

  const previousSlide = () => {
    setActive(
      (current) =>
        (current - 1 + products.length) % products.length
    );
  };

  const nextSlide = () => {
    setActive(
      (current) => (current + 1) % products.length
    );
  };

  return (
    <section
      id="products"
      className="l7-soft-section px-6 py-24 lg:px-8"
    >
      <div className="l7-container">

        {/* =====================================
            FIXED SECTION HEADING
        ===================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="l7-section-title">
            Intelligent Products for Every Corner of Your Business
          </h2>

          <p className="l7-body mx-auto mt-7 max-w-[850px]">
            From web performance and marketing analytics to sales,
            data, and operations, each product is designed to end
            in an action rather than a report.
          </p>
        </div>

        {/* =====================================
            PRODUCT SLIDER
        ===================================== */}

        <div className="relative mt-16">

          <div
            key={active}
            className="l7-product-slider l7-fade-up relative overflow-hidden rounded-[30px] border border-[#e4ebf4] bg-white shadow-[0_20px_60px_rgba(20,57,100,0.07)]"
          >

            <div className="grid min-h-[650px] lg:grid-cols-2">

              {/* =================================
                  LEFT CONTENT
              ================================= */}

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

                <h3 className="text-[40px] font-extrabold leading-tight tracking-[-0.035em] text-[#0d1b38] md:text-[46px]">
                  {product.title}
                </h3>

                <h4 className="mt-4 text-[21px] font-bold leading-[1.35] text-[#10203c] md:text-[23px]">
                  {product.subtitle}
                </h4>

                <p className="mt-7 max-w-[600px] text-[17px] leading-8 text-[#536987]">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mt-7 space-y-4">

                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="group flex items-start gap-3"
                    >
                      <span className="mt-[2px] flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-[#0666c9] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#673cff]">
                        <ArrowUpRight size={13} />
                      </span>

                      <p className="text-[15px] font-semibold leading-6 text-[#243958] transition-colors duration-300 group-hover:text-[#0666c9]">
                        {feature}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href="#contact"
                    className="group flex items-center gap-3 rounded-xl bg-[#0666c9] px-7 py-4 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(6,102,201,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0757b7] hover:shadow-[0_14px_28px_rgba(6,102,201,0.25)]"
                  >
                    {product.primaryButton}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <a
                    href="#contact"
                    className="group flex items-center gap-3 rounded-xl border border-[#cbdceb] bg-white px-7 py-4 text-[14px] font-bold text-[#243958] transition-all duration-300 hover:-translate-y-1 hover:border-[#0666c9] hover:bg-[#f4f9ff] hover:text-[#0666c9]"
                  >
                    {product.secondaryButton}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </div>
              </div>

              {/* =================================
                  RIGHT IMAGE
              ================================= */}

              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#f7faff] p-6 md:p-10">

                {/* Background glow */}
                <div className="absolute right-[-80px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#0666c9]/10 blur-3xl" />

                <div className="absolute bottom-[-100px] left-[-80px] h-[300px] w-[300px] rounded-full bg-[#673cff]/10 blur-3xl" />

                {/* Product image */}
                <div className="relative z-10 w-full overflow-hidden rounded-[18px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-[18px] object-contain shadow-[0_25px_55px_rgba(20,57,100,0.14)] transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>

              </div>
            </div>

            {/* =================================
                LEFT ARROW
            ================================= */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous product"
              className="absolute left-4 top-1/2 z-30 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full border border-[#dce5f0] bg-white text-[#536987] shadow-[0_8px_25px_rgba(20,57,100,0.10)] transition-all duration-300 hover:-translate-x-1 hover:border-[#0666c9] hover:bg-[#0666c9] hover:text-white hover:shadow-[0_12px_28px_rgba(6,102,201,0.22)]"
            >
              <ChevronLeft size={25} />
            </button>

            {/* =================================
                RIGHT ARROW
            ================================= */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next product"
              className="absolute right-4 top-1/2 z-30 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full border border-[#dce5f0] bg-white text-[#536987] shadow-[0_8px_25px_rgba(20,57,100,0.10)] transition-all duration-300 hover:translate-x-1 hover:border-[#0666c9] hover:bg-[#0666c9] hover:text-white hover:shadow-[0_12px_28px_rgba(6,102,201,0.22)]"
            >
              <ChevronRight size={25} />
            </button>

            {/* =================================
                BOTTOM DIVIDER
            ================================= */}

            <div className="absolute bottom-[70px] left-[5%] right-[5%] border-t border-[#e1e8f0]" />

          </div>

          {/* =====================================
              SLIDER CONTROLS
          ===================================== */}

          <div className="mt-7 flex items-center justify-center gap-3">

            {/* Play / Pause */}
            <button
              type="button"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Play products" : "Pause products"}
              className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#cfdceb] bg-white text-[#536987] transition-all duration-300 hover:border-[#0666c9] hover:bg-[#0666c9] hover:text-white"
            >
              {paused ? (
                <Play size={11} />
              ) : (
                <Pause size={11} />
              )}
            </button>

            {/* Dots */}
            {products.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${products[index].title}`}
                className={`h-[10px] rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-[52px] bg-[#0666c9]"
                    : "w-[10px] bg-[#cbd7e6] hover:bg-[#8db8e3]"
                }`}
              />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Products;