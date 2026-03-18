import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Prestigious Residences",
      category: "Residential Architecture",
      desc: "High-end bespoke villas & farmhouses across Delhi, Gurugram, and Raipur ranging up to 40,000 Sq.Ft.",
      image: "/prestigious-residences.jpg",
    },
    {
      id: 2,
      title: "Mayo College Ajmer",
      category: "Educational Campus",
      desc: "Comprehensive redevelopment including a 50,000 Sq.Ft dining hall and dynamic open amphitheatre across 300 acres.",
      image: "/mayo-college.jpg",
    },
    {
      id: 3,
      title: "KLM Sugar Mills",
      category: "Commercial & Office Spaces",
      desc: "State-of-the-art 22,000 Sq.Ft office building located in Gomati Nagar, Lucknow with intricate interiors.",
      image: "/klm-sugar-mills.jpg",
    },
    {
      id: 4,
      title: "Mamagoto Restaurants",
      category: "Hospitality Interiors",
      desc: "Contemporary, engaging interior planning and design for multiple popular dining locations in Mumbai.",
      image: "/mamagoto.png",
    },
  ];

  return (
    <section className="relative z-20 py-16 md:py-32 px-5 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-5xl font-semibold mb-8 md:mb-16 tracking-tight">
          Selected Work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-end p-5 md:p-8 h-60 md:h-80 rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              {/* Optional Background Image */}
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-0"
                />
              )}

              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/50 to-transparent z-10" />
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none z-10" />

              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-medium text-zinc-400 mb-2">
                  {project.category}
                </p>
                <h4 className="text-lg md:text-2xl font-bold mb-2">
                  {project.title}
                </h4>
                <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
