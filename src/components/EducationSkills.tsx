"use client";

import { motion } from "framer-motion";

export default function EducationSkills() {
  const skills = [
    "Project Management & Coordination",
    "Client Communication & Collaboration",
    "Expertise In Project Planning",
    "Strategic Planner",
    "Vendor Management",
    "AutoCAD & Photoshop",
    "Detailed Architectural Drawings",
    "Space Planning"
  ];

  const education = [
    {
      degree: "Masters In Architecture",
      institution: "Lingaya’s Vidhapeeth, Faridabad",
      year: "2016 - 2018"
    },
    {
      degree: "LLB Graduate",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      year: "2013 - 2016"
    },
    {
      degree: "Bachelors In Architecture",
      institution: "Lovely Professional University, Punjab",
      year: "2007 - 2012"
    }
  ];

  return (
    <section className="relative z-20 py-12 px-8 md:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-8 tracking-tight">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="text-[#ededed]/70">{edu.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-8 tracking-tight">Core Competencies</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-[#ededed]/90 font-medium hover:bg-white/10 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
