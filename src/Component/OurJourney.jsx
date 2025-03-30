import { motion } from "framer-motion";

const OurJourney = () => {
  const stats = [
    { value: "200,000+", label: "Data collected" },
    { value: "300+", label: "Team (empanelled Enumerators)" },
    { value: "100+", label: "Projects" },
    { value: "30+", label: "Clients" },
    { value: "30+", label: "States and UTs covered" },
    { value: "20+", label: "Sectors" },
    { value: "14+", label: "Offices" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Our Journey
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Description */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 leading-relaxed">
           <span className="font-bold">NextGen Research & Survey Pvt. Ltd. (NRS)</span> is a distinguished Research and Development Consultancy
           Organization committed to delivering high-quality research, policy analysis, 'and field-based surveys. 
           Originally established in 2002 as New Research & Survey, 
           the organization was formally registered in 2012 under the Government of the National Capital Territory of Delhi. In 2025, NRS evolved into a private limited entity, adopting its new identity as NextGen Research & Survey Pvt. Ltd., marking a significant milestone in its journey.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
          Renowned as a premier research agency, NRS is dedicated to providing data-driven insights that empower policymakers, organizations, and development initiatives. With over two decades of experience, the organization has earned a strong reputation for conducting impactful studies across diverse sectors. By combining rigorous methodologies with a commitment to excellence, NRS delivers evidence-based solutions that drive sustainable progress and informed decision-making.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-blue-900 text-white p-4 rounded-lg text-center shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra Info */}
      <motion.div
        className="mt-12 text-gray-700 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          NRS, besides having a panel of field investigators in all Indian
          states and UTs, also has a panel of consultants, technical experts,
          and collaborating organizations on a project basis. This arrangement
          gives NRS the strength to undertake research in a large number of
          areas.
        </p>
      </motion.div>
    </div>
  );
};

export default OurJourney;
