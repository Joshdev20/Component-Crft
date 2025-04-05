const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="UI Components Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Craft Stunning UI Faster</h2>
        <p className="text-lg mb-8">Explore free and premium Tailwind components built for speed, quality, and consistency.</p>
        <div className="flex justify-center space-x-4">
          <a href="#components" className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">Browse Components</a>
          <a href="#pricing" className="bg-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Get Pro Access</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
