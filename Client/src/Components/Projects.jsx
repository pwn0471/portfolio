import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import weather from "../assets/weather.png";
import music from "../assets/music.png";
import port from "../assets/port.jpeg";

const Projects = () => {
  const sectionRef = useRef(null);

  /* Scroll animation */
  useEffect(() => {
    try {
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
    } catch (err) {
      console.error("Project animation error:", err);
    }
  }, []);

  try {
    return (
      <section
        id="projects"
        ref={sectionRef}
        className="
          px-6 py-40 bg-black
          opacity-0 translate-y-10
          transition-all duration-700
        "
      >
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <p className="text-xs tracking-[0.35em] text-gray-500 mb-8">
            PROJECTS
          </p>

          <h2 className="text-xl text-white font-medium mb-32 max-w-xl">
            Selected Work & Experiments
          </h2>

          <div className="space-y-32">

            {/* ================= MINOR PROJECTS ================= */}
            <ProjectGroup title="Minor Projects">
              <ProjectCard
                number="01"
                title="Weather App"
                desc="A responsive weather application fetching real-time data via APIs, focused on clean UI and usability."
                tech="React · API · CSS"
                image={weather}
                github="#"
                live="#"
              />

              <ProjectCard
                number="02"
                title="Music Player"
                desc="A modern music player with play controls, playlist UI, and smooth interactions."
                tech="JavaScript · HTML · CSS"
                image={music}
                github="#"
                live="#"
              />
            </ProjectGroup>

            {/* ================= MAJOR PROJECT ================= */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-12">
                Major Project
              </h3>

              <div className="max-w-3xl">
                <ProjectCard
                  featured
                  number="03"
                  title="Personal Portfolio Website"
                  desc="An editorial-style portfolio inspired by minimalist design. Built to showcase skills, projects, and personal branding."
                  tech="React · Tailwind CSS · Responsive Design"
                  image={port}
                  github="#"
                  live="#"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Projects section render error:", error);
    return null;
  }
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
        md:grid md:grid-cols-2
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
  desc,
  tech,
  image,
  github,
  live,
  featured,
}) => {
  return (
    <div
      className={`
        group
        relative
        snap-start
        min-w-[260px]
        md:min-w-0
        bg-neutral-900
        border border-white/10
        rounded-xl
        p-6
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/30
        ${featured ? "hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]" : ""}
      `}
    >
      {/* Hover image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          opacity-0
          scale-105
          transition-all duration-500
          group-hover:opacity-20
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Project number */}
        <p className="text-xs text-gray-500 tracking-widest mb-4">
          {number}
        </p>

        <h4 className={`text-white font-medium mb-3 ${featured ? "text-lg" : "text-base"}`}>
          {title}
        </h4>

        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {desc}
        </p>

        <p className="text-xs text-gray-500 mb-6">
          {tech}
        </p>

        {/* Links (hover only) */}
        <div
          className="
            flex gap-6
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
