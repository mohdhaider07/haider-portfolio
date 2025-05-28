import React from "react";

const Internship: React.FC = () => (
  <section className="resume-section">
    <h2 className="resume-section-title font-serif">Internship</h2>
    {/* Cruxe */}
    <div className="mb-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <div>
          <h3 className="font-bold text-gray-900 text-base">Cruxe</h3>
          <p className="italic text-gray-900 font-medium">Frontend Developer</p>
        </div>
        <div className="text-gray-900 text-sm mt-1 sm:mt-0 sm:text-right">
          <div>Sep 2022 – Mar 2023</div>
          <div className="italic">India (Remote)</div>
        </div>
      </div>
      <ul className="list-disc list-inside ml-6 text-gray-900 text-base">
        <li>
          Implemented pixel-perfect UI from Figma using React, Tailwind CSS, and
          Material UI
        </li>
        <li>
          Migrated legacy state logic to Redux Toolkit; improved dev efficiency
          and bug tracking
        </li>
        <li>Developed type-safe components to reduce runtime errors by 50%</li>
      </ul>
    </div>
    {/* MUN */}
    <div className="mb-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
        <div>
          <h3 className="font-bold text-gray-900 text-base">
            Model United Nations (MUN)
          </h3>
          <p className="italic text-gray-900 font-medium">Frontend Developer</p>
        </div>
        <div className="text-gray-900 text-sm mt-1 sm:mt-0 sm:text-right">
          <div>Dec 2022 – Feb 2023</div>
          <div className="italic">India (Remote)</div>
        </div>
      </div>
      <ul className="list-disc list-inside ml-6 text-gray-900 text-base">
        <li>
          Redesigned the MUN team's website; improved site visits by 3x through
          SEO-friendly React SPA
        </li>
        <li>
          Created dynamic components with Tailwind UI; improved user experience
          significantly
        </li>
      </ul>
    </div>
  </section>
);

export default Internship;
