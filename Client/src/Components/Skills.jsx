// ✅ Import images from src/assets
import cImg from "../assets/cImg.jpg";
import javaImg from "../assets/javaImg.png";
import pythonImg from "../assets/pythonImg.png";
import htmlcssImg from "../assets/htmlcssImg.png";
import tailImg from "../assets/tailImg.png";
import reactImg from "../assets/reactImg.jpg";
import nodeExpressImg from "../assets/nodeExpressImg.png";
import mongodbImg from "../assets/mongodbImg.png";
import mysqlImg from "../assets/mysqlImg.png";
import gitImg from "../assets/gitImg.png";
import vscodeImg from "../assets/vscodeImg.png";
import intellijImg from "../assets/intellijImg.png";

const skills = [
  { title: "C", subtitle: "Low-level programming & fundamentals", image: cImg },
  { title: "Java", subtitle: "OOP, DSA & backend foundations", image: javaImg },
  { title: "Python", subtitle: "Scripting, logic & problem solving", image: pythonImg },
  { title: "HTML & CSS", subtitle: "Semantic markup & responsive layouts", image: htmlcssImg },
  { title: "Tailwind CSS", subtitle: "Utility-first modern UI styling", image: tailImg },
  { title: "React", subtitle: "Component-based frontend development", image: reactImg },
  { title: "Node & Express", subtitle: "Scalable backend & REST APIs", image: nodeExpressImg },
  { title: "MongoDB", subtitle: "NoSQL database & data modeling", image: mongodbImg },
  { title: "MySQL", subtitle: "Relational database & queries", image: mysqlImg },
  { title: "Git & GitHub", subtitle: "Version control & collaboration", image: gitImg },
  { title: "VS Code", subtitle: "Primary development environment", image: vscodeImg },
  { title: "IntelliJ IDEA", subtitle: "Java-focused IDE & debugging", image: intellijImg },
];

const Skills = () => {
  try {
    return (
      <section id="skills" className="px-6 py-32 bg-black">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <p className="text-xs tracking-[0.35em] text-gray-500 mb-6">
            SKILLS
          </p>

          <h2 className="text-xl text-white font-medium mb-16 max-w-xl">
            Tools & Technologies I Work With
          </h2>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="relative h-56 rounded-lg overflow-hidden group border border-white/10"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${skill.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-lg text-white font-semibold mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-snug">
                    {skill.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  } catch (error) {
    console.error("Skills section render error:", error);
    return null;
  }
};

export default Skills;
