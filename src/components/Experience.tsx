type ProjectGroup = {
  name: string;
  items: string[];
};

type ExperienceEntry = {
  id: number;
  role: string;
  company: string;
  date: string;
  summary: string;
  highlights: string[];
  projectsNote?: string;
  projects: ProjectGroup[];
};

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: "Design Lead",
    company: "ZOERA + Studio IAAD",
    date: "October 2023 – Present",
    summary:
      "I lead architectural and interior design across six projects, from concept planning through site execution.",
    highlights: [
      "Plans work from concept through execution, including a 2,00,000 sq ft shopping mall and a 60-unit housing project.",
      "Designs biophilic shared spaces, sets sensory standards for lighting, music, and fragrance, and plans furniture layouts, wayfinding, and visitor routes.",
      "Reviews design work, builds in-house capability, and coordinates consultants, vendors, and clients.",
    ],
    projectsNote: "Budgets listed for these six projects total ₹277 Cr.",
    projects: [
      {
        name: "Selected projects",
        items: [
          "Shopping mall planning (2,00,000 sq ft), Raipur — ₹120 Cr",
          "Group housing planning (60 dwellings), Acoi village, Goa — ₹30 Cr",
          "Villa for Mr. Sanjiv Bijli (26,000 sq ft), Vasant Vihar, New Delhi — ₹52 Cr",
          "Villa for Mr. Ajay Aggarwal, Faridabad — ₹15 Cr",
          "Villa for Mr. Dipankar (10,000 sq ft), Sector 65, Gurugram — ₹10 Cr",
          "Villa for Mr. Sanjay Lodha (25,000 sq ft), Faridabad — ₹50 Cr",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Senior Architect / Senior Design Lead",
    company: "Abhimanyu Dalal Architects",
    date: "September 2018 – October 2023",
    summary:
      "I led a team on 33 projects across offices, schools, cultural spaces, homes, and religious redevelopment.",
    highlights: [
      "Built in-house design capability through standards and mentoring, and reviewed work with internal teams and external consultants.",
      "Coordinated clients, architects, consultants, and vendors through design and pre-construction.",
      "Worked across a 300-acre campus, luxury residences, offices, cultural projects, and religious redevelopment.",
    ],
    projectsNote: "Listed budgets across these 33 projects exceed ₹930 Cr.",
    projects: [
      {
        name: "Workplace",
        items: [
          "KLM Sugar Mills office building (25,000 sq ft), Gomti Nagar, Lucknow — ₹25 Cr",
          "Office interior for Mr. Kapil Sibal (6,000 sq ft), 7 Hailey Road, New Delhi — ₹3 Cr",
          "Office interior for Mr. Akhil Sibal (2,000 sq ft), Jor Bagh, New Delhi — ₹1 Cr",
          "Office interior for Mr. Tushar Gautam (3,500 sq ft), Delhi — ₹1.5 Cr",
          "Office interiors for Mr. Rajender Gupta, Mr. Raj Kejriwal, and Mr. Khemka",
        ],
      },
      {
        name: "Education & culture",
        items: [
          "Mayo College, Ajmer (300-acre campus)",
          "N.C. Sharma Block (25,000 sq ft) and dining hall (50,000 sq ft), Mayo College",
          "Art gallery, junior school redevelopment, and Alwar House administration space, Mayo College",
          "Open Amphitheatre (5,000 sq ft), Scindia Kanya Vidyalaya, Gwalior",
          "Girls’ dormitory (20,000 sq ft), The Lawrence School, Sanawar",
          "Holiday home redevelopment",
        ],
      },
      {
        name: "Residential & religious",
        items: [
          "Residential complex, 7 Hailey Road, New Delhi — ₹300 Cr",
          "Villas for Mr. Kapil Sibal (40,000 sq ft) and Mr. A.K. Sood (35,000 sq ft), New Delhi",
          "Residences for Mr. Himanshu Baid (30,000 sq ft), Mr. Sidharth Saraf (35,000 sq ft), and Mr. Anil Bammi (30,000 sq ft)",
          "Residence for Mr. Anubhav Kathuria (50,000 sq ft), 3 Poorvi Marg, New Delhi — ₹110 Cr",
          "Trident guest house (35,000 sq ft), Shanti Niketan, New Delhi — ₹85 Cr",
          "Ajmer Dargah redevelopment — ₹150 Cr",
        ],
      },
    ],
  },
  {
    id: 3,
    role: "Architect",
    company: "Abhimanyu Dalal Architects",
    date: "June 2015 – March 2016",
    summary:
      "I delivered four projects across school, sports, and residential work.",
    highlights: [
      "Contributed to a 40,000 sq ft multi-purpose hall at Scindia Kanya Vidyalaya in Gwalior.",
      "Also worked on campus facilities, a residence development, and a private home in Kanpur.",
    ],
    projects: [
      {
        name: "Selected projects",
        items: [
          "Multi-purpose hall (40,000 sq ft), Scindia Kanya Vidyalaya, Gwalior — ₹10 Cr",
          "Kamla Bhawan and 200 m track with pavilion, S.K.V., Gwalior",
          "Mr. Modi’s residence development and renovation, 36 Amrita Sher-Gil Marg, New Delhi",
          "Residence for Mr. Anurag Lohia (20,000 sq ft), Kanpur",
        ],
      },
    ],
  },
  {
    id: 4,
    role: "Project Architect",
    company: "RRD, C.R. Park",
    date: "August 2014 – June 2015",
    summary:
      "I handled space planning, mood boards, design work, and consultant coordination on four projects ranging from 12,000 to 35,000 sq ft.",
    highlights: [
      "Projects included a healthcare laboratory, two farmhouses, and a residence.",
    ],
    projects: [
      {
        name: "Selected projects",
        items: [
          "Dr. Dang’s Lab (12,000 sq ft), SDA, South Delhi",
          "Farmhouse for Mr. Chopra (25,000 sq ft), Ansal Farms, Delhi",
          "Farmhouse for Mr. Tramboo (35,000 sq ft), Asola, Delhi",
          "Residence for Mr. Gupta (20,000 sq ft), Beri, Delhi",
        ],
      },
    ],
  },
  {
    id: 5,
    role: "Architect",
    company: "Genesis Architect Pvt. Ltd. / a2 dzign inc., Vasant Kunj",
    date: "August 2013 – August 2014",
    summary:
      "I managed planning and design for restaurant, retail, and corporate office projects, and coordinated consultants.",
    highlights: [
      "Coordinated restaurant and retail work with corporate interiors for Azure Hospitality and RK Associates / Comesum.",
    ],
    projects: [
      {
        name: "Selected projects",
        items: [
          "Mamagoto restaurants (2,000 and 2,500 sq ft), Kala Ghoda and Andheri, Mumbai",
          "Roll Mall and Speedy Chow, Sarojini Nagar Market",
          "Corporate office interiors for Azure Hospitality (6,000 sq ft), Okhla, New Delhi",
          "RK Associates / Comesum corporate office interior (18,000 sq ft), Okhla, New Delhi",
        ],
      },
    ],
  },
  {
    id: 6,
    role: "Architect",
    company: "Modus Design Studio",
    date: "January 2013 – August 2013",
    summary:
      "I led space planning for four projects, from early concepts through execution.",
    highlights: [
      "Coordinated consultants and work agencies and managed plan changes to keep projects on schedule.",
    ],
    projects: [
      {
        name: "Selected projects",
        items: [
          "Farmhouse for Mr. Jain, South Delhi",
          "Farmhouse for Mr. Gulati, Satbari, South Delhi",
          "Hotel D2, Aerocity, Gurugram",
          "Residence for Mr. K.P. Singh, New Delhi",
        ],
      },
    ],
  },
  {
    id: 7,
    role: "Junior Architect",
    company: "Design Action Group, Okhla",
    date: "May 2012 – December 2012",
    summary:
      "I prepared proposals, schematic designs, concept plans, working drawings, and presentations, and supported project management and site supervision.",
    highlights: [
      "Worked on multi-function centres, a shopping mall, a residence, and redevelopment plans in Darjeeling and Delhi.",
    ],
    projects: [
      {
        name: "Selected projects",
        items: [
          "Multi-function centre-cum-hotels (15,000 sq ft each), Jabalpur and Gwalior",
          "Shopping mall (20,000 sq ft) and fire-affected shop redevelopment plan, Darjeeling",
          "Residence for Mr. Matthew (15,000 sq ft), Faridabad",
          "Measurement drawings and redevelopment plans, Delhi University North and South campuses",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section section-shell" id="experience" aria-labelledby="experience-title">
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow">Career</p>
          <h2 id="experience-title">Experience</h2>
        </div>
        <p className="section-intro">
          I work across architecture and interiors, from early plans through site delivery.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-entry" key={experience.id} data-reveal>
            <div className="experience-role">
              <p className="experience-date">{experience.date}</p>
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>
            </div>

            <div className="experience-detail">
              <p className="experience-description">{experience.summary}</p>
              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <details className="project-disclosure">
                <summary>
                  <span>Selected projects</span>
                </summary>
                <div className="experience-groups">
                  {experience.projectsNote && (
                    <p className="experience-project-note">{experience.projectsNote}</p>
                  )}
                  {experience.projects.map((group) => (
                    <div className="experience-group" key={group.name}>
                      <h4>{group.name}</h4>
                      <ul className="experience-projects">
                        {group.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
