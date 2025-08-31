const MissionVision = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-black-800 mb-10">
        Our Mission & Vision
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Mission */}
        <div className="bg-white shadow-lg p-8 rounded-2xl 
                        transition-all duration-500 ease-in-out
                        hover:bg-black hover:text-white hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="leading-relaxed">
            To create premium streetwear that inspires confidence, creativity,
            and bold self-expression. We aim to combine comfort, durability,
            and modern design for individuals who want to stand out.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg p-8 rounded-2xl 
                        transition-all duration-500 ease-in-out
                        hover:bg-black hover:text-white hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="leading-relaxed">
            To become a global streetwear brand recognized for innovation,
            sustainability, and empowering communities worldwide to chase their
            dreams fearlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
