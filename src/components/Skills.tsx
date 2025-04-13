
import {
  FaHtml5,
  
  FaReact,
  FaJs,
  FaCode,
} from "react-icons/fa";

const skills = [
  {
    title: "HTML & CSS",
    icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    info: "Structure and style your websites beautifully.",
  },
  {
    title: "React.js",
    icon: <FaReact className="text-blue-500 text-5xl" />,
    info: "Build powerful UIs using components.",
  },
  {
    title: "C++",
    icon: <FaCode className="text-purple-600 text-5xl" />,
    info: "OOP and problem-solving foundation.",
  },
  {
    title: "JavaScript",
    icon: <FaJs className="text-yellow-500 text-5xl" />,
    info: "Interactive logic in web apps.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-950 transition-all"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl transform hover:rotate-y-6 hover:scale-105 transition-all duration-500 p-6 text-center"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {skill.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
