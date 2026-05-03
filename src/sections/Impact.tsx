import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Redução de desperdício de ração", value: 85, color: "bg-[#00C9A7]" },
  { label: "Menor poluição da água", value: 70, color: "bg-[#3B82F6]" },
  { label: "Aumento da eficiência produtiva", value: 60, color: "bg-[#8B5CF6]" },
];

const points = [
  "Menos ração desperdiçada = menos nutrientes em excesso nos corpos d'água",
  "Produção mais sustentável com menor pegada hídrica",
  "Contribuição direta para segurança alimentar de comunidades",
];

function AnimatedBar({ value, color, delay, isVisible }: { value: number; color: string; delay: number; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(value), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div className="h-3 bg-[#1E293B]/40 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" className="bg-[#0A1628] py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C9A7]/30 to-transparent" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(/images/data-viz.jpg)", backgroundSize: "cover" }} />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
              Impacto Socioambiental
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-6 leading-tight">
              Aquicultura mais sustentável, planeta mais saudável
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
              Nossa tecnologia não apenas aumenta a produtividade — reduz
              significativamente o impacto ambiental da aquicultura,
              contribuindo para a segurança alimentar global.
            </p>
            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#00C9A7]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#00C9A7]" />
                  </span>
                  <span className="text-[#CBD5E1]">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0F2E4A]/50 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-8">
              Impactos Mensuráveis
            </h3>
            <div className="space-y-8">
              {metrics.map((metric, i) => (
                <div key={metric.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#CBD5E1]">{metric.label}</span>
                    <span className="text-sm font-bold text-white">{metric.value}%</span>
                  </div>
                  <AnimatedBar
                    value={metric.value}
                    color={metric.color}
                    delay={0.3 + i * 0.2}
                    isVisible={isVisible}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
