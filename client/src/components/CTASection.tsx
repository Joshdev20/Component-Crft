const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4">Unlock 100+ Premium Components</h3>
        <p className="mb-8 max-w-2xl mx-auto">Upgrade now and access exclusive layouts, dashboards, and advanced UI kits to accelerate your development workflow.</p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <a href="#pricing" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-2 sm:mb-0">View Pricing</a>
          <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
