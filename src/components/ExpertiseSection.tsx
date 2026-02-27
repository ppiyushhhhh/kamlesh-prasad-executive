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
  { icon: Server, title: "Enterprise IT Operations", desc: "End-to-end ownership of mission-critical IT operations across on-premise, cloud, SaaS, and hybrid environments — ensuring availability, performance, and business continuity." },
  { icon: ShieldCheck, title: "Cyber Security Governance", desc: "Establishing enterprise security posture, InfoSec governance frameworks, risk quantification, and regulatory compliance aligned with board-level expectations." },
  { icon: Cloud, title: "Cloud Strategy & Architecture", desc: "Defining cloud-first strategies and leading large-scale Microsoft 365 and hybrid cloud migrations that accelerate digital agility." },
  { icon: HardDrive, title: "Data Center & BC/DR Strategy", desc: "Strategic planning, design, and commissioning of Data Centers, Disaster Recovery, and Near-DR facilities ensuring zero-downtime resilience." },
  { icon: Network, title: "Network & Perimeter Defense", desc: "Architecting multi-layered network security — WAF, next-gen firewalls, load balancers — to safeguard enterprise perimeters at scale." },
  { icon: BarChart3, title: "Data Analytics & BI", desc: "Leveraging Power BI and business intelligence platforms to deliver actionable insights that inform executive decision-making." },
  { icon: Users, title: "IT Workforce Strategy", desc: "Building and scaling high-performance technology teams through strategic hiring, capability development, and capacity planning." },
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
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px -12px hsl(var(--primary) / 0.15)" }}
              className="bg-card border border-border rounded-lg p-6 group transition-colors duration-300 hover:border-accent/40"
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
