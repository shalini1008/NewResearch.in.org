import { motion } from "framer-motion";
import Layout from "../Component/Layout";

const importAll = (r) =>
  r
    .keys()
    .sort((a, b) => {
      const getNum = (str) => parseInt(str.match(/\d+/)[0]);
      return getNum(a) - getNum(b);
    })
    .map(r);
const images = importAll(require.context('../images/members', false, /\.png$/));

const teamMembers = [
  {
    name: "Shashi Kant Singh",
    role: "Director",
    description: "27 years in monitoring & evaluation, leading high-impact projects for NGOs, CSR, and Govt. Expert in impact assessment and policy frameworks."
  },
  {
    name: "Shri R.K. Singh",
    role: "Deputy Director",
    description: "25+ years in socio-economic research, specializing in large-scale surveys, research coordination, and community mobilization."
  },
  {
    name: "Mr. Sonu Kumar",
    role: "Project Coordinator",
    description: "10+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "Nalin Sharma",
    role: "Head of Data Monitoring",
    description: "12 years in data monitoring & evaluation, expert in CAPI development, handling complex datasets, and ensuring data quality."
  },
  {
    name: "Rajesh Kumar Singh",
    role: "Field Supervisor",
    description: "20+ years in socio-economic research, expert in managing field surveys, intervention programs, and data collection."
  },
  {
    name: "Shalini Singh",
    role: "Researcher & Backend Expert",
    description: "B.Tech from IGDTU Delhi , expertise in frontend & backend development, ML, and open-source contributions."
  },
  {
    name: "AJI STENIN.S.R",
    role: "State Coordinator (Tamilnadu)",
    description: "15+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "T.SHARMILA",
    role: "State Coordinator (Andra Pradesh)",
    description: "22+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "Gautam Vasantroa Narnaware",
    role: "State Coordinator (Maharashtra & Goa)",
    description: "15+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "Praveen Choudhry",
    role: "State Coordinator (Rajasthan)",
    description: "7+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "ASHIS BALA",
    role: "Regional Coordinator (West Bengal and North Eastern Zone)",
    description: "20+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "Dr. Ashok Kumar Singh",
    role: "Regional Coordinator (Chhatisgarh & Madhya Pradesh)",
    description: "20+ years in Education Sector and 5+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "AKHIL MOHARANA",
    role: "State Coordinator (Odisa)",
    description: "22+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "Mr. Praveen V. Pattar",
    role: "State Coordinator (Karnataka)",
    description: "20+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  },
  {
    name: "State Coordinator (Uttar Pradesh)",
    role: "State Coordinator (Uttar Pradesh)",
    description: "20+ years in socio-economic research, expertise in data collection, research coordination, and large-scale surveys."
  }
].map((member, index) => ({
  ...member,
  image: images[index] // attach image by order: img1.png, img2.png, ...
}));

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
