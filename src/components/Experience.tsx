"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Design Lead",
      company: "Studio IAAD + ZOERA",
      date: "Oct 2023 – Present",
      description: "Currently leading the architecture design, with a wide variety of projects taking into account of planning the building in and out.",
      points: [
        "Farmhouse for Mr. Singhania (22,000 sq.ft) at Raipur",
        "Villa for Mr. Sanjiv Bijli (26,000 Sq.ft) at Vasant Vihar, New Delhi",
        "Villa for Mr. Anil (25,000 Sq.ft) at Faridabad",
        "Villa for Mr. Dipankar (10,000 Sq.ft) at Sector 65 Gurugram",
        "Villa for Mr. Sanjay Lodha (25,000 sq.ft) at Faridabad",
        "Group Housing Planning at Acoi village GOA (60 dwelling unit)",
      ],
    },
    {
      id: 2,
      role: "Senior Architect",
      company: "Abhimanyu Dalal Architects",
      date: "Sept 2018 – Oct 2023",
      description: "Leading a team of architects to deliver projects to prestigious clients. Responsibilities included client/consultant coordination and planning ahead of site execution.",
      categories: [
        {
          name: "Office Building & Interior Projects",
          items: [
            "Office building For KLM Sugar Mills (22,000 sq.ft) Gomati Nagar, Lucknow",
            "Office Interior for Mr. Kapil Sibal (6000 Sq.ft) at 7, Hailey Road New Delhi",
            "Office Interior for Mr. Akhil Sibal (2000 Sq.ft) at Jorbag Delhi",
            "Office interior for Mr. Tushar Gautam (3500 sq.ft) Sleepwell owner at Delhi",
            "Office interior for Mr. Rajender Gupta (4000 Sq.ft) Trident owner New Delhi",
            "Office Interior for Mr. Raj Kejriwal (3500 Sq.ft) at Raipur",
            "Office Interior for Mr. Khemka (2000 Sq.ft) at New Delhi",
          ]
        },
        {
          name: "Educational & Commercial Projects",
          items: [
            "St. Lawarence School Sanawar Shimla",
            "Girls Dormitory (20,000 Sq.ft)",
            "Redevelopment of Holiday Home",
            "Open Amphitheatre (5,000 sq.ft)",
            "Multi- Purpose Hall (40,000) at Scindia Kanya Vidalaya at Gwalior",
            "Redevelopment of Kamla Bhawan Admin space (20,000) at S.K.V. Gwalior",
            "200-meter Track with pavilion at S.K.V. Gwalior",
            "Mayo College Ajmer (300 acres campus)",
            "N.C Sharma Block (25,000 sq.ft) & Dining Hall (50,000) at Mayo",
            "Art Gallery in Amphitheatre & Junior School Redevelopment at Mayo",
            "Alwar House – Admin space Redevelopment at Mayo"
          ]
        },
        {
          name: "Residential Projects",
          items: [
            "Residential Complex Design at 7, Hailey Road New Delhi",
            "Villa for Mr. Kapil Sibal (40,000 Sq.Ft) at 7, Hailey Road New Delhi",
            "Villa for Mr. Tushar Gautam (25,000 Sq.Ft) at New Delhi",
            "Villa for Mr. A.K Sood (35,000 Sq.ft) at 7, Hailey Road New Delhi",
            "Residence for Mr. Himanshu Baid at Gk-2 (30,000 Sq.Ft) South Delhi",
            "Residence for Mr. Sidharth Saraf at GK-1 (35,000 Sq.Ft.)",
            "Residence for Mr. Anil Bammi (30,000 Sq.ft) at South City -1 Gurgaon",
            "Residence for Mr. Anubhav Kathuira 3, Poorvi marg South Delhi",
            "Residence Guest house for Trident (35,000 sq.ft) Shanti Niketan New Delhi",
            "Residence for Mr. Saroj Poddar (40,000 Sq.ft) at Kolkata & Mr. Aayush Poddar (20,000 sq.ft)",
            "Art Display area for Mr. Poddar (4000 sq.ft) & Residence for Mr. Debasish Poddar (25,000 Sq.ft) at Kolkata",
            "Residence For Mr. Rajkumar Kejriwal (15,000 Sq.ft) Raipur",
            "Mr. Modi Residence Development at 36, Amrita shergill Marg New Delhi",
            "Residence for Mr. Anurag Lohia (20,000) Kanpur."
          ]
        },
        {
           name: "Religious Projects",
           items: [
             "Redevelopment of Ajmer Dargah",
             "Service Block Development (15,000 sq.ft)"
           ]
        }
      ],
    },
    {
      id: 3,
      role: "Project Architect",
      company: "RRD C.R park",
      date: "Jan 2016 – Sept 2018",
      description: "Key responsibilities of space planning, preparing mood boards and designs, coordination with consultants.",
      points: [
        "Dr. Dangs Lab (12,000 sqft), S.D.A South Delhi",
        "Farmhouse for Mr. Chopra (25,000 sq.ft) Ansal Farms Delhi",
        "Farmhouse for Mr. Tramboo (35,000 sq.ft) Asola Delhi",
        "Residence for Mr. Gupta (20,000 Sq.ft) Beri Delhi",
      ],
    },
    {
      id: 4,
      role: "Architect",
      company: "Genesis architect pvt. Ltd / a2 dzign inc, Vasant Kunj",
      date: "Dec 2014 – Dec 2016",
      description: "Managed and planned spaces, prepared mood boards and designs, and coordinated with consultants.",
      points: [
        "Mamagoto restaurant (2,000 sqft) at Kala Ghoda Mumbai",
        "Roll mall and speedy chow at Sarojini Nagar market",
        "Mamagoto restaurant (2,500 sqft) at Andheri Mumbai",
        "Kiosk for Comesums at Railway stations",
        "Corporate office interior for Azure hospitality (6,000 sqft) at Okhla, New Delhi",
        "Corporate office interior for RK associates Comesum (18,000 sqft) at Okhla, New Delhi",
      ],
    },
    {
      id: 5,
      role: "Architect",
      company: "Modus Design Studio",
      date: "Dec 2013 – Dec 2014",
      description: "Space Planning, inception to execution, preparing creative direction, and coordinating with consultants.",
      points: [
        "Farmhouse for Mr. Jain (South Delhi)",
        "Farmhouse for Mr. Gulati (Satbari South Delhi)",
        "Hotel D2-Aerocity Gurugram",
        "Residence for Mr. K.P Singh (New Delhi)",
      ],
    },
    {
      id: 6,
      role: "Junior Architect",
      company: "Design Action Group, Okhla",
      date: "July 2012 – July 2013",
      description: "Proposal writing, site supervision, drafting schematic designs, working drawings, and physical models.",
      points: [
        "Multi-function center cum hotel (15,000 sq.ft) at Jabalpur",
        "Multi-function center cum hotel (15,000 sq.ft) at Gwalior",
        "Shopping mall (20,000 sq.ft) at Darjeeling",
        "Development plan for fire affected shops at Darjeeling",
        "Mr. Methew's residence (15,000 sq.ft) at Faridabad",
        "Measurement drawings of Delhi University South Campus",
        "Redevelopment plan of north campus and south campus Delhi university"
      ],
    },
  ];

  return (
    <section className="relative z-20 py-16 md:py-24 px-5 md:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-5xl font-semibold mb-8 md:mb-16 tracking-tight">
          Professional Journey
        </h3>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              key={exp.id} 
              className="relative p-5 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold">{exp.role}</h4>
                  <p className="text-lg text-[#ededed]/70">{exp.company}</p>
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm whitespace-nowrap w-fit">
                  {exp.date}
                </div>
              </div>
              <p className="text-[#ededed]/80 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {exp.points && (
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#ededed]/60 list-disc list-inside">
                   {exp.points.map((point, i) => (
                     <li key={i} className="leading-relaxed">{point}</li>
                   ))}
                 </ul>
              )}

              {exp.categories && (
                <div className="space-y-8 mt-4">
                  {exp.categories.map((cat, i) => (
                    <div key={i}>
                      <h5 className="text-[#ededed] font-medium mb-3 border-b border-white/10 pb-2">{cat.name}</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#ededed]/60 list-disc list-inside">
                        {cat.items.map((item, j) => (
                          <li key={j} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
