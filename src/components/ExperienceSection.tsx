import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

interface Role {
  title: string;
  duration: string;
  location: string;
  highlights: string[];
}

interface Company {
  name: string;
  tenure?: string;
  roles: Role[];
}

const companies: Company[] = [
  {
    name: "Nexus Malls",
    tenure: "8 years 3 months",
    roles: [
      {
        title: "General Manager – IT Operations, Infrastructure & Cyber Security",
        duration: "Oct 2025 – Present",
        location: "Mumbai, Maharashtra",
        highlights: [
          "Executive ownership of technology strategy, cyber security, and IT governance across all business verticals",
          "Directs enterprise IT operations spanning on-premise, cloud, SaaS, and hybrid infrastructure",
          "Shapes organization-wide security posture, compliance frameworks, and risk mitigation strategies",
          "Spearheads technology due diligence, M&A integrations, and digital transformation initiatives",
        ],
      },
      {
        title: "Deputy General Manager – IT Operations, Infrastructure & Cyber Security",
        duration: "Apr 2023 – Sep 2025",
        location: "Mumbai, Maharashtra",
        highlights: [
          "Led enterprise IT operations and cyber security across multi-site, multi-cloud environments",
          "Architected technology solutions for new acquisitions and strategic growth initiatives",
          "Drove InfoSec compliance and governance across the organization",
        ],
      },
      {
        title: "Assistant General Manager – IT Operation, Infrastructure & Cyber Security",
        duration: "Apr 2021 – Mar 2023",
        location: "Mumbai, Maharashtra",
        highlights: [
          "Directed IT operations, infrastructure modernization, and cyber security programs",
          "Designed and commissioned Data Center, DR, and Near-DR environments for business resilience",
          "Deployed enterprise-grade network and perimeter security — WAF, next-gen firewalls, load balancers",
        ],
      },
      {
        title: "Senior Manager – Information Technology",
        duration: "Dec 2017 – Mar 2021",
        location: "Mumbai, Maharashtra",
        highlights: [
          "Managed enterprise IT operations across a distributed retail portfolio",
          "Implemented business intelligence and Power BI platforms for data-driven decision-making",
          "Architected Microsoft 365 and cloud environment strategy",
        ],
      },
    ],
  },
  {
    name: "Avenue E-Commerce Limited",
    roles: [
      {
        title: "Manager – IT Infrastructure",
        duration: "Nov 2015 – Dec 2017",
        location: "Mumbai",
        highlights: [
          "Owned IT infrastructure strategy for a high-growth e-commerce business unit",
          "Engineered scalable, resilient infrastructure to support rapid business expansion",
          "Ensured platform availability, performance, and security at scale",
        ],
      },
    ],
  },
  {
    name: "Accenture Consulting Services",
    roles: [
      {
        title: "Managing Consultant / Associate Manager – IT Infrastructure",
        duration: "Sep 2014 – Nov 2015",
        location: "India",
        highlights: [
          "Led IT infrastructure delivery for a pan-India strategic outsourcing engagement",
          "Managed end-to-end infrastructure consulting across enterprise clients",
          "Drove operational excellence and service delivery optimization",
        ],
      },
    ],
  },
  {
    name: "IBM India Pvt Ltd",
    tenure: "7 years 3 months",
    roles: [
      {
        title: "Server Support Operations Lead",
        duration: "Jun 2008 – Sep 2014",
        location: "India",
        highlights: [
          "Drove strategic planning, technical architecture, and service delivery for enterprise accounts",
          "Managed contracts, SLAs, and cross-functional teams at scale",
          "Led mission-critical server operations for marquee enterprise clients",
        ],
      },
      {
        title: "Assistant Manager Operations",
        duration: "Jul 2007 – Aug 2008",
        location: "Pune",
        highlights: [
          "Team Management and Quality Management",
          "Workforce Management and operational excellence",
        ],
      },
    ],
  },
  {
    name: "Sitel India Pvt Ltd",
    roles: [
      {
        title: "Team Manager",
        duration: "Dec 2003 – Jul 2007",
        location: "Mumbai & Hyderabad",
        highlights: [
          "Team Management, Quality Management, and Sales oversight",
          "Workforce Management and Training delivery",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {companies.map((company, ci) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 * ci, duration: 0.5 }}
              >
                {/* Company header */}
                <div className="flex items-center gap-4 mb-6 pl-2">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10 shadow-md">
                    <Briefcase className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {company.name}
                    </h3>
                    {company.tenure && (
                      <p className="text-sm text-muted-foreground">{company.tenure}</p>
                    )}
                  </div>
                </div>

                {/* Roles */}
                <div className="ml-16 md:ml-20 space-y-6">
                  {company.roles.map((role) => (
                    <div
                      key={role.title}
                      className="bg-card rounded-lg p-6 shadow-sm border border-border card-hover"
                    >
                      <h4 className="font-semibold text-foreground mb-1">{role.title}</h4>
                      <p className="text-sm text-accent font-medium mb-1">{role.duration}</p>
                      <p className="text-xs text-muted-foreground mb-3">{role.location}</p>
                      <ul className="space-y-1.5">
                        {role.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
