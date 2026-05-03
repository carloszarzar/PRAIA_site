import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  LayoutDashboard,
  Waves,
  Brain,
  ArrowRight,
  Check,
} from "lucide-react";

const solutions = [
  {
    icon: LayoutDashboard,
    title: "PRAIA Gestão",
    description:
      "Plataforma completa de gestão aquícola. Do registro da fazenda ao acompanhamento de lotes, tanques, biometria e indicadores — tudo em um só lugar.",
    features: [
      "Manejo completo",
      "Controle de estoque",
      "Painel financeiro",
      "Biometria digital",
    ],
    link: "#technology",
    featured: false,
  },
  {
    icon: Waves,
    title: "PRAIA Acústico",
    description:
      "Estimativa de biomassa, mortalidade e sobrevivência em tempo real usando sensores acústicos. Monitoramento contínuo sem manejo invasivo.",
    features: [
      "Bioacústica avançada",
      "Biomassa em tempo real",
      "Detecção de mortalidade",
      "Sem estresse aos peixes",
    ],
    link: "#technology",
    featured: true,
  },
  {
    icon: Brain,
    title: "IA PRAIA + Alimentação",
    description:
      "Inteligência artificial integrada a alimentadores automáticos. Ajuste dinâmico da alimentação conforme comportamento dos peixes.",
    features: [
      "Alimentação automática",
      "Ajuste por IA",
      "Redução do FCA",
      "Otimização de crescimento",
    ],
    link: "#technology",
    featured: false,
  },
];

export default function Solutions() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="bg-[#0A1628] py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C9A7]/30 to-transparent" />
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
            Nossas Soluções
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 leading-tight max-w-3xl mx-auto">
            Tecnologia integrada do tanque à tomada de decisão
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                sol.featured
                  ? "bg-gradient-to-b from-[#0F2E4A] to-[#0A1628] border-2 border-[#00C9A7]/40 glow-aqua scale-105 z-10"
                  : "bg-[#0F2E4A]/50 border border-white/10 hover:border-white/20"
              }`}
            >
              {sol.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00C9A7] to-[#8B5CF6] rounded-full text-xs font-bold text-white">
                  DIFERENCIAL ÚNICO
                </div>
              )}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  sol.featured
                    ? "bg-gradient-to-br from-[#00C9A7] to-[#8B5CF6]"
                    : "bg-[#00C9A7]/10"
                }`}
              >
                <sol.icon
                  size={28}
                  className={sol.featured ? "text-white" : "text-[#00C9A7]"}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
              <p className="text-[#94A3B8] mb-6 text-sm leading-relaxed">
                {sol.description}
              </p>
              <ul className="space-y-2 mb-6">
                {sol.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-[#00C9A7] shrink-0" />
                    <span className="text-[#CBD5E1]">{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href={sol.link}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(sol.link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-[#00C9A7] font-medium text-sm hover:text-[#5FEBD0] transition-colors group"
              >
                Saiba mais
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
