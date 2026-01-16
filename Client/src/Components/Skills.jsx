const skills = [
  "C",
  "Java",
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Python",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-32 bg-neutral-950"
    >
      <div className="max-w-3xl mx-auto">

        <p className="text-xs tracking-[0.35em] text-gray-500 mb-6">
          SKILLS
        </p>

        <h2 className="text-xl text-white font-medium mb-10">
          Tools & Technologies I Work With
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                text-sm
                text-gray-400
                border border-gray-700
                px-4 py-2
                hover:text-white
                hover:border-gray-500
                transition-colors
                duration-200
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
