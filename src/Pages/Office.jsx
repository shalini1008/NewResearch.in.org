import React, { useState } from "react";
import Layout from "../Component/Layout";
import { MapPin, User, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const offices = [
  { state: "Maharashtra", name: "Shri Gautam Vasantoa", address: "Babachi Krupa Building, Ambegaon Pathar, Pune – 411046." },
  { state: "Tamilnadu", name: "AJI STENIN.S.R", address: "Stenins Abode, Mailara-3, Thirparappu Kanyakumari Tamilnadu" },
  { state: "Andra Pradesh", name: "T.SHARMILA", address: "28-6-894, Hamali colony, Housing Board area, Anantapur –516001." },
  { state: "Kolkata", name: "Mr. Ashis Bala", address: "Flat No – B2, 433, Kalikapur Rd, Kolkata – 700078." },
  { state: "Karnataka", name: "Mr. Praveen V. Pattar", address: "Babachi Krupa Building, Ambegaon Pathar, Pune – 411046." },
  { state: "Telengana", name: "Ambati Srinivas", address: "2-74, Gosanapalli, Post Akaram Dubbak, Mdak Districts: 502108." },
  { state: "Chhattisgarh", name: "Dr. ASHOK KUMAR SINGH", address: "Vipara Colony, Behind Post office, Mandhar Colony, Raipur" },
  { state: "Odisha", name: "AKHIL MOHARANA", address: "Chhanagiri, Dist: Khordha, Orissa, Pin – 752020" },
  { state: "Bihar", name: "R.K. Singh", address: "IOC Colony, Near Chauhan Bhavan, Kumrar, Patna-800026" },
  { state: "Gujarat", name: "Patel Pankajkumar B", address: "B-1 Vraj Duplex, Near Harni Jakat Naka, Vadodara, Gujarat" },
  { state: "Uttar Pradesh", name: "DHARM KUMAR", address:"Chhanagiri, Dist: Khordha, Orissa Pin – 752020"},
  { state: "Rajasthan", name: "Praveen Choudhry", address: "Dholiya, Teh- Rajgarh Dist:-Churu- 331023"},
  { state: "Assam", name: "Mr. Hemat Sakia", address: "B 116/3, Near Gauri Ganesh Temple Guwahati"},
  { state: "Manipur", name: "Sarangthem Biroj singh", address: "Singjamei Chingamakha chanam pukhri Lewa Road, imphal (east)"}
];

const Office = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center my-8 text-blue-800">Our Offices</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        {offices.map((office, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setSelectedState(office.state)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`rounded-xl shadow-md p-6 border-2 ${
              selectedState === office.state ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center mb-2 text-blue-700 font-semibold">
              <Building2 className="w-5 h-5 mr-2" />
              {office.state}
            </div>
            <div className="flex items-center text-gray-800">
              <User className="w-5 h-5 mr-2 text-gray-500" />
              {office.name}
            </div>
            <div className="flex items-start mt-2 text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-gray-400 mt-1" />
              <p className="leading-snug">{office.address}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};

export default Office;
