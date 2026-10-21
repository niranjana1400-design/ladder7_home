import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question:
      "What services does Ladder7 Nextstep Solutions provide?",
    answer:
      "Ladder7 delivers intelligent web engineering, AI chatbots and automation, Adobe Experience Manager implementation, headless CMS platforms, CRM and analytics integration, and technology strategy consulting.",
  },

  {
    question:
      "Does Ladder7 work with startups, SMBs, or larger organisations?",
    answer:
      "We work with businesses of all sizes — from funded startups and fast-growing SMBs to established brands expanding across new markets.",
  },

  {
    question:
      "How does Ladder7 approach AI and intelligent website implementation?",
    answer:
      "We take a practical, outcome-driven approach to AI. This includes building secure AI chatbots, intelligent website personalisation, and autonomous multi-agent systems for operational automation.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="l7-soft-section px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-[900px]">

        <div className="text-center">
          <h2 className="text-[42px] font-extrabold text-[#0d1b38] dark:text-white">
            FAQ
          </h2>

          <div className="mx-auto mt-3 h-[4px] w-[68px] rounded-full bg-gradient-to-r from-[#0666c9] to-[#673cff]" />
        </div>

        <div className="mt-14 space-y-4">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className={`
                  l7-faq
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  dark:bg-[#111722]
                  ${
                    isOpen
                      ? "border-[#a9cef2] shadow-[0_8px_30px_rgba(20,57,100,0.07)] dark:border-[#7257c7]"
                      : "border-[#e1e8f0] dark:border-white/10"
                  }
                `}
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center gap-5 px-6 py-6 text-left md:px-7"
                >
                  <span
                    className={`text-[12px] font-bold ${
                      isOpen
                        ? "text-[#0666c9]"
                        : "text-[#b2bac7]"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={`
                      flex-1
                      text-[18px]
                      font-bold
                      md:text-[20px]
                      ${
                        isOpen
                          ? "text-[#0666c9]"
                          : "text-[#0d1b38] dark:text-white"
                      }
                    `}
                  >
                    {item.question}
                  </span>

                  <span
                    className="
                      l7-faq-arrow
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-lg
                      border border-[#c9dff5]
                      bg-[#eef6ff]
                      text-[#536987]
                      dark:border-white/10
                      dark:bg-[#1a2637]
                      dark:text-[#a78bfa]
                    "
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-16 pb-7 pr-8">
                    <p className="text-[16px] leading-7 text-[#536987] dark:text-[#9baac0]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;