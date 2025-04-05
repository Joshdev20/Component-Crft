const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-8">Choose the Perfect Plan for You</h3>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">No matter your need, we have a plan that fits. Get started with free access or unlock premium features for your projects.</p>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="mb-2">
              <img 
                src="https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
                alt="Free Plan" 
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-semibold text-blue-600 mb-4">Free Plan</h4>
            <p className="text-lg text-gray-600 mb-6">Start using our library with a collection of essential components for free!</p>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access to basic components
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Community support
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Monthly updates
              </li>
            </ul>
            <div className="text-3xl font-bold text-gray-800 mb-4">Free</div>
            <a href="#signup" className="block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">Get Started</a>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="mb-2">
              <img 
                src="https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
                alt="Premium Plan" 
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-semibold mb-4">Premium Plan</h4>
            <p className="text-lg mb-6">Unlock over 100+ components and premium features for your professional projects.</p>
            <ul className="text-left mb-6 space-y-2">
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access to all components
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Weekly updates
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced features
              </li>
            </ul>
            <div className="text-3xl font-bold mb-4">$29/month</div>
            <a href="#signup" className="block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">Sign Up</a>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 border-2 border-blue-600">
            <div className="mb-2">
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1" 
                alt="Enterprise Plan" 
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-semibold text-blue-600 mb-4">Enterprise Plan</h4>
            <p className="text-lg text-gray-600 mb-6">For large teams that need custom components and dedicated support.</p>
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                All premium features
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom component development
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-green-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support and SLA
              </li>
            </ul>
            <div className="text-3xl font-bold text-gray-800 mb-4">Contact Us</div>
            <a href="#contact" className="block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
