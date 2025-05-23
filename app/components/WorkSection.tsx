import React from "react";
import BasePathImage from "./BasePathImage";

const WorkSection: React.FC = () => {
  const workExperiences = [
    {
      companyLogo: "/endava_logo.png",
      companyName: "DEK - Endava",
      jobTitle: "Software Engineer, DevOps",
      project: "IMS Network Function Test",
      projectDescription:
        "A framework for IMS (IP Multimedia Subsystem) Network Function Testing, designed to assist telecom companies in developing and validating IMS deployments. This framework enables the creation of test cases for critical protocols such as SIP (Session Initiation Protocol), Diameter, etc., to verify IMS functionality.",
      technologies: "Python Flask, TTCN-3, Linux, Docker, Kubernetes, Jenkins, Nginx",
      responsibilities: [
        "Develop testing framework for IMS (GUI, API, system logic)",
        "Develop scripts and Jenkins for CI/CD",
        "Support customers in troubleshooting configuration and deployment",
        "Discuss about requirements detail, feature design and implementation",
        "Perform code-reviewing and testing for product's new functionality",
        "Write product documentation for new features, demo in sprint review, quarter release",
        "Perform security scans and address security issues for each release",
      ],
      achievements: [
        "Migrated product from Docker to Kubernetes platform",
        "Wrote automated scripts that saved 52 man-hour manual work per year",
        "Showcased working product to potential customer",
        "Hosted sessions internally to share new technologies to team, trained a new member",
      ],
      period: "Sep 2022 - Present",
    },
    {
      companyLogo: "/vinbrain_logo.png",
      companyName: "VinBrain",
      jobTitle: "Front-End Developer",
      project: "AIScaler",
      projectDescription:
        "A product that helps organizations can do an end-to-end flow AI training, from data labeling, data cleaning to model training and deployments",
      technologies: "React, Redux, Tailwind, HTML, CSS, JSON",
      responsibilities: [
        "Develop user interfaces using React + Redux",
        "Gather requirements from UI designer",
        "Collaborate with backend developers for API endpoints",
      ],
      achievements: ["Learned React and Redux, Tailwind CSS, Scrum"],
      period: "Jun 2021 - Sep 2021",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {workExperiences.map((work, index) => (
        <div
          key={index}
          className="flex max-w-screen-xl w-full flex-col items-center md:items-start lg:flex-row gap-4 py-4 group"
        >
          <BasePathImage
            src={work.companyLogo}
            alt={work.companyName}
            className="w-52 h-52 bg-white shadow-xl p-4 rounded-lg object-contain transition-shadow duration-500 group-hover:shadow-2xl"
          />
          <div className="h-0 w-0 lg:h-40 lg:w-0 lg:m-6 lg:border-2 border-primary-400 slide-in-from-top-10 fade-in-0 duration-500 animate-in group-hover:scale-y-125" />
          <div className="flex-1 text-left p-4 pl-10 text-lg bg-primary-100 duration-500">
            <h3 className="text-xl font-semibold text-primary-600">
              {work.companyName}
            </h3>
            <div className="text-sm text-gray-500 mb-2">{work.period}</div>
            <div className="text-gray-700 mb-4 text-base">
              <strong>Role: </strong>
              {work.jobTitle}
            </div>
            <div className="text-gray-700 mb-4 text-base">
              <strong>Project: </strong>
              {work.project} - {work.projectDescription}
            </div>
            <div className="text-gray-700 mb-4 text-base">
              <strong>Technologies: </strong>
              {work.technologies}
            </div>
            <div className="text-gray-700 mb-4 text-base">
              <strong>Responsibilities</strong>
              <ul className="list-disc list-inside">
                {work.responsibilities.map((item, id) => (
                  <li
                    className="md:hover:text-primary-600 md:hover:translate-x-1 transition-transform duration-300"
                    key={id}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-gray-700 mb-4 text-base">
              <strong>Achievements</strong>
              <ul className="list-disc list-inside">
                {work.achievements.map((item, id) => (
                  <li
                    className="md:hover:text-primary-600 md:hover:translate-x-1 transition-transform duration-300"
                    key={id}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
