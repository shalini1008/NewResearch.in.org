import React from 'react'
import { motion } from "framer-motion";

// Dynamically import all images from the folder
const importAll = (r) =>
    r
      .keys()
      .sort((a, b) => {
        const getNum = (str) => parseInt(str.match(/\d+/)[0]);
        return getNum(a) - getNum(b);
      })
      .map(r);
const images = importAll(require.context('../images/program', false, /\.png$/));

const sponsors = images.map((img, idx) => ({
  name: `p${idx + 1}`,
  logo: img
}));

function Program() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-500">Program Sponsors Assessed by NRS</h2>
        <p className="text-gray-600 mt-2">
          We have worked on various projects with different organizations.
        </p>
      </div>
      <motion.div
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
>
  {sponsors.map((sponsor, index) => (
    <motion.div
      key={index}
      className="bg-white p-4 rounded-lg shadow-md"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [1, 2, 1], scale: [1, 0.95, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="w-28 h-20 object-contain"
      />
    </motion.div>
  ))}
</motion.div>

    </section>
  )
}

export default Program;
