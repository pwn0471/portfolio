import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import {
  SiC,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiIntellijidea,
} from "react-icons/si";

/* ===================== DATA ===================== */

const skillGroups = [
  {
    category: "Languages",
    color: "emerald",
    skills: [
      { name: "C", desc: "Low-level programming & fundamentals", icon: SiC },
      { name: "Java", desc: "OOP, DSA & backend foundations", icon: FaJava },
      { name: "Python", desc: "Scripting, logic & problem solving", icon: SiPython },
    ],
  },
  {
    category: "Frontend",
    color: "cyan",
    skills: [
      { name: "HTML5", desc: "Semantic markup & accessibility", icon: SiHtml5 },
      { name: "CSS3", desc: "Layouts & responsiveness", icon: SiCss3 },
      { name: "Tailwind CSS", desc: "Utility-first modern UI", icon: SiTailwindcss },
      { name: "React", desc: "Component-based frontend", icon: SiReact },
    ],
  },
  {
    category: "Backend",
    color: "violet",
    skills: [
      { name: "Node.js", desc: "Server-side JavaScript", icon: SiNodedotjs },
      { name: "Express.js", desc: "REST APIs & backend logic", icon: SiExpress },
    ],
  },
  {
    category: "Databases",
    color: "amber",
    skills: [
      { name: "MongoDB", desc: "NoSQL database", icon: SiMongodb },
      { name: "MySQL", desc: "Relational database", icon: SiMysql },
    ],
  },
  {
    category: "Tools",
    color: "rose",
    skills: [
      { name: "Git", desc: "Version control", icon: SiGit },
      { name: "GitHub", desc: "Collaboration platform", icon: SiGithub },
      { name: "VS Code", desc: "Code editor", icon: VscCode },
      { name: "IntelliJ IDEA", desc: "Java IDE", icon: SiIntellijidea },
    ],
  },
];

/* ===================== COMPONENT ===================== */

const Skills = () => {
  try {
    return (
      <section id="skills" className="px-6 py-30  pt-32 bg-black">
        <div className="max-w-6xl mx-auto">

          <div className="border-l border-white/30 pl-4 mb-20">
            <h2 className="text-xl text-white font-medium max-w-xl">
             Tools & Technologies I Work With
            </h2>
          </div>

          {/* Categories */}
          <div className="space-y-24">
            {skillGroups.map((group) => (
              <div key={group.category}>

                {/* Category title */}
                <h3
                  className={`
                    text-sm uppercase tracking-widest mb-10
                    ${group.color === "emerald" && "text-emerald-400"}
                    ${group.color === "cyan" && "text-cyan-400"}
                    ${group.color === "violet" && "text-violet-400"}
                    ${group.color === "amber" && "text-amber-400"}
                    ${group.color === "rose" && "text-rose-400"}
                  `}
                >
                  {group.category}
                </h3>

                {/* MOBILE SCROLL + DESKTOP GRID */}
                <div
                  className="
                    flex gap-6 overflow-x-auto pb-4
                    snap-x snap-mandatory
                    md:grid md:grid-cols-2 lg:grid-cols-4
                    md:overflow-visible
                  "
                >
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className={`
                          snap-start min-w-[220px] md:min-w-0
                          group
                          bg-neutral-900
                          border border-white/10
                          rounded-xl
                          p-6
                          transition-all duration-300
                          shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                          hover:-translate-y-1
                          ${
                            group.color === "emerald" &&
                            "hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]"
                          }
                          ${
                            group.color === "cyan" &&
                            "hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                          }
                          ${
                            group.color === "violet" &&
                            "hover:border-violet-400/60 hover:shadow-[0_0_35px_rgba(167,139,250,0.18)]"
                          }
                          ${
                            group.color === "amber" &&
                            "hover:border-amber-400/60 hover:shadow-[0_0_35px_rgba(251,191,36,0.18)]"
                          }
                          ${
                            group.color === "rose" &&
                            "hover:border-rose-400/60 hover:shadow-[0_0_35px_rgba(251,113,133,0.18)]"
                          }
                        `}
                      >
                        {/* ICON */}
                        <Icon
                          size={44}
                          className={`
                            mb-4 opacity-80 transition
                            group-hover:opacity-100
                            ${group.color === "emerald" && "text-emerald-400"}
                            ${group.color === "cyan" && "text-cyan-400"}
                            ${group.color === "violet" && "text-violet-400"}
                            ${group.color === "amber" && "text-amber-400"}
                            ${group.color === "rose" && "text-rose-400"}
                          `}
                        />

                        <h4 className="text-white text-lg font-medium mb-1">
                          {skill.name}
                        </h4>

                        <p className="text-sm text-gray-400">
                          {skill.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    );
  } catch (error) {
    console.error("Skills section render error:", error);
    return (
      <section className="px-6 py-32 bg-black text-center text-gray-400">
        Skills section unavailable
      </section>
    );
  }
};

export default Skills;
