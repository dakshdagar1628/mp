const education = [
  {
    degree: "Master’s in Architecture",
    distinction: "First Class with Distinction",
    institution: "Lingaya’s Vidyapeeth, Faridabad",
    year: "2016–2018",
  },
  {
    degree: "Bachelor’s in Architecture",
    institution: "Lovely Professional University, Punjab",
    year: "2007–2012",
  },
];

const capabilityGroups = [
  {
    title: "Interior & experience design",
    items: [
      "Interior design review",
      "Customer and physical experience design",
      "Biophilic and furniture design",
      "Sensory standards: lighting, music, fragrance",
      "Art-in-architecture strategy",
      "Common-area and amenity layouts",
      "Wayfinding and visitor journey mapping",
      "Hospitality design and protocols",
      "Space planning and content programming",
      "Materials, colour, mood boards and concepts",
    ],
  },
  {
    title: "Leadership & delivery",
    items: [
      "Design and team leadership",
      "Strategic decision-making",
      "In-house capability building",
      "Internal and outsourced work planning",
      "Client communication",
      "Consultant and vendor coordination",
      "Project planning and site coordination",
      "Detailed drawings and specifications",
      "Design presentations",
    ],
  },
  {
    title: "Technical",
    items: ["AutoCAD", "Revit", "SketchUp", "Adobe Photoshop"],
  },
];

export default function EducationSkills() {
  return (
    <section className="profile-section section-shell" id="about" aria-labelledby="profile-title">
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow">Practice</p>
          <h2 id="profile-title">Expertise & education</h2>
        </div>
      </div>

      <div className="profile-grid">
        <section className="education-column" aria-labelledby="education-heading" data-reveal>
          <h3 className="subsection-title" id="education-heading">Education</h3>
          <ol className="education-list">
            {education.map((item) => (
              <li className="education-item" key={item.degree}>
                <div>
                  <h4>{item.degree}</h4>
                  {item.distinction && <p className="education-distinction">{item.distinction}</p>}
                  <p>{item.institution}</p>
                </div>
                <span className="education-year">{item.year}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="capability-column" aria-labelledby="capability-heading" data-reveal>
          <h3 className="subsection-title" id="capability-heading">Capabilities</h3>
          <div className="capability-groups">
            {capabilityGroups.map((group, index) => (
              <div className="capability-group" key={group.title}>
                <h4><span>0{index + 1}</span>{group.title}</h4>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
