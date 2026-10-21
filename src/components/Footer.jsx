function Footer() {
  return (
    <footer className="bg-[#f5f8fc] px-6 pb-8 pt-20 transition-colors duration-500 dark:bg-[#080b12] lg:px-8">
      <div className="l7-container">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <img
              src="https://ladder7.in/LADDER%207%20NS%20Black.webp"
              alt="Ladder7"
              className="
                h-[60px] w-auto
                transition-transform duration-300
                hover:scale-[1.03]
                dark:brightness-0 dark:invert
              "
            />

            <div className="mt-8 flex gap-5 text-[#607796]">

              <a
                href="https://www.linkedin.com/company/ladder7-nextstep-solutions-llp"
                target="_blank"
                rel="noreferrer"
                className="l7-social text-lg dark:text-[#8495ad]"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/ladder7_nextstep_solutions_/"
                target="_blank"
                rel="noreferrer"
                className="l7-social text-lg dark:text-[#8495ad]"
              >
                ◎
              </a>

              <a
                href="https://www.facebook.com/share/13wyxrXYTv/"
                target="_blank"
                rel="noreferrer"
                className="l7-social text-lg dark:text-[#8495ad]"
              >
                f
              </a>

              <a
                href="https://wa.me/918137979401"
                target="_blank"
                rel="noreferrer"
                className="l7-social text-lg dark:text-[#8495ad]"
              >
                ◉
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold text-[#0d1b38] dark:text-white">
              Services
            </h3>

            <div className="mt-6 space-y-4 text-[15px] text-[#536987] dark:text-[#899ab1]">

              <a
                href="#services"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Digital Experience & Web Engineering
              </a>

              <a
                href="#services"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                AI & Intelligent Automation
              </a>

              <a
                href="#services"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Strategy & Technology Consulting
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold text-[#0d1b38] dark:text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4 text-[15px] text-[#536987] dark:text-[#899ab1]">

              <a
                href="#products"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Our Products
              </a>

              <a
                href="#faq"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Blogs
              </a>

              <a
                href="#contact"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Careers
              </a>

              <a
                href="#contact"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Bootcamp
              </a>

              <a
                href="#contact"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Portfolio
              </a>

              <a
                href="#contact"
                className="block hover:text-[#0666c9] dark:hover:text-[#a78bfa]"
              >
                Contact Form
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-[17px] font-bold text-[#0d1b38] dark:text-white">
              Our Locations
            </h3>

            <div className="mt-6 space-y-6 text-[15px] text-[#536987] dark:text-[#899ab1]">

              <div>
                <p className="font-bold text-[#0d1b38] dark:text-white">
                  Cochin
                </p>

                <p>
                  WEE SPACES Ernakulam
                </p>
              </div>

              <div>
                <p className="font-bold text-[#0d1b38] dark:text-white">
                  Trivandrum
                </p>

                <p>
                  Kinfra Film and IT Park Trivandrum
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-[#dce4ee] pt-7 dark:border-white/10">
          <p className="text-[14px] text-[#536987] dark:text-[#74849a]">
            © 2026 Ladder7 NextStep Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;