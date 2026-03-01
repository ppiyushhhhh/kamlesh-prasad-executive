import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  "ITIL Intermediate – Service Operations",
  "ITIL V3 Foundation",
  "VMware vSphere 6.5 Foundations",
  "MCITP Enterprise (Microsoft Windows Server)",
  "Microsoft Exchange Certified",
  "LEAD – Leadership Excellence & Development Program (upGrad, 2024)",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px -12px hsl(var(--primary) / 0.15)" }}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                <Award className="text-gold" size={20} />
              </div>
              <span className="font-medium text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
