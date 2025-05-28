import React from "react";

const Education: React.FC = () => (
  <section className="resume-section">
    <h2 className="resume-section-title font-serif">Education</h2>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
      <div>
        <h3 className="font-bold text-gray-900">
          Jamia Millia Islamia University
        </h3>
        <p className="italic text-gray-900">
          Bachelor of Technology in Computer Engineering
        </p>
      </div>
      <div className="text-gray-900 text-sm mt-1 sm:mt-0 sm:text-right">
        <div>New Delhi, India</div>
        <div className="italic">Aug 2020 – Jul 2024</div>
      </div>
    </div>
  </section>
);

export default Education;
