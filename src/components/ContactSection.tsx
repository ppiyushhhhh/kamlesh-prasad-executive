import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="hero-gradient section-padding">
      <div className="container mx-auto max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-hero-muted uppercase tracking-[0.2em] text-sm font-medium mb-3">Engage</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-hero-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-hero-muted text-lg mb-10 max-w-2xl mx-auto">
            Available for strategic conversations on technology leadership, cyber security advisory, 
            digital transformation, and board-level consulting engagements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:kamlesh.prasad@gmail.com"
              className="flex items-center gap-3 text-hero-foreground hover:text-gold transition-colors"
            >
              <Mail size={20} />
              <span>kamlesh.prasad@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kamleshsprasad0512/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-hero-foreground hover:text-gold transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-hero-muted text-sm">
            <MapPin size={16} />
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
