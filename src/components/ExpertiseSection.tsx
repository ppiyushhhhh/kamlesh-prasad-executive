import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  ShieldCheck,
  Cloud,
  HardDrive,
  Network,
  BarChart3,
  Users,
} from "lucide-react";

const expertise = [
  { icon: Server, title: "IT Operations & Infrastructure", desc: "End-to-end management of enterprise IT operations across On-premise, Cloud, SaaS, and Hybrid environments." },
  { icon: ShieldCheck, title: "Cyber Security & Compliance", desc: "Enterprise security strategy, InfoSec governance, risk management, and regulatory compliance frameworks." },
  { icon: Cloud, title: "Cloud & Microsoft 365 Architecture", desc: "Technical architecture and migration strategy for Microsoft 365 and cloud-native environments." },
  { icon: HardDrive, title: "Data Center, DR & Near-DR Planning", desc: "Design, build, and planning of Data Centers, Disaster Recovery, and Near-DR sites for business continuity." },
  { icon: Network, title: "Network & Perimeter Security", desc: "WAF, Firewall, and Load Balancer deployment for robust network perimeter defense." },
  { icon: BarChart3, title: "Business Intelligence & Power BI", desc: "Data analytics and Power BI implementations to drive data-informed decision making." },
  { icon: Users, title: "Tech Hiring & Capacity Planning", desc: "Strategic workforce planning, technical recruitment, and team scaling for IT organizations." },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3">Specializations</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
            Core Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
