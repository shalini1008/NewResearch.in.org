import React, { useState } from "react";
import Layout from "../Component/Layout";
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
function Office() {
  const [selectedState, setSelectedState] = useState(null);
  return (
    <Layout>
       <h1 className="text-3xl text-center font-bold m-4">Our Offices</h1>
       <div className="flex flex-col md:flex-row items-start justify-center p-4">
  {/* Left Table Section */}
  <div className="w-full md:w-1/2 p-4">
    <table className="border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">State</th>
          <th className="border p-2">Coordinator</th>
          <th className="border p-2">Address</th>
        </tr>
      </thead>
      <tbody>
        {offices.map((office, index) => (
          <tr
            key={index}
            className={`cursor-pointer transition-all duration-200 ${
              selectedState === office.state ? "bg-blue-200" : "hover:bg-gray-100"
            }`}
            onMouseEnter={() => setSelectedState(office.state)}
          >
            <td className="border p-2">{office.state}</td>
            <td className="border p-2">{office.name}</td>
            <td className="border p-2">{office.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Right Map Section */}
  <div className="w-full md:w-1/2 p-4 flex justify-center">
    <div className="relative">
      <img
        src="./office.png"
        alt="India map"
        className="max-w-full h-auto"
      />
      
      {/* Hovered State Highlight */}
      {selectedState && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-black bg-opacity-50 text-white p-2 rounded-lg">
            {selectedState}
          </div>
        </div>
      )}
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Office