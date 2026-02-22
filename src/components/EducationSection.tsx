import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "PG Certificate in Cybersecurity",
    institution: "MIT xPRO",
    period: "2024 – 2025",
  },
  {
    degree: "MBA (Management Information Systems)",
    institution: "Sikkim Manipal University – Distance Education",
    period: "2012 – 2014",
  },
  {
    degree: "Bachelor of Science",
    institution: "MP Bhoj Open University",
    period: "2003 – 2006",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3">Academic</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
            Education
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="flex items-start gap-4 bg-card border border-border rounded-lg p-6 card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
