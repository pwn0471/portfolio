import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; 
import profile from "../assets/profile.jpg";

const About = () => {
  try {
    return (
      <section id="about" className="px-12 py-26 bg-black">
        <div className="
          max-w-6xl mx-auto
          grid
          md:grid-cols-[auto_1fr]
          gap-10
          items-start
        ">

          {/* LEFT — IMAGE + SOCIALS */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center">

              {/* Profile Image */}
              <div className="w-60 h-60 md:w-64 md:h-64 rounded-full overflow-hidden border border-gray-700 mb-4">
                <img
                  src={profile}
                  alt="Pawan Kumar"
                  className="w-full h-full object-contain scale-99 grayscale"
                  onError={(e) => {
                    try {
                      e.target.style.display = "none";
                      console.error("Profile image failed to load");
                    } catch (err) {
                      console.error("Image fallback error:", err);
                    }
                  }}
                />
              </div>

              {/* Social Icons */}
              <div className="flex space-x-5 text-gray-400 text-lg">
                <a href="https://www.instagram.com/pwnkumar87?igsh=MTZseG90cWx0NXhkNA==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  <FaInstagram />
                </a>
                <a href="https://x.com/pawankumar0471" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  <FaTwitter />
                </a>
                <a href="https://github.com/pwn0471" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pawan-kumar-5ba309297/" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  <FaLinkedin />
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="space-y-3 text-gray-400 leading-relaxed">

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Hey, I’m Pawan Kumar.
            </h2>

            <p>
             I’m a third-year B.Tech (Information Technology) student focused on building clean, 
             scalable, <br />and user-centric web applications.
            </p>

            <p>
              Focused on modern web development with the MERN stack, building intuitive user interfaces. <br />
              Experienced in designing efficient, scalable backend systems.

            </p>

            <p>
              Alongside web development, I have a solid foundation in
              <span className="text-white">
                {" "}Java, Python, C, and Data Structures & Algorithms
              </span>,
               <br /> which helps me write optimized, maintainable, and well-structured
              code.
            </p>

            <p className="text-white font-medium">
              Focused on continuous learning and building scalable, real-world applications.
            </p>

          </div>

        </div>
      </section>
    );
  } catch (error) {
    console.error("About section render error:", error);

    return (
      <section className="px-6 py-32 bg-black text-white text-center">
        <p>About section unavailable</p>
      </section>
    );
  }
};

export default About;
