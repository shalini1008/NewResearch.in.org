import { motion } from "framer-motion";

const Hero = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="relative bg-gray-800 text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="./hero.jpeg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
        <motion.p 
          className="mt-6  bg-opacity-20 p-6 rounded-lg  leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          New Research & Survey (NRS) is a distinguished Research and Development Consultancy Organization, 
          dedicated to delivering high-quality research, policy analysis, and field-based surveys.
          Established in 2002 and officially registered in 2012 under the Government of the National Capital Territory of Delhi, 
          NRS further strengthened its presence by becoming a private limited entity in 2025.
          With a strong reputation as a premier research agency, NRS is committed to generating data-driven insights 
          that empower policymakers, organizations, and development initiatives. Over the years, the organization has played 
          a vital role in conducting impactful studies across various sectors, ensuring evidence-based solutions for sustainable progress.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
