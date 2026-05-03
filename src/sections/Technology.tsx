import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Activity, TrendingUp, BarChart3, Wallet } from "lucide-react";

const screens = ["/images/app-home.png", "/images/app-crescimento.png", "/images/app-financas.png", "/images/app-dfc.png", "/images/mockup-manejo.png", "/images/mockup-dfc.png"];

const features = [
  { icon: Activity, text: "Dashboard da fazenda com métricas em tempo real" },
  { icon: TrendingUp, text: "Gráficos de crescimento e indicadores do lote" },
  { icon: Wallet, text: "Gestão financeira completa com DFC" },
  { icon: BarChart3, text: "Demonstração de Fluxo de Caixa detalhada" },
];

const screenAlts = [
  "Dashboard da fazenda - Home",
  "Indicadores de crescimento do lote",
  "Gestão financeira e fluxo de caixa",
  "Demonstração de Fluxo de Caixa",
  "Mockup - Manejo do Lote",
  "Mockup - Relatório DFC",
];

export default function Technology() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technology" className="bg-[#F0F4F8] py-24 lg:py-32 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
              Tecnologia
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mt-4 mb-6 leading-tight">
              Monitoramento inteligente na palma da sua mão
            </h2>
            <p className="text-lg text-[#475569] mb-8 leading-relaxed">
              O aplicativo PRAIA reúne todos os dados da sua fazenda em uma
              interface intuitiva. Acompanhe tanques ativos, biomassa total,
              ração estocada, lotes em produção e indicadores zootécnicos em
              tempo real.
            </p>
            <div className="space-y-4">
              {features.map((feat) => (
                <div key={feat.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center shrink-0">
                    <feat.icon size={20} className="text-[#00C9A7]" />
                  </div>
                  <span className="text-[#1E293B] font-medium pt-2">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 sm:w-80 bg-[#1E293B] rounded-[2.5rem] p-3 shadow-2xl border border-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1E293B] rounded-b-xl" />
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  {screens.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={screenAlts[i]}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        i === currentScreen ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 bg-white rounded-xl px-3 py-2 shadow-lg border border-[#E2E8F0]"
              >
                <p className="text-xs text-[#64748B]">FCA</p>
                <p className="text-sm font-bold text-[#00C9A7]">1.4</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-8 bg-white rounded-xl px-3 py-2 shadow-lg border border-[#E2E8F0]"
              >
                <p className="text-xs text-[#64748B]">Tanques Ativos</p>
                <p className="text-sm font-bold text-[#8B5CF6]">12</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
