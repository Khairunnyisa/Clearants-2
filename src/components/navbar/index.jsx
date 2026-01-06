import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const MODULE_ITEMS = [
  {
    id: "application",
    title: "Application Security",
    desc: "Invincible Application Security to Shield Your Source Code",
  },
  {
    id: "dynamic",
    title: "Dynamic Security",
    desc: "Advanced Runtime Protection",
  },
  {
    id: "mobile",
    title: "Mobile Security",
    desc: "Secure Your Mobile Apps",
  },
  {
    id: "container",
    title: "Container Security",
    desc: "Protect Containerized Environments",
  },
  {
    id: "infra",
    title: "Infrastructure Security",
    desc: "Infrastructure as Code Security",
    colSpan: "col-span-2",
  },
];

const moduleTitleClass = `
  font-semibold
  inline-block
  relative
  cursor-pointer
  transition-colors
  duration-200
  hover:text-[#EF4D5A]

  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-0.5
  after:h-[2px]
  after:w-0
  after:bg-[#EF4D5A]
  after:transition-all
  after:duration-300
  hover:after:w-full
`;

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const isLanding = pathname === "/";
  const isAsoc = pathname === "/asoc";
  const isHeroStyle = isLanding || isAsoc;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(scrollY > 10);
      setHideNavbar(scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToModule = (id) => {
    navigate(`/#modules-${id}`);
  };

  const navBg = isHeroStyle
    ? isScrolled
      ? "bg-black/80 backdrop-blur-md"
      : "bg-transparent"
    : "bg-white shadow";

  const linkColor = isHeroStyle
    ? "text-gray-100 hover:text-white"
    : "text-gray-800 hover:text-black";

  const underlineColor = isHeroStyle ? "after:bg-white" : "after:bg-black";

  const navLinkClass = `
    relative font-desc
    after:content-['']
    after:absolute after:left-1/2 after:-translate-x-1/2
    after:-bottom-1
    after:w-0 after:h-[2px]
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  const logoSrc = isHeroStyle
    ? "images/logo/logo-clearantswhite.svg"
    : "images/logo/logo-clearantsblack.svg";

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-9999
      transition-all duration-500
      ${navBg}
      ${
        hideNavbar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }
    `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5  px-8 xl:px-0">
        <img src={logoSrc} alt="Clearants Logo" className="h-13" />

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a
            href="/"
            className={`${linkColor} ${navLinkClass} ${underlineColor}`}
          >
            Home
          </a>

          <div className="relative group">
            <span
              className={`${linkColor} ${navLinkClass} ${underlineColor} cursor-pointer inline-flex items-center gap-1`}
            >
              Solutions
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            <div
              className="
                absolute left-1/2 -translate-x-1/2 top-full mt-6
                w-[720px]
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300
                z-50
              "
            >
              <div className="grid grid-cols-3 rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-slate-200 p-4">
                  <div className="h-full rounded-xl bg-[#EF4D5A] p-5 flex flex-col justify-between text-white">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Getting Started
                      </h4>
                      <p className="text-sm leading-relaxed opacity-95">
                        Stay on top of your competition with a great performing
                        app. Your time and energy are not wasted.
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-2 font-medium">
                      Request Live Demo →
                    </span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="col-span-2 bg-white p-6">
                  <h4 className="text-[#EF4D5A] text-xl font-semibold mb-5">
                    Getting Started
                  </h4>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    {MODULE_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => goToModule(item.id)}
                        className={`text-left ${item.colSpan || ""}`}
                      >
                        <h5 className={moduleTitleClass}>{item.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="/asoc"
            className={`${linkColor} ${navLinkClass} ${underlineColor}`}
          >
            ASOC
          </a>
          <a
            href="/article"
            className={`${linkColor} ${navLinkClass} ${underlineColor}`}
          >
            Article
          </a>
          <a
            href="/faq"
            className={`${linkColor} ${navLinkClass} ${underlineColor}`}
          >
            FAQ
          </a>
        </div>

        <div className="hidden md:flex">
          <button
            className={`px-7 py-3 rounded-[10px] text-sm font-medium transition
            ${
              isHeroStyle
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            Request Live Demo
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`${isHeroStyle ? "text-white" : "text-black"} md:hidden`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
}
