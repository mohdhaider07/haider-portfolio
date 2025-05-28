import React from "react";

const Experience: React.FC = () => (
  <section className="resume-section">
    <h2 className="resume-section-title font-serif">Experience</h2>
    {/* REV Position */}
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <div>
          <h3 className="font-bold text-gray-900 text-base">
            Full Stack Software Engineer <span className="font-normal">|</span>{" "}
            <span className="font-bold">Tech Lead</span>
          </h3>
          <p className="italic text-gray-900 font-medium">REV</p>
        </div>
        <div className="text-gray-900 text-sm mt-1 sm:mt-0 sm:text-right">
          <div>Riyadh, Saudi Arabia (Remote)</div>
          <div className="italic">Sep 2024 – May 2025</div>
        </div>
      </div>
      <ul className="list-disc list-inside ml-6 text-gray-900 text-base">
        <li>
          Led architecture and system design across client-facing platforms,
          ensuring scalability, fault tolerance, and maintainability
        </li>
        <li>
          Directed end-to-end development lifecycle across cross-functional
          teams, from sprint planning to production delivery
        </li>
        <li>
          Mentored and guided 3 junior developers and interns through pair
          programming, code reviews
        </li>
        <li>
          Established engineering best practices, implemented CI/CD pipelines,
          and enforced code quality standards, reducing bugs in production by
          40%
        </li>
      </ul>
    </div>
    {/* Freelance */}
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <div>
          <h3 className="font-bold text-gray-900 text-base">Freelance</h3>
        </div>
        <div className="text-gray-900 text-sm mt-1 sm:mt-0 sm:text-right">
          <div>Dubai, UAE (Remote)</div>
          <div className="italic">May 2023 – Present</div>
        </div>
      </div>
      {/* StarsLands */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-gray-900">StarsLands</h4>
          <span className="text-gray-900">— Influencer Marketing Platform</span>
          <a
            href="https://starslands.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline text-sm cursor-pointer"
          >
            View Live
          </a>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-900 text-base">
          <li>
            Built end-to-end marketplace connecting 10+ businesses with
            influencers; increased conversions by 18%
          </li>
          <li>
            Optimized MongoDB queries and caching, reducing API latency from
            1.2s to 400ms
          </li>
          <li>
            Developed real-time analytics dashboard enabling clients to track
            KPIs and boost decisions by 15%
          </li>
          <li>
            Automated $10k+ in monthly payment processing with 99.9% system
            reliability
          </li>
        </ul>
      </div>
      {/* FOZDEAL */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-gray-900">FOZDEAL</h4>
          <span className="text-gray-900">— GCC Investment Platform</span>
          <a
            href="https://fozdeal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline text-sm cursor-pointer"
          >
            View Live
          </a>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-900 text-base">
          <li>
            Engineered investment-matching algorithm that reduced investor
            discovery time by 20%
          </li>
          <li>
            Integrated calendar booking with email reminders; reduced no-show
            rates by 3%
          </li>
          <li>
            Designed feature/coupon system leading to a 13% increase in paid
            users
          </li>
          <li>
            Improved PostgreSQL performance; reduced dashboard load time from 3s
            to 800ms
          </li>
        </ul>
      </div>
      {/* AIQatar */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-gray-900">AIQatar</h4>
          <span className="text-gray-900">— AI Solution Provider</span>
          <a
            href="https://aiqatar.qa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline text-sm cursor-pointer"
          >
            View Live
          </a>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-900 text-base">
          <li>
            Revamped event registration flow; reduced user completion time from
            5 min to 2 min
          </li>
          <li>
            Created admin dashboard that cut operational overhead by 45% for
            organizers
          </li>
          <li>
            Integrated secure payment flow handling 100+ daily transactions with
            100% accuracy
          </li>
          <li>
            Optimized page rendering with Next.js ISR; improved page load speed
            by 20%
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
