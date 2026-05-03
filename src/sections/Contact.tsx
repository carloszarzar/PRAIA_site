import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="bg-[#F0F4F8] py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#00C9A7] uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mt-4 leading-tight">
            Vamos transformar a aquicultura juntos
          </h2>
          <p className="text-lg text-[#475569] mt-4 max-w-2xl mx-auto">
            Entre em contato para solicitar uma demonstração ou explorar
            oportunidades de investimento e parceria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-[#00C9A7]/10 flex items-center justify-center mb-4">
              <Mail size={28} className="text-[#00C9A7]" />
            </div>
            <h3 className="text-lg font-bold text-[#1E293B] mb-2">Email</h3>
            <p className="text-[#64748B] mb-4">Entre em contato diretamente</p>
            <a
              href="mailto:praiaaquicultura@gmail.com"
              className="text-[#00C9A7] font-semibold hover:text-[#0A1628] transition-colors"
            >
              praiaaquicultura@gmail.com
            </a>
          </motion.div>

          {/* Produtor */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-[#0A1628] to-[#0F2E4A] rounded-2xl p-8 border border-[#00C9A7]/30 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C9A7]/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold text-white mb-3">
              É produtor aquícola?
            </h3>
            <p className="text-[#94A3B8] mb-6 text-sm leading-relaxed">
              Solicite uma demonstração gratuita da plataforma PRAIA e descubra
              como a tecnologia pode transformar sua produção.
            </p>
            <a
              href="https://forms.gle/eji9RHoNFSaCyqgz6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C9A7] text-[#0A1628] font-bold rounded-xl hover:bg-[#5FEBD0] hover:scale-[1.02] transition-all shadow-lg shadow-[#00C9A7]/25"
            >
              Solicitar Demonstração
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Investidor */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-[#0F2E4A] to-[#1a1a3e] rounded-2xl p-8 border border-[#8B5CF6]/30 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold text-white mb-3">
              Quer investir?
            </h3>
            <p className="text-[#94A3B8] mb-6 text-sm leading-relaxed">
              Explore a oportunidade de investir em uma startup de deep tech com
              tecnologia proprietária e mercado global em expansão.
            </p>
            <a
              href="https://forms.gle/NuSUCib7TS8tY1Uq6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-bold rounded-xl hover:bg-[#A78BFA] hover:scale-[1.02] transition-all shadow-lg shadow-[#8B5CF6]/25"
            >
              Seja um Investidor
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
