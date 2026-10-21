import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f7f8fb] px-6 py-24 transition-colors duration-500 dark:bg-[#080b12] lg:px-8"
    >
      <div className="mx-auto max-w-[1250px]">

        <div className="grid overflow-hidden rounded-[26px] bg-[#111827] text-white lg:grid-cols-2">

          <div className="p-8 sm:p-12 lg:p-14">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              Contact Us
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Let's build
              <br />
              something useful.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/50">
              Tell us what you want to build, improve or launch.
              We'll discuss your requirements and the right approach.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/70">

              <a
                href="tel:+918137979401"
                className="block transition-colors hover:text-[#7db7f0]"
              >
                +91 8137979401
              </a>

              <a
                href="mailto:info@ladder7.in"
                className="block transition-colors hover:text-[#7db7f0]"
              >
                info@ladder7.in
              </a>

            </div>

          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-7 text-black transition-colors dark:bg-[#111722] dark:text-white sm:p-10 lg:p-12"
          >

            <input
              type="text"
              placeholder="Your name"
              className="
                mb-4 w-full rounded-xl
                border border-slate-200
                bg-white px-5 py-4
                text-black outline-none
                placeholder:text-slate-400
                focus:border-violet-500
                dark:border-white/10
                dark:bg-[#18202d]
                dark:text-white
                dark:placeholder:text-slate-500
              "
            />

            <input
              type="email"
              placeholder="Email address"
              className="
                mb-4 w-full rounded-xl
                border border-slate-200
                bg-white px-5 py-4
                text-black outline-none
                placeholder:text-slate-400
                focus:border-violet-500
                dark:border-white/10
                dark:bg-[#18202d]
                dark:text-white
                dark:placeholder:text-slate-500
              "
            />

            <input
              type="text"
              placeholder="Company"
              className="
                mb-4 w-full rounded-xl
                border border-slate-200
                bg-white px-5 py-4
                text-black outline-none
                placeholder:text-slate-400
                focus:border-violet-500
                dark:border-white/10
                dark:bg-[#18202d]
                dark:text-white
                dark:placeholder:text-slate-500
              "
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="
                mb-5 w-full resize-none rounded-xl
                border border-slate-200
                bg-white px-5 py-4
                text-black outline-none
                placeholder:text-slate-400
                focus:border-violet-500
                dark:border-white/10
                dark:bg-[#18202d]
                dark:text-white
                dark:placeholder:text-slate-500
              "
            />

            <button
              type="submit"
              className="
                l7-button-hover
                group flex w-full
                items-center justify-center gap-3
                rounded-xl
                bg-violet-600
                px-6 py-4
                font-semibold
                text-white
                hover:bg-violet-500
              "
            >
              Send enquiry
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;