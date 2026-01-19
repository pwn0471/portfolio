import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import weather from "../assets/weather.png";
import music from "../assets/music.png";
import port from "../assets/port.jpeg";

const Projects = () => {
  const sectionRef = useRef(null);

  /* Scroll animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        px-6 py-32 bg-black
        opacity-0 translate-y-10
        transition-all duration-700
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-xl text-white font-medium mb-24 max-w-xl">
          Selected Work & Experiments
        </h2>

        <div className="space-y-28">

          {/* ===== MINOR PROJECTS ===== */}
          <ProjectGroup title="Minor Projects">
            <ProjectCard
              number="01"
              title="Weather App"
              tags={["React", "API", "Frontend"]}
              desc="Real-time weather app with clean UI and responsive layout."
              image={weather}
              glow="rgba(59,130,246,0.28)"   // blue
              github="#"
              live="#"
            />

            <ProjectCard
              number="02"
              title="Music Player"
              tags={["JavaScript", "UI", "Frontend"]}
              desc="Modern music player with smooth controls and playlist UI."
              image={music}
              glow="rgba(168,85,247,0.28)" // purple
              github="#"
              live="#"
            />
          </ProjectGroup>

          {/* ===== MAJOR PROJECT ===== */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
              Major Project
            </h3>

            <div className="max-w-md">
              <ProjectCard
                number="03"
                title="Portfolio Website"
                tags={["React", "Tailwind", "Personal"]}
                desc="Editorial-style personal portfolio showcasing skills and projects."
                image={port}
                glow="rgba(16,185,129,0.28)" // emerald
                github="#"
                live="#"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ================= GROUP ================= */

const ProjectGroup = ({ title, children }) => (
  <div>
    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
      {title}
    </h3>

    <div
      className="
        flex gap-6 overflow-x-auto pb-4
        snap-x snap-mandatory
        md:grid md:grid-cols-3
        md:overflow-visible
      "
    >
      {children}
    </div>
  </div>
);

/* ================= CARD ================= */

const ProjectCard = ({
  number,
  title,
  tags,
  desc,
  image,
  glow,
  github,
  live,
}) => {
  return (
    <div className="snap-start min-w-[240px] md:min-w-0">
      <div
        className="
          bg-neutral-900
          border border-white/10
          rounded-xl
          p-4
          transition-all duration-300
          hover:-translate-y-1
          hover:border-white/30
        "
      >
        {/* IMAGE WITH COLORED GLOW */}
        <div className="relative w-full h-36 mb-5 flex items-center justify-center rounded-lg overflow-hidden">

          {/* Glow background */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${glow}, rgba(0,0,0,0.9))`,
            }}
          />

          {/* Image */}
          <img
            src={image}
            alt={title}
            className="
              relative z-10
              max-h-28
              object-contain
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>

        {/* NUMBER */}
        <p className="text-xs text-gray-500 tracking-widest mb-1">
          {number}
        </p>

        {/* TITLE */}
        <h4 className="text-white text-sm font-medium mb-2">
          {title}
        </h4>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                text-[11px]
                px-2 py-0.5
                border border-white/10
                rounded-full
                text-gray-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {desc}
        </p>

        {/* LINKS */}
        <div className="flex gap-5 text-sm">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
