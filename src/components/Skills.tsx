import React from "react";

const Skills: React.FC = () => (
  <section className="resume-section">
    <h2 className="resume-section-title font-serif">Skills</h2>
    <div className="space-y-2">
      <div>
        <span className="font-bold text-gray-900">Technologies: </span>
        <span className="text-gray-900">
          JavaScript/TypeScript, React/Next.js, Node/Express, REST/gRPC,
          Tailwind/Shadcn, MongoDB, PostgreSQL, Redis, Kafka, Microservices
        </span>
      </div>
      <div>
        <span className="font-bold text-gray-900">Tools: </span>
        <span className="text-gray-900">
          Git, Docker, Kubernetes, AWS (EC2/S3/EKS), Nginx, Cloudflare, WebRTC,
          Payment APIs, Cypress, Grafana, CI/CD
        </span>
      </div>
    </div>
  </section>
);

export default Skills;
