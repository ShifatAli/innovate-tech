import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-innovate.jpg';
import featureImage1 from '../assets/feature1.jpg';
import featureImage2 from '../assets/feature2.jpg';
import featureImage3 from '../assets/feature3.jpg';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const whyUsPoints = [
    {
      title: 'Dedicated to Technological Innovation',
      description:
        'We specialize in tech-based projects that are forward-thinking and high impact, setting us apart from general crowdfunding platforms.',
    },
    {
      title: 'Milestone-Based Funding Model',
      description:
        'Funds are released in phases upon completion of development milestones, ensuring accountability and maximizing backer confidence.',
    },
    {
      title: 'Access to a Network of Mentors',
      description:
        'Get guidance from industry leaders, seasoned developers, and startup veterans throughout your journey from concept to launch.',
    },
    {
      title: 'Public Progress Tracking',
      description:
        'Showcase every step of your project. Build trust with regular updates, transparent timelines, and backer interaction.',
    },
    {
      title: 'Flexible Rewards and Incentives',
      description:
        'Create unique reward tiers such as early access, community recognition, and exclusive innovations for your supporters.',
    },
    {
      title: 'Inspire the Future',
      description:
        'Motivate the next generation of innovators by sharing your success, your process, and your lessons.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="w-full px-6 md:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-indigo-400">
            Empowering Innovations, <br /> Fueling the Future
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
            Welcome to{' '}
            <span className="text-indigo-500 font-semibold">Innovate Tech</span> – a visionary
            platform reimagining crowdfunding for the innovators of tomorrow. We bridge the gap
            between dreamers and doers by enabling funding through structured, transparent, and
            expert-driven ecosystems.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              to="/signup"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="border border-indigo-500 hover:bg-indigo-600 hover:text-white text-indigo-400 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Innovation"
            className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px] sm:max-h-[500px]"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-20 py-24 bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-20 relative after:absolute after:w-32 after:h-1 after:bg-indigo-600 after:left-1/2 after:-translate-x-1/2 after:-bottom-4">
          What We Offer
        </h2>
        <div className="flex flex-col gap-16">
          {[
            {
              img: featureImage1,
              title: 'Submit Your Idea',
              text: 'Whether you’re at ideation, prototype, or MVP stage—pitch your innovation, whitepaper, or concept. Our expert reviewers help shape your raw idea into a tangible, fundable vision.',
            },
            {
              img: featureImage2,
              title: 'Milestone-Based Funding',
              text: 'Funds are unlocked as you achieve key development milestones. This transparent system builds trust with backers and ensures responsible project execution and delivery.',
            },
            {
              img: featureImage3,
              title: 'Expert Mentorship',
              text: 'Collaborate with domain experts, technical architects, and growth strategists. From feedback to long-term guidance—we help you evolve as a founder and bring your idea to market.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              } gap-8 items-center bg-gray-800 p-6 rounded-2xl shadow-lg`}
            >
              <img
                src={item.img}
                alt={`feature-${i}`}
                className="w-full md:w-1/2 h-56 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-2xl font-semibold text-indigo-300 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Accordion */}
      <section className="px-6 md:px-20 py-24">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          Why Choose Innovate Tech?
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {whyUsPoints.map((point, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-6 hover:bg-gray-900 transition-colors"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex justify-between items-center text-left text-lg sm:text-xl font-semibold text-indigo-300"
              >
                {point.title}
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    expandedIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-24 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">
          Start Building the Future Today
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Whether you’re an inventor, builder, or a curious mind with an impactful vision—Innovate
          Tech is your launchpad. Join a vibrant ecosystem where innovation thrives, progress is
          celebrated, and funding meets purpose.
        </p>
        <Link
          to="/signup"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg text-base sm:text-xl font-bold transition-colors"
        >
          Join Us Now
        </Link>
      </section>
    </div>
  );
}
