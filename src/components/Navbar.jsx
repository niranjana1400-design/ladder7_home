import {
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-200
        bg-white
        transition-colors duration-500
        dark:border-white/10
        dark:bg-[#080b12]
      "
    >
      <nav className="l7-container flex h-[72px] items-center justify-between">

        <a href="#home" className="shrink-0">
          <img
            src="https://ladder7.in/LADDER%207%20NS%20Black.webp"
            alt="Ladder7"
            className="
              h-[45px] w-auto
              transition-transform duration-300
              hover:scale-[1.03]
              dark:brightness-0 dark:invert
            "
          />
        </a>

        <div className="hidden items-center gap-9 lg:flex">

          <a
            href="#about"
            className="
              l7-nav-link
              text-[15px] font-medium
              text-[#6a6d83]
              hover:text-[#0666c9]
              dark:text-white/70
              dark:hover:text-[#a78bfa]
            "
          >
            Who we are
          </a>

          <a
            href="#services"
            className="
              l7-nav-link
              flex items-center gap-1
              text-[15px] font-medium
              text-[#6a6d83]
              hover:text-[#0666c9]
              dark:text-white/70
              dark:hover:text-[#a78bfa]
            "
          >
            What we do
            <ChevronDown size={15} />
          </a>

          <a
            href="#faq"
            className="
              l7-nav-link
              text-[15px] font-medium
              text-[#6a6d83]
              hover:text-[#0666c9]
              dark:text-white/70
              dark:hover:text-[#a78bfa]
            "
          >
            What we think
          </a>

          <a
            href="#training"
            className="
              l7-nav-link
              text-[15px] font-medium
              text-[#6a6d83]
              hover:text-[#0666c9]
              dark:text-white/70
              dark:hover:text-[#a78bfa]
            "
          >
            Corporate Training
          </a>

          <a
            href="#contact"
            className="
              l7-nav-link
              text-[15px] font-medium
              text-[#6a6d83]
              hover:text-[#0666c9]
              dark:text-white/70
              dark:hover:text-[#a78bfa]
            "
          >
            Contact Us
          </a>

        </div>

        <div className="flex items-center gap-4">

          <div
            className="
              hidden h-[38px]
              items-center
              rounded-full
              border border-[#dfe7f0]
              bg-[#f1f5f9]
              p-1
              dark:border-white/10
              dark:bg-[#151b27]
              sm:flex
            "
          >
            <button
              className="
                rounded-full
                px-4 py-2
                text-[10px]
                font-bold
                tracking-[0.15em]
                text-[#0666c9]
                hover:bg-white
                dark:hover:bg-[#202938]
              "
            >
              EDUCATION
            </button>

            <button
              className="
                rounded-full
                bg-white
                px-5 py-2
                text-[11px]
                font-semibold
                text-[#536078]
                shadow-sm
                dark:bg-[#252d3a]
                dark:text-white
              "
            >
              IT
            </button>
          </div>

          <button
            onClick={() =>
              setDarkMode((current) => !current)
            }
            className="
              flex h-[42px]
              items-center gap-2
              rounded-xl
              bg-[#f4efff]
              px-3
              text-[#673cff]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#ebe2ff]
              hover:shadow-md
              dark:bg-[#1d2330]
              dark:text-[#a78bfa]
              dark:hover:bg-[#272e3d]
            "
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <Moon size={18} />
                <span className="text-xs font-semibold">
                  Dark
                </span>
              </>
            ) : (
              <>
                <Sun size={18} />
                <span className="text-xs font-semibold">
                  Light
                </span>
              </>
            )}
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;