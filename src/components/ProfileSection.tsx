import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Server, Building2, Rocket } from "lucide-react";

const ProfileSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Shield, label: "Enterprise Security & Compliance" },
    { icon: Server, label: "Large-Scale IT Operations" },
    { icon: Building2, label: "Retail, Real Estate & E-Commerce" },
    { icon: Rocket, label: "Digital Transformation Programs" },
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
            A seasoned IT leader with over two decades of experience steering enterprise-grade technology, 
            cyber security, and infrastructure transformation across Retail, Real Estate, E-Commerce, and 
            Consulting domains. Currently serving as General Manager – IT Operations, Infrastructure & Cyber 
            Security at Nexus Malls, one of India's premier retail real estate platforms.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Recognized for building resilient IT ecosystems, establishing governance and compliance frameworks, 
            leading M&A technology integrations, and architecting cloud-hybrid environments at scale. A strategic 
            thinker who bridges technology with business outcomes, driving measurable value across complex, 
            multi-site operations.
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
