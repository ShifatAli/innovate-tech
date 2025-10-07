import {
  Lightbulb,
  Layers3,
  FileText,
  ShieldCheck,
  TrendingUp,
  Eye,
  DollarSign,
  MessageCircle,
  Target,
  Gift,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Lightbulb size={32} className="text-indigo-500" />,
      title: "Project Idea Submission",
      description:
        "Easily submit innovative ideas and get them noticed by a community of backers and reviewers.",
    },
    {
      icon: <Layers3 size={32} className="text-indigo-500" />,
      title: "Prototype Presentation",
      description:
        "Showcase working prototypes through images or demos to gain trust and attract funding.",
    },
    {
      icon: <FileText size={32} className="text-indigo-500" />,
      title: "Whitepaper Submission",
      description:
        "Provide technical and business documentation to explain your project's scope and viability.",
    },
    {
      icon: <ShieldCheck size={32} className="text-indigo-500" />,
      title: "Review and Verification",
      description:
        "Experts review and verify the authenticity and potential of submitted projects.",
    },
    {
      icon: <TrendingUp size={32} className="text-indigo-500" />,
      title: "Project Progress Tracking",
      description:
        "Track the development and funding progress of each project transparently.",
    },
    {
      icon: <Eye size={32} className="text-indigo-500" />,
      title: "Transparency and Accountability",
      description:
        "Creators are held accountable for milestones and use of funds, ensuring trust.",
    },
    {
      icon: <DollarSign size={32} className="text-indigo-500" />,
      title: "Fundraising Campaigns",
      description:
        "Launch campaigns to raise the required amount for your project's next stage.",
    },
    {
      icon: <MessageCircle size={32} className="text-indigo-500" />,
      title: "Ongoing Communication",
      description:
        "Creators and backers can stay connected through updates, comments, and feedback.",
    },
    {
      icon: <Target size={32} className="text-indigo-500" />,
      title: "Milestone-Based Funding",
      description:
        "Funds are released based on achieving specific milestones, ensuring responsibility.",
    },
    {
      icon: <Gift size={32} className="text-indigo-500" />,
      title: "Completion and Rewards",
      description:
        "Backers receive promised rewards or returns after successful completion of the project.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f9fafb] dark:bg-black text-black dark:text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
