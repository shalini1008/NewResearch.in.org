import { motion } from "framer-motion";

const StatCard = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg p-6 rounded-lg text-center"
    >
      <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default StatCard;
