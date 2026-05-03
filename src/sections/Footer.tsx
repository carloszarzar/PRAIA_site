import { Linkedin, Instagram } from "lucide-react";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Soluções", href: "#solutions" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Impacto", href: "#impact" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/images/logo-praia.png"
              alt="PRAIA"
              className="h-12 w-auto mb-4"
            />
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              PRAIA Mensurando a Aquicultura. Transformando a aquicultura com
              inteligência artificial, bioacústica e análise de dados em tempo
              real.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-[#94A3B8] text-sm hover:text-[#00C9A7] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C9A7]/10 hover:border-[#00C9A7]/30 transition-all"
              >
                <Linkedin size={18} className="text-[#94A3B8]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C9A7]/10 hover:border-[#00C9A7]/30 transition-all"
              >
                <Instagram size={18} className="text-[#94A3B8]" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm">
            © 2025 PRAIA. Todos os direitos reservados.
          </p>
          <p className="text-[#64748B] text-sm">
            Mensurando a Aquicultura
          </p>
        </div>
      </div>
    </footer>
  );
}
