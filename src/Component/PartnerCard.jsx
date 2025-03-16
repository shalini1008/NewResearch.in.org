import { motion } from "framer-motion";

const PartnerCard = ({ name }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md p-4 rounded-lg flex items-center justify-center text-center text-gray-700 font-semibold"
    >
      {name}
    </motion.div>
  );
};

export default PartnerCard;
