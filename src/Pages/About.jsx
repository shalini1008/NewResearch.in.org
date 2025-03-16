import { motion } from "framer-motion";
import Layout from "../Component/Layout";
import Hero from "../Component/Hero";
import Section from "../Component/Section";
import PartnerCard from "../Component/PartnerCard";
import StatCard from "../Component/StatCard";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero title="About NRS" subtitle="Empowering change through research and innovation."  />

      {/* Vision & Mission */}
      <Section title="Our  Mission">
        <p className="text-gray-600 leading-relaxed">
         NRS is dedicated to enhancing socio-economic conditions and <span className="font-bold">improving the quality of life</span> for disadvantaged communities through evidence-based research, policy evaluation, and data-driven decision-making. 
         <br></br>
         As a <span className="font-bold">non-partisan and non-political entity</span>, our core mission is to support <span className="font-bold">sustainable development</span> initiatives by providing research-driven insights for government agencies, NGOs, development organizations, and private sector clients.
        </p>
      </Section>

      {/* Expertise & Areas of Work */}
      <Section title=" Areas of Work">
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { title: "Agricultural Research & Crop Assessment", img: "./research.jpg" },
      { title: "CSR Programme Evaluations", img: "./survey.jpeg" },
      { title: "Environmental Management & Sustainability", img: "./impact.jpg" },
    ].map((item, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
      </motion.div>
    ))}
  </div>
</Section>


      {/* Organizational Strength */}
      <Section title="Organizational Structure ">
  <ul className="list-disc pl-6 text-gray-600">
    <li>
      <strong>Field Research Unit:</strong> Responsible for end-to-end survey management, including recruitment, training, deployment, supervision, and quality control of field investigators.
    </li>
    <li>
      <strong>Data Analysis & Management Unit:</strong> Specializes in data processing, statistical analysis, report generation, and policy recommendations using advanced tools like <strong>MS Excel, SPSS, and GIS software</strong>.
    </li>
    <li>
      <strong>Over 300+ Trained Field Investigators:</strong> Conducting large-scale surveys and research projects across urban and rural landscapes in India.
    </li>
  </ul>
</Section>


      {/* Strategic Partnerships */}
      <Section title="Strategic Partnerships ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "CRISIL Limited", 
            "Natural Resources India Foundation (NRIF)", 
            "Agricultural Finance Corporation Limited",
            "Indian Agribusiness Systems Ltd",
            "Spectrum Planning (India) Limited"
          ].map((partner, index) => (
            <PartnerCard key={index} name={partner} />
          ))}
        </div>
      </Section>

      {/* Impact at Scale */}
      <Section title="Impact at Scale">
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard title="2+ Lakh Surveys" description="Covering diverse socio-economic and market research." />
          <StatCard title="20+ Organizations" description="Providing research, monitoring, and evaluation services." />
          <StatCard title="National-Level Programs" description="Enhancing policy effectiveness & governance." />
        </div>
      </Section>
    </div>
    </Layout>
  );
};

export default About;
