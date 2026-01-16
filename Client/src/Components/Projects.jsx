const Projects = () => {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12">Projects</h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium">Weather App</h3>
            <p className="text-gray-400">
              React-based weather application using REST APIs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">MERN Blog Platform</h3>
            <p className="text-gray-400">
              Full-stack blog app with authentication and CRUD features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
