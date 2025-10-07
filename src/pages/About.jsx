export default function About() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 md:px-12 lg:px-20 dark:bg-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          About <span className="text-indigo-600 dark:text-indigo-400">Innovate Tech</span>
        </h2>

        <section className="mb-10">
          <p className="text-lg leading-relaxed">
            <strong>Innovate Tech</strong> is a next-generation crowdfunding platform built specifically for innovators, creators, and change-makers. Unlike traditional platforms, Innovate Tech focuses on empowering technology-driven and socially impactful projects through a unique model of milestone-based funding, expert mentorship, and transparent public engagement. Our mission is to turn early-stage ideas into successful, real-world solutions that have the potential to improve industries and lives.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-base leading-relaxed">
            We are dedicated to fostering innovation by creating a space where ambitious ideas can grow and thrive. Our platform is built to support entrepreneurs, developers, and visionaries at every step—from ideation to launch. We provide not only financial backing through a global community of supporters, but also technical validation, mentorship, and community engagement that ensures projects stay on track and aligned with real-world needs.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">How It Works</h3>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Creators submit their project idea with detailed documentation, prototypes, or wireframes if available.</li>
            <li>Projects are reviewed by industry experts who provide valuable feedback and potential improvements before launch.</li>
            <li>Campaigns go live with clear funding goals and project milestones to ensure backer transparency and creator accountability.</li>
            <li>Backers contribute funds based on trust, innovation, and potential value of the project. Funds are released in stages as creators reach verified milestones.</li>
            <li>Projects receive continuous visibility and engagement via public updates, development logs, and backer interactions.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">Why Choose Innovate Tech?</h3>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>
              <strong>Expert Guidance:</strong> We offer access to a network of seasoned professionals from tech, design, marketing, and finance who mentor and guide project creators.
            </li>
            <li>
              <strong>Milestone-Based Funding:</strong> Our unique funding model ensures that creators receive financial support gradually, aligned with actual project progress and deliverables.
            </li>
            <li>
              <strong>Accountability & Transparency:</strong> Every project is openly tracked with visible timelines, status updates, and development logs that build trust among backers.
            </li>
            <li>
              <strong>Community-Driven Growth:</strong> Backers, mentors, and creators form an ecosystem of collaboration where feedback and support drive higher success rates.
            </li>
            <li>
              <strong>Customizable Rewards:</strong> Creators can offer innovative and flexible rewards including early access, beta testing roles, and exclusive community perks.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">Our Vision for the Future</h3>
          <p className="text-base leading-relaxed">
            At Innovate Tech, we envision a future where great ideas are no longer limited by lack of funding, mentorship, or visibility. We believe that technology has the power to solve some of the world’s most pressing challenges, and by providing a structured and supportive launchpad for tech-driven initiatives, we are building a better, more connected future. Our platform will continue evolving to support emerging technologies like AI, blockchain, renewable energy, and social impact innovations through community-led acceleration.
          </p>
        </section>

        <section className="text-center mt-12">
          <p className="text-lg font-medium max-w-3xl mx-auto">
            Whether you're a visionary entrepreneur with a groundbreaking idea, a passionate technologist seeking to solve real-world problems, or a supporter of innovative thinking —&nbsp;
            <span className="text-indigo-600 dark:text-indigo-400">
              Innovate Tech is your trusted platform to make it happen.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
