import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, Building2, Rocket } from "lucide-react";

const ProfileSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Shield, label: "Cyber Security & Risk Governance" },
    { icon: Server, label: "Enterprise Infrastructure at Scale" },
    { icon: Building2, label: "Multi-Industry Domain Expertise" },
    { icon: Rocket, label: "Strategic Transformation & M&A" },
  ];

  return (
    <section id="profile" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Executive Profile
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A transformational technology executive with 20+ years of progressive leadership in enterprise 
            IT strategy, cyber security governance, and large-scale infrastructure modernization. Currently 
            serving as General Manager – IT Operations, Infrastructure & Cyber Security at Nexus Malls, 
            steering the technology vision for one of India's premier retail real estate platforms.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Proven track record of architecting resilient, future-ready IT ecosystems — from establishing 
            enterprise-wide security postures and compliance frameworks to orchestrating complex M&A technology 
            integrations and cloud-hybrid transformations. Adept at aligning technology roadmaps with C-suite 
            priorities to deliver measurable business value across geographically distributed, multi-stakeholder 
            environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
              >
                <item.icon className="text-accent flex-shrink-0" size={22} />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
