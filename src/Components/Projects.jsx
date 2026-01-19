import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import weat from "../assets/weat.jpg";
import mus from "../assets/mus.jpg";
import port2 from "../assets/port2.png";
import spot from "../assets/spot.webp"

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
        px-6 pt-16 pb-32 bg-black
        opacity-0 translate-y-10
        transition-all duration-700
      "
    >
      <div className="max-w-6xl mx-auto">

        <div className="border-l border-white/30 pl-4 mb-20">
          <h2 className="text-xl text-white font-medium max-w-xl">
           Projects & Professional Experience
          </h2>
        </div>

        <div className="space-y-28">

          {/* ===== MINOR PROJECTS ===== */}
          <ProjectGroup title="Minor Projects">
            <ProjectCard
              number="01"
              title="Spotify Clone"
              tags={["HTML", "CSS", "Javascript"]}
              desc="A clean, Spotify-inspired interface exploring modern frontend design patterns."
              image={spot}
              glow="rgba(59,130,246,0.28)"   // blue
              github="https://github.com/pwn0471/Spotify-Clone"
              live="https://pwn0471.github.io/Spotify-Clone/"
            />
            <ProjectCard
              number="02"
              title="Weather App"
              tags={["HTML", "CSS", "Javascript"]}
              desc="Real-time weather app with clean UI and responsive layout."
              image={weat}
              glow="rgba(59,130,246,0.28)"   // blue
              github="https://github.com/pwn0471/Weather-App"
              live="https://pwn0471.github.io/Weather-App/"
            />

            <ProjectCard
              number="03"
              title="Music Player"
              tags={["JavaScript", "CSS", "HTML"]}
              desc="Modern music player with smooth controls and playlist UI."
              image={mus}
              glow="rgba(168,85,247,0.28)" // purple
              github="https://github.com/pwn0471/Music-Player"
              live=" https://pwn0471.github.io/Music-Player/"
            />
          </ProjectGroup>

          {/* ===== MAJOR PROJECT ===== */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-10">
              Major Project
            </h3>

            <div className="max-w-md ">
              <ProjectCard
                number="04"
                title="Portfolio Website"
                tags={["React", "Tailwind", "Personal"]}
                desc="A carefully crafted personal site built to reflect my learning, projects, and growth as a developer."
                image={port2}
                glow="rgba(16,185,129,0.28)" // emerald
                github="https://github.com/pwn0471/portfolio"
                live=" https://pwn0471.github.io/portfolio/"
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
    <h3 className="text-m uppercase tracking-widest text-gray-400 mb-12">
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
      background: `radial-gradient(circle at center, ${glow}, rgba(0,0,0,0.92))`,
    }}
  />

  {/* Subtle inner vignette */}
  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />


   {/* Image */}
    <img
     src={image}
     alt={title}
      className="
      relative z-10
      max-h-30
      w-auto
      object-contain
      mix-blend-screen
      opacity-90
      transition-transform duration-500
      hover:scale-105
      "
      onError={(e) => {
       try {
        e.currentTarget.style.display = "none";
        console.error("Project image failed:", title);
       } catch {}
      }}
   />
        </div>

        {/* NUMBER */}
        <p className="text-xs text-gray-500 tracking-widest mb-1">
          {number}
        </p>

        {/* TITLE */}
        <h4 className="text-white text-m font-medium mb-2">
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
        <p className="text-m text-gray-400 leading-relaxed mb-4">
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
