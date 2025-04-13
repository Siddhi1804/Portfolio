import  { useEffect, useRef, useState } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Overburdened teacher and need for personalized Feedback",
      description: "An overburdened teacher sits at a cluttered desk with stacks of papers and a tired expression. In contrast, a student nearby looks confused, holding an assignment labeled “No Feedback.” A thought bubble above the teacher reads, Too many students, not enough time.” A caption below says: “The need for personalized feedback in overcrowded classrooms.",
      image: project1,
      link: "   ",
    },
    {
      title: "Akatsuki Web ",
      description: "website using React for 1,000+ members, featuring dynamic profiles, event galleries, and package details for an interactive, responsive experience.",
      image: project2,
      link: "https://github.com/NehaMagare24/React-Cohort-Project",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleProjects.includes(index)) {
            setVisibleProjects((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );

    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute("data-index", index.toString());
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);

  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition-all duration-700 rounded-xl overflow-hidden shadow-2xl hover:scale-105 group ${
              visibleProjects.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
              className="relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
