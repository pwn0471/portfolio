const Hero = () => {
  try {
    return (
      <section
        id="home"
        className="min-h-[70vh] flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Heading */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-6xl
              font-bold
              leading-tight
              text-white
              mb-6
            "
          >
            Think Clearly. Code
            <br />
            Simply. Build Better.
          </h1>

          {/* Supporting Text */}
          <p
            className="
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              text-gray-400
              leading-relaxed
            "
          >
            Exploring modern technology, software engineering, and development
            practices to showcase clean code, scalable systems, and real-world
            problem solving.
          </p>

        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero section render error:", error);

    // Fallback UI (failsafe)
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-black text-white">
        <p className="text-lg">Welcome</p>
      </section>
    );
  }
};

export default Hero;
