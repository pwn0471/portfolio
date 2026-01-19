import { useEffect, useState } from "react";
import pk from "../assets/pk.png";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      try {
        const scrollPosition = window.scrollY + 150;

        sections.forEach((section) => {
          const el = document.getElementById(section);
          if (!el) return;

          const top = el.offsetTop ?? 0;
          const height = el.offsetHeight ?? 0;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        });
      } catch (error) {
        console.error("Navbar scroll detection error:", error);
      }
    };

    try {
      window.addEventListener("scroll", handleScroll);
    } catch (error) {
      console.error("Navbar scroll listener error:", error);
    }

    return () => {
      try {
        window.removeEventListener("scroll", handleScroll);
      } catch (error) {
        console.error("Navbar cleanup error:", error);
      }
    };
  }, []);

  const isExpanded = activeSection !== "home";

  const toggleMenu = () => {
    try {
      setMenuOpen((prev) => !prev);
    } catch (error) {
      console.error("Menu toggle error:", error);
    }
  };

  const closeMenu = () => {
    try {
      setMenuOpen(false);
    } catch (error) {
      console.error("Menu close error:", error);
    }
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 bg-black
        transition-all duration-300 ease-out
        ${isExpanded ? "py-8" : "py-5"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <a href="#home" className="flex items-center" onClick={closeMenu}>
          <img
            src={pk}
            alt="Pawan Kumar Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              try {
                e.target.style.display = "none";
                console.error("Navbar logo failed to load");
              } catch (err) {
                console.error("Logo fallback error:", err);
              }
            }}
          />
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex space-x-12 text-xs tracking-[0.25em]">
          {sections.slice(1).map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`
                  relative pb-1 transition-colors duration-200
                  ${
                    activeSection === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }

                  after:absolute after:left-0 after:-bottom-0.5
                  after:h-[2px] after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col px-6 py-8 space-y-6 text-xs tracking-[0.25em]">
            {sections.slice(1).map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={closeMenu}
                  className={`block transition-colors duration-200 ${
                    activeSection === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
