import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, TrendingUp, Cpu, Globe } from "lucide-react";

const opportunities = [
  {
    icon: Globe,
    title: "Mercado Global",
    stat: "US$ 320 bilhões",
    subtitle: "até 2030",
    description: "Aquicultura é a proteína animal de mais rápido crescimento global.",
  },
  {
    icon: Cpu,
    title: "Modelo SaaS + HW",
    stat: "Recorrência + Hardware",
    subtitle: "modelo híbrido",
    description: "Modelo híbrido com receita recorrente e venda de sensores.",
  },
  {
    icon: TrendingUp,
    title: "Diferencial",
    stat: "Tecnologia única",
    subtitle: "sem concorrentes diretos",
    description: "Bioacústica + IA proprietária sem concorrentes diretos no Brasil.",
  },
];

export default function Investors() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="investimento" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E4A] to-[#0A1628]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(/images/acoustic-sensor.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-[#0A1628]/70" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 leading-tight max-w-4xl mx-auto">
            Mercado aquícola em crescimento. Tecnologia de ponta. Potencial global.
          </h2>
          <p className="text-lg text-[#94A3B8] mt-6 max-w-2xl mx-auto">
            A aquicultura é o setor de proteína animal que mais cresce no mundo.
            A PRAIA chega com diferencial tecnológico claro em um mercado ávido
            por inovação: SaaS + hardware + IA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opp, i) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0A1628]/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00C9A7]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-6">
                <opp.icon size={24} className="text-[#00C9A7]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{opp.title}</h3>
              <p className="text-2xl font-extrabold text-gradient-aqua mb-1">
                {opp.stat}
              </p>
              <p className="text-sm text-[#94A3B8] mb-4">{opp.subtitle}</p>
              <p className="text-sm text-[#CBD5E1]">{opp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center"
        >
          <a
            href="https://forms.gle/NuSUCib7TS8tY1Uq6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#00C9A7] text-[#0A1628] font-bold rounded-xl hover:bg-[#5FEBD0] hover:scale-[1.02] transition-all flex items-center gap-2 shadow-lg shadow-[#00C9A7]/25"
          >
            Seja um Investidor
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
