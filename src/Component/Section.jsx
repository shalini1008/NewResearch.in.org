import { motion } from "framer-motion";

const Section = ({ title, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 py-12"
    >
      <h2 className="text-3xl text-center font-bold text-pink-500 mb-6">{title}</h2>
      {children}
    </motion.section>
  );
};

export default Section;
