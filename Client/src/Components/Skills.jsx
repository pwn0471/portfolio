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
      { name: "C", level: 75, desc: "Low-level programming & fundamentals", icon: SiC },
      { name: "Java", level: 80, desc: "OOP, DSA & backend foundations", icon: FaJava },
      { name: "Python", level: 70, desc: "Scripting, logic & problem solving", icon: SiPython },
    ],
  },
  {
    category: "Frontend",
    color: "cyan",
    skills: [
      { name: "HTML5", level: 85, desc: "Semantic markup & accessibility", icon: SiHtml5 },
      { name: "CSS3", level: 80, desc: "Layouts & responsiveness", icon: SiCss3 },
      { name: "Tailwind CSS", level: 90, desc: "Utility-first modern UI", icon: SiTailwindcss },
      { name: "React", level: 85, desc: "Component-based frontend", icon: SiReact },
    ],
  },
  {
    category: "Backend",
    color: "violet",
    skills: [
      { name: "Node.js", level: 75, desc: "Server-side JavaScript", icon: SiNodedotjs },
      { name: "Express.js", level: 70, desc: "REST APIs & backend logic", icon: SiExpress },
    ],
  },
  {
    category: "Databases",
    color: "amber",
    skills: [
      { name: "MongoDB", level: 70, desc: "NoSQL database", icon: SiMongodb },
      { name: "MySQL", level: 75, desc: "Relational database", icon: SiMysql },
    ],
  },
  {
    category: "Tools",
    color: "rose",
    skills: [
      { name: "Git", level: 85, desc: "Version control", icon: SiGit },
      { name: "GitHub", level: 80, desc: "Collaboration platform", icon: SiGithub },
      { name: "VS Code", level: 90, desc: "Code editor", icon: VscCode },
      { name: "IntelliJ IDEA", level: 70, desc: "Java IDE", icon: SiIntellijidea },
    ],
  },
];

/* ===================== COMPONENT ===================== */

const Skills = () => {
  try {
    return (
      <section id="skills" className="px-6 py-32 bg-black">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl text-white font-medium mb-24 max-w-xl underline decoration-white decoration-opacity-20">
            Tools & Technologies I Work With
          </h2>

          {/* Categories */}
          <div className="space-y-24">
            {skillGroups.map((group) => (
              <div key={group.category}>

                {/* Category title */}
                <h3
                  className={`
                    text-sm uppercase tracking-widest mb-10
                    ${
                      group.color === "emerald" && "text-emerald-400"
                    }
                    ${
                      group.color === "cyan" && "text-cyan-400"
                    }
                    ${
                      group.color === "violet" && "text-violet-400"
                    }
                    ${
                      group.color === "amber" && "text-amber-400"
                    }
                    ${
                      group.color === "rose" && "text-rose-400"
                    }
                  `}
                >
                  {group.category}
                </h3>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className={`
                          group
                          bg-neutral-900
                          border border-white/10
                          rounded-xl
                          p-6
                          transition-all duration-300
                          hover:-translate-y-1
                          ${
                            group.color === "emerald" && "hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                          }
                          ${
                            group.color === "cyan" && "hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                          }
                          ${
                            group.color === "violet" && "hover:border-violet-400/60 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]"
                          }
                          ${
                            group.color === "amber" && "hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]"
                          }
                          ${
                            group.color === "rose" && "hover:border-rose-400/60 hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]"
                          }
                        `}
                      >
                        {/* ICON */}
                        <Icon
                          size={44}
                          className={`
                            mb-4 opacity-80 transition
                            group-hover:opacity-100
                            ${
                              group.color === "emerald" && "text-emerald-400"
                            }
                            ${
                              group.color === "cyan" && "text-cyan-400"
                            }
                            ${
                              group.color === "violet" && "text-violet-400"
                            }
                            ${
                              group.color === "amber" && "text-amber-400"
                            }
                            ${
                              group.color === "rose" && "text-rose-400"
                            }
                          `}
                        />

                        <h4 className="text-white text-lg font-medium mb-1">
                          {skill.name}
                        </h4>

                        <p className="text-sm text-gray-400 mb-4">
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
