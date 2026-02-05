import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const MODULE_ITEMS = [
  { id: "application", title: "Application Security", desc: "Invincible Application Security to Shield Your Source Code" },
  { id: "dynamic", title: "Dynamic Security", desc: "Advanced Runtime Protection" },
  { id: "mobile", title: "Mobile Security", desc: "Secure Your Mobile Apps" },
  { id: "container", title: "Container Security", desc: "Protect Containerized Environments" },
  { id: "infra", title: "Infrastructure Security", desc: "Infrastructure as Code Security", colSpan: "col-span-2" },
];

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
    setOpen(false);
  };

  const navBg = isHeroStyle
    ? isScrolled
      ? "bg-black/80 backdrop-blur-md"
      : "bg-transparent"
    : "bg-white shadow";

  const linkColor = isHeroStyle ? "text-gray-100" : "text-gray-800";

  const logoSrc = isHeroStyle
    ? "images/logo/logo-clearantswhite.svg"
    : "images/logo/logo-clearantsblack.svg";

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-[9999]
        ${navBg}
        ${hideNavbar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* NAVBAR TOP */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-8 xl:px-0">
        <img src={logoSrc} alt="Clearants Logo" className="h-13" />

        
        {/* DESKTOP MENU */}
<div className="hidden md:flex items-center gap-8 font-medium">
  <a href="/" className={`${linkColor} relative group`}>
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EF4D5A] transition-all group-hover:w-full"></span>
  </a>

  <div className="relative group">
    <span className={`${linkColor} cursor-pointer inline-flex items-center gap-1 relative`}>
      Solutions
      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EF4D5A] transition-all group-hover:w-full"></span>
    </span>
    
    {/* Dropdown */}
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="grid grid-cols-3 rounded-2xl overflow-hidden shadow-xl">
        <div className="bg-slate-200 p-4">
          <div className="h-full rounded-xl bg-[#EF4D5A] p-5 text-white">
            <h4 className="text-lg font-semibold mb-3">Getting Started</h4>
            <p className="text-sm">Stay on top of your competition with a great performing app.</p>
          </div>
        </div>
        <div className="col-span-2 bg-white p-6">
          <h4 className="text-[#EF4D5A] text-xl font-semibold mb-5">Solutions</h4>
          <div className="grid grid-cols-2 gap-5">
            {MODULE_ITEMS.map((item) => (
              <button key={item.id} onClick={() => goToModule(item.id)} className={`text-left ${item.colSpan || ""} relative group`}>
                <h5 className="font-semibold hover:text-[#EF4D5A] transition-colors duration-300">
                  {item.title}
                </h5>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EF4D5A] transition-all "></span>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  <a href="/asoc" className={`${linkColor} relative group`}>
    ASOC
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EF4D5A] transition-all group-hover:w-full"></span>
  </a>
   <a href="/article" className={`${linkColor} relative group`}>
    Article
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EF4D5A] transition-all group-hover:w-full"></span>
  </a>

  <a href="/faq" className={`${linkColor} relative group`}>
    FAQ
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EF4D5A] transition-all group-hover:w-full"></span>
  </a>
</div>


        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <button className={`px-7 py-3 rounded-lg text-sm font-medium ${isHeroStyle ? "bg-white text-black" : "bg-black text-white"}`}>
            Request Live Demo
          </button>
        </div>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} className={`${isHeroStyle ? "text-white" : "text-black"} md:hidden`}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-8 py-6">
          <div className="flex flex-col gap-6 text-white font-medium">
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="/asoc" onClick={() => setOpen(false)}>ASOC</a>
            <a href="/article" onClick={() => setOpen(false)}>Article</a>
            <a href="/faq" onClick={() => setOpen(false)}>FAQ</a>

            <div className="pt-4 border-t border-white/20">
              <p className="mb-3 text-sm opacity-80">Solutions</p>
              {MODULE_ITEMS.map((item) => (
                <button key={item.id} onClick={() => goToModule(item.id)} className="block text-left w-full py-1">
                  {item.title}
                </button>
              ))}
            </div>

            <button className="mt-4 bg-white text-black py-3 rounded-lg">
              Request Live Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
