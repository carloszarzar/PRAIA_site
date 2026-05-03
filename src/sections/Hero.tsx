import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]" />

      {/* Animated orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#00C9A7]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/30 text-[#00C9A7] text-sm font-medium mb-6">
              <Sparkles size={16} />
              Startup de Deep Tech em Aquicultura
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Transformando a{" "}
            <span className="text-gradient-aqua">Aquicultura</span> com
            Inteligência Artificial e Monitoramento em Tempo Real
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[#94A3B8] mb-8 max-w-xl"
          >
            Mais eficiência produtiva, menor custo e sustentabilidade através de
            dados e tecnologia. Bioacústica, IA e automação para a aquicultura
            do futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="https://forms.gle/eji9RHoNFSaCyqgz6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#00C9A7] text-[#0A1628] font-bold rounded-xl hover:bg-[#5FEBD0] hover:scale-[1.02] transition-all flex items-center gap-2 shadow-lg shadow-[#00C9A7]/25"
            >
              Solicitar Demonstração
              <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-6 text-sm text-[#94A3B8]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C9A7]" />
              Base científica
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              Tecnologia proprietária
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
              Monitoramento bioacústico
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00C9A7]/20 to-[#8B5CF6]/20 rounded-3xl blur-2xl" />
            <img
              src="/images/hero-main.png"
              alt="Controle total da sua fazenda aquícola com o app PRAIA"
              className="relative rounded-2xl border border-white/10 shadow-2xl w-full max-w-lg mx-auto"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-[#0A1628]/90 backdrop-blur border border-[#00C9A7]/40 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-[#94A3B8]">Biomassa Total</p>
              <p className="text-lg font-bold text-[#00C9A7]">15.2t</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-[#0A1628]/90 backdrop-blur border border-[#8B5CF6]/40 rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-[#94A3B8]">Sobrevivência</p>
              <p className="text-lg font-bold text-[#8B5CF6]">92%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
