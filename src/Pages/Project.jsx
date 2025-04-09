import Layout from "../Component/Layout";

const projectData = [
  {
    category: "Corporate Social Responsibility Assignments",
    subcategories: [
      {
        name: "Financial Inclusion",
        assignments: [
          {
            title: "Mid-Term Evaluation of Digital Sakhi Programme",
            client: "CRISIL",
            sampleSize: "HH: 450, FGD: 10, KII: 16",
            location: "Gorakhpur (UP), Supaul (Bihar)",
            duration: "Feb 2025 – Mar 2025",
          },
          {
            title: "Impact Assessment of Digital Sakhi Programme",
            client: "CRISIL",
            sampleSize: "HH: 417",
            location: "2 Districts in Madhya Pradesh",
            duration: "Jul 2023 – Aug 2023",
          },
        ],
      },
      {
        name: "Water Conservation & Management",
        assignments: [
          {
            title:
              "Impact Assessment & SROI Study of Water Conservation Programme",
            client: "CRISIL",
            sampleSize: "HH: 2448, FGD: 40, KII: 60",
            location: "14 Locations across 10 States",
            duration: "Jan 2025 – Feb 2025",
          },
          {
            title:
              "Impact Assessment & SROI Study of Water Resource Management",
            client: "CRISIL",
            sampleSize: "HH: 250, FGD: 37, KII: 25",
            location: "Baloda Bazar, Chhattisgarh",
            duration: "Jan 2025 – Feb 2025",
          },
        ],
      },
    ],
  },
  {
    category: "Government Assignments",
    assignments: [
      {
        title:
          "Regular Monitoring of MoRD & MoPR Programmes (MGNREGA, NRLM, PMAY-G, etc.)",
        client: "NRIF",
        location: "Punjab (6 districts), Rajasthan (3 districts)",
        duration: "Sep 2024 – Nov 2024",
      },
      {
        title: "Enquiry into Irregularities under MGNREGA/PMAY-G",
        client: "NRIF",
        location: "Rajasthan (1 district)",
        duration: "Oct 2023 – Nov 2023",
      },
    ],
  },
  {
    category: "Agriculture Assignments",
    assignments: [
      {
        title: "Loss Assessment Survey for Crop Losses (Kharif 2023)",
        client: "Indian Agribusiness Systems Ltd.",
        location: "Odisha (Bargarh)",
        duration: "Oct 2023 – Nov 2024",
      },
      {
        title: "Witnessing of Crop Cutting Experiments (PMFBY)",
        client: "Indian Agribusiness Systems Ltd.",
        location: "Rajasthan (6 districts)",
        duration: "Oct 2020 – Dec 2020",
      },
    ],
  },
];

export default function Project() {
  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Projects Overview
        </h1>
        {projectData.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl text-center text-orange-500 font-semibold mb-4">
              {category.category}
            </h2>
            {category.subcategories ? (
              category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="flex-col text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {subcategory.name}
                  </h3>
                  <div className="grid-center">
                    {subcategory.assignments.map((assignment, assignIndex) => (
                      <div
                        key={assignIndex}
                        className="border p-4 rounded-md shadow-md bg-white m-3"
                      >
                        <h4 className="text-lg font-semibold">
                          {assignment.title}
                        </h4>
                        <p className="text-sm">
                          <strong>Client:</strong> {assignment.client}
                        </p>
                        <p className="text-sm">
                          <strong>Sample Size:</strong> {assignment.sampleSize}
                        </p>
                        <p className="text-sm">
                          <strong>Location:</strong> {assignment.location}
                        </p>
                        <p className="text-sm">
                          <strong>Duration:</strong> {assignment.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid-center ">
                {category.assignments.map((assignment, assignIndex) => (
                  <div
                    key={assignIndex}
                    className="border p-4 rounded-lg shadow-lg bg-white m-3 text-center"
                  >
                    <h4 className="text-lg font-semibold">
                      {assignment.title}
                    </h4>
                    <p className="text-sm">
                      <strong>Client:</strong> {assignment.client}
                    </p>
                    <p className="text-sm">
                      <strong>Location:</strong> {assignment.location}
                    </p>
                    <p className="text-sm">
                      <strong>Duration:</strong> {assignment.duration}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 py-10 bg-gray-50">
  <div className="px-4 py-10 bg-gray-50">
  <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
    All Other Projects
  </h1>

  <div className="flex flex-wrap justify-center gap-6">
    {Array.from({ length: 6 }).map((_, index) => (
      <img
        key={index}
        src={`./project${index + 1}.png`}
        alt={`Project ${index + 1}`}
        className="rounded-lg shadow-md max-w-full h-auto border border-gray-200"
        style={{ maxWidth: "600px" }} 
      />
    ))}
  </div>
</div>

    </div>
<div className="flex justify-center">
        <button
          className="bg-pink-500 text-white text-center px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1t-EW89ODI6MSSogLXlx2YisDX9rdDFRC/view?usp=sharing",
              "_blank"
            )
          }
        >
          All Projects
        </button>
      </div>
    </Layout>
  );
}
