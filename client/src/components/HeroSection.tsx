const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-900 text-white py-24 relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Build Beautiful UIs</span>
            <span className="block mt-2 bg-gradient-to-r from-pink-400 to-indigo-300 text-transparent bg-clip-text">In Record Time</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100 max-w-xl">Discover our collection of modern Tailwind components designed for rapid development and stunning interfaces.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#components" className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Components
            </a>
            <a href="#pricing" className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-purple-900 transition-all">
              Get Pro Access
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative bg-gradient-to-tr from-purple-200/10 to-white/10 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="h-8 w-8 mb-3 rounded-lg bg-purple-400/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-1">100+ Components</h3>
                <p className="text-gray-200 text-sm">Modular building blocks for your web projects</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="h-8 w-8 mb-3 rounded-lg bg-indigo-400/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Dark Mode</h3>
                <p className="text-gray-200 text-sm">Perfect light & dark variants out of the box</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="h-8 w-8 mb-3 rounded-lg bg-pink-400/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Copy & Paste</h3>
                <p className="text-gray-200 text-sm">Simple integration with any framework</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="h-8 w-8 mb-3 rounded-lg bg-violet-400/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Customizable</h3>
                <p className="text-gray-200 text-sm">Easily adapt to your brand identity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
