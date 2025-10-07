export default function Projects() {
  const projects = [
    {
      title: "Solar-Powered Smart Irrigation System",
      category: "Agritech",
      status: "Active",
      description:
        "An automated irrigation system that uses solar energy and IoT-based soil monitoring to optimize water usage and improve crop yield in rural farms.",
    },
    {
      title: "AI-Powered Road Safety Assistant",
      category: "Smart Mobility",
      status: "In Review",
      description:
        "A machine learning solution designed to detect risky driving behavior and offer real-time audio alerts, reducing road accidents and ensuring safer commutes.",
    },
    {
      title: "Blockchain Voting Platform",
      category: "Civic Tech",
      status: "Prototype",
      description:
        "A secure, transparent, and decentralized digital voting system to ensure tamper-proof elections, accessible remotely via mobile devices.",
    },
    {
      title: "EcoBrick Recycling Automation",
      category: "Environment",
      status: "Completed",
      description:
        "A semi-automated machine to convert plastic waste into EcoBricks, promoting upcycling and reducing landfill waste in urban areas.",
    },
    {
      title: "Assistive Smart Glasses for the Visually Impaired",
      category: "Healthcare",
      status: "Active",
      description:
        "Smart glasses that use computer vision and voice feedback to help visually impaired individuals navigate indoor and outdoor environments safely.",
    },
    {
      title: "Crowdsourced Emergency Response App",
      category: "Public Safety",
      status: "Fundraising",
      description:
        "A mobile app to connect citizens with nearby trained responders and first-aid resources during emergencies, before ambulances arrive.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Explore Innovative Projects
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
        Discover a curated list of breakthrough innovations submitted by individuals and teams across various domains. Each project reflects a commitment to solving real-world challenges through technology, creativity, and collaboration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-800 shadow hover:shadow-lg transition duration-300 p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Category: <strong>{project.category}</strong>
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : project.status === "In Review"
                    ? "bg-yellow-100 text-yellow-700"
                    : project.status === "Fundraising"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-indigo-100 text-indigo-700"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
