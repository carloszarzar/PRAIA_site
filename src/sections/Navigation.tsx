import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Soluções", href: "#solutions" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Diferenciais", href: "#differentials" },
  { label: "Impacto", href: "#impact" },
  { label: "Investimento", href: "#investimento" },
  { label: "Contato", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex items-center gap-2"
        >
          <img
            src="/images/logo-praia.png"
            alt="PRAIA"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#00C9A7] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C9A7] transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://forms.gle/eji9RHoNFSaCyqgz6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#00C9A7] text-[#0A1628] font-semibold text-sm rounded-lg hover:bg-[#5FEBD0] hover:scale-[1.02] transition-all"
          >
            Solicitar Demonstração
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A1628]/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#00C9A7] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://forms.gle/eji9RHoNFSaCyqgz6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#00C9A7] text-[#0A1628] font-semibold text-sm rounded-lg hover:bg-[#5FEBD0] transition-all mt-2 text-center"
            >
              Solicitar Demonstração
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
