import { motion } from "framer-motion";
import Layout from "../Component/Layout";

const teamMembers = [
  {
    name: "Shashi Kant Singh",
    role: "Director",
    description:
      "27 years in monitoring & evaluation, leading high-impact projects for NGOs, CSR, and Govt. Expert in impact assessment and policy frameworks.",
    image: "./img1.png",
  },
  {
    name: "Shri R.K. Singh",
    role: "Deputy Director",
    description:
      "25+ years in socio-economic research, specializing in large-scale surveys, research coordination, and community mobilization.",
    image: "./img2.png",
  },
  {
    name: "Mr. Sonu Kumar",
    role: "Project Coordinator",
    description:
      "10+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys.",
    image: "./img3.png",
  },
  {
    name: "Nalin Sharma",
    role: "Head of Data Monitoring",
    description:
      "12 years in data monitoring & evaluation, expert in CAPI development, handling complex datasets, and ensuring data quality.",
    image: "./img4.png",
  },
  {
    name: "Rajesh Kumar Singh",
    role: "Field Supervisor",
    description:
      "20+ years in socio-economic research, expert in managing field surveys, intervention programs, and data collection.",
    image: "./img5.png",
  },
  {
    name: "Shalini Singh",
    role: "Researcher & Backend Expert",
    description:
      "B.Tech from IGDTU Delhi (9.26 CGPA), expertise in frontend & backend development, ML, and open-source contributions.",
    image: "./img6.png",
  },
];

const Team = () => {
  return (
    <Layout>
     <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Meet Our Team
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Team;
