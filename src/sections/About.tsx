import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "70%", label: "Alimentação é o maior custo" },
  { value: "30%", label: "Perdas por mortalidade tardia" },
  { value: "40%", label: "Desperdício de ração" },
  { value: "R$ 2B+", label: "Prejuízo anual no Brasil" },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-[#F0F4F8] py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
              O Problema
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mt-4 mb-6 leading-tight">
              A aquicultura precisa de dados para crescer de forma inteligente
            </h2>
            <p className="text-lg text-[#475569] mb-6 leading-relaxed">
              A alimentação representa até{" "}
              <span className="font-bold text-[#1E293B]">70% dos custos</span>{" "}
              na aquicultura. A falta de monitoramento eficiente leva a
              mortalidade não detectada, alimentação ineficiente, alto custo
              operacional e impactos ambientais. Sem dados precisos, decisões
              são baseadas em intuição — não em evidência.
            </p>
            <p className="text-lg text-[#475569] leading-relaxed">
              A PRAIA nasceu para mudar isso. Combinamos{" "}
              <strong>inteligência artificial</strong>,{" "}
              <strong>sensoriamento bioacústico</strong> e{" "}
              <strong>análise de dados em tempo real</strong> para transformar
              cada tanque em uma fonte de informação estratégica.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <p className="text-3xl lg:text-4xl font-extrabold text-gradient-brand mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-[#64748B] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
