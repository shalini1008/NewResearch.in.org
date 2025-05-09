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
          NextGen Research & Survey Pvt. Ltd. (NRS) is a distinguished Research and Development Consultancy Organization committed to delivering high-quality research, policy analysis, and field-based surveys. Originally established in 2002 as New Research & Survey, the organization was formally registered in 2012 under the Government of the National Capital Territory of Delhi. In 2025, NRS evolved into a private limited entity, adopting its new identity as NextGen Research & Survey Pvt. Ltd., marking a significant milestone in its journey.

Renowned as a premier research agency, NRS is dedicated to providing data-driven insights that empower policymakers, organizations, and development initiatives. With over two decades of experience, the organization has earned a strong reputation for conducting impactful studies across diverse sectors. By combining rigorous methodologies with a commitment to excellence, NRS delivers evidence-based solutions that drive sustainable progress and informed decision-making.

        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
