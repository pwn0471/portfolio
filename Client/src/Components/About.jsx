const About = () => {
  return (
    <section id="about" className="px-6 py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left */}
        <div>
          <img
            src="/profile.jpg"
            alt="Pawan Kumar"
            className="w-64 h-64 rounded-full object-cover grayscale border border-gray-700"
          />
        </div>

        {/* Right */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">
            About Me
          </h2>

          <p>
            I’m a passionate software developer with a strong focus on web
            development using the MERN stack.
          </p>

          <p>
            Alongside web development, I have experience with
            Java, Python, C, and Data Structures & Algorithms, allowing me
            to write optimized and maintainable code.
          </p>

          <p className="text-gray-400">
            I enjoy learning new technologies, solving problems, and
            continuously improving my skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
