import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Microscope,
  Radio,
  Puzzle,
  TrendingDown,
  Zap,
  Globe,
} from "lucide-react";

const differentials = [
  {
    icon: Microscope,
    title: "Base Científica Sólida",
    description:
      "Tecnologia desenvolvida com rigor científico, diferenciando da concorrência baseada apenas em gestão.",
    color: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
  },
  {
    icon: Radio,
    title: "Bioacústica Proprietária",
    description:
      "Única no mercado com monitoramento acústico em tempo real. Nem Meu Pescado nem Aquabit oferecem isso.",
    color: "bg-[#00C9A7]/10",
    iconColor: "text-[#00C9A7]",
  },
  {
    icon: Puzzle,
    title: "Integração Completa",
    description:
      "SaaS + sensores + IA + automação em uma única plataforma. Sem fragmentação.",
    color: "bg-[#EC4899]/10",
    iconColor: "text-[#EC4899]",
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description:
      "Diminua o desperdício de ração e otimize o Fator de Conversão Alimentar com precisão.",
    color: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
  },
  {
    icon: Zap,
    title: "Monitoramento em Tempo Real",
    description:
      "Dados atualizados instantaneamente, sem depender de manejo manual ou estimativas.",
    color: "bg-[#F59E0B]/10",
    iconColor: "text-[#F59E0B]",
  },
  {
    icon: Globe,
    title: "Escalabilidade Global",
    description:
      "Tecnologia adaptável a diferentes espécies e sistemas de produção, do Brasil ao mundo.",
    color: "bg-[#3B82F6]/10",
    iconColor: "text-[#3B82F6]",
  },
];

export default function Differentials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="differentials" className="bg-[#F0F4F8] py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mt-4 leading-tight max-w-3xl mx-auto">
            Por que a PRAIA é a escolha mais avançada do mercado
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl ${diff.color} flex items-center justify-center mb-4`}
              >
                <diff.icon size={24} className={diff.iconColor} />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                {diff.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
