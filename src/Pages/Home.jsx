import React from "react";
import { Briefcase, Users, BarChart3 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation  } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import Layout from "../Component/Layout";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import OurJourney from "../Component/OurJourney";
import Program from "../Component/Program";
const images = [
  "/Home1.jpeg",
  "/Home2.jpeg",
  "/Home3.jpg",
  "/Home4.jpeg",
  "/Home5.jpg",
  "/Home6.jpeg",
  "/Home8.jpg",
  "/Home9.jpg",
  "/Home15.jpeg",
  "/Home10.jpg",
  "/Home11.jpg",
  "/Home13.jpg",
  "/Home14.jpg",
];
const clients = [
  { name: "CRISIL", logo: "/logo1.png" },
  { name: "AFC 50", logo: "/logo2.jpg" },
  { name: "NRIF", logo: "/logo3.png" },
  { name: "Midstream", logo: "/logo4.jpg" },
  { name: "AGRIWATCH", logo: "/logo5.png" },
  { name: "DAS", logo: "/logo6.png" },
  { name: "Sumadhura", logo: "/logo7.png" },
  { name: "Synergy", logo: "/logo8.png" },
  { name: "JPS", logo: "/logo9.png" },
  { name: "WOTR", logo: "/logo10.png" },
  { name: "ANKH", logo: "/logo11.png" },
  { name: "APITCO", logo: "/logo12.png" },
  { name: "SPL", logo: "/logo13.png" },
  { name: "NCML", logo: "/logo14.png" },
];
function Home() {
  const cards = [
    {
      icon: <Briefcase size={40} className="text-white" />,
      title: "Our Journey",
      text: `NRS began its journey over 23 years ago in a small office 
      with a big vision—to deliver high-quality research and data-driven insights 
      for impactful decision-making. Now, we operate across 14 states, supporting 
      50+ clients.`,
    },
    {
      icon: <BarChart3 size={40} className="text-white" />,
      title: "Expertise",
      text: `CSR Programme Evaluations, Agricultural Research, Government Impact 
      Assessments, Environmental Management, Project Evaluations, and Rural Development.`,
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "Our Team",
      text: `With 14 coordinator offices across India and a team of 300+ professionals, 
      our strength lies in our people. Experts from diverse backgrounds drive our 
      impactful research outcomes.`,
    },
  ];
  return (
    <Layout>
      <div className="relative w-full max-w-screen-3xl ">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        className="w-full h-[500px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <button className="swiper-button-prev absolute top-1/2 left-4 z-10 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100">
        <FaChevronLeft size={24} />
      </button>
      <button className="swiper-button-next absolute top-1/2 right-4 z-10 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100">
        <FaChevronRight size={24} />
      </button>
    </div>
      {/* three points */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white p-6 rounded-xl shadow-lg max-w-sm w-full md:w-1/3 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              {card.icon}
              <h2 className="text-xl font-semibold">{card.title}</h2>
            </div>
            <p className="mt-3 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
      <OurJourney></OurJourney>
      <Program></Program>
      <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Year-wise Number of Assignment Handled By organisation</h2>
        <p className="text-gray-600 mt-2">An overview of our Assignment over the years.</p>
      </div>
      
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-white rounded-xl shadow-lg"
        >
          <img
            src="./growth.png"
            alt="growth"
            className="max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
      {/* client */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
          <p className="text-gray-600 mt-2">
            We have worked on various projects with different organizations.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [1, 2, 1], scale: [1, 0.95, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-28 h-20 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
      
    </Layout>
  );
}

export default Home;
