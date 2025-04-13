// src/components/About.tsx

const About = () => {
    return (
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
          
          {/* Single About Container */}
          <div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Frontend Developer | Beginner | Computer Engineering Student
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            I am Siddhi Kishor Patil  a computer engineering student at R.C.Patel institute of technology shirpur. Currently pursuing degree in SY b.tech, also have a strong interest in software development, experienced in skills such as html css react.js, SQL,  and I am eager to apply my skills in new technologies and in dyanamic challenging projects.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  