import { useState } from 'react';
import { Link } from 'wouter';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80" 
            alt="ComponentCraft Logo" 
            className="h-8 w-8 mr-2 rounded"
          />
          <h1 className="text-xl font-bold text-blue-600">ComponentCraft</h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#components" className="hover:text-blue-600">Components</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#reviews" className="hover:text-blue-600">Reviews</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">Login</a>
        </nav>
        
        {/* Mobile Navbar */}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-blue-600" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white shadow-lg text-center z-50`}>
            <a href="#components" className="block py-2 px-4 hover:bg-blue-50">Components</a>
            <a href="#pricing" className="block py-2 px-4 hover:bg-blue-50">Pricing</a>
            <a href="#reviews" className="block py-2 px-4 hover:bg-blue-50">Reviews</a>
            <a href="#faq" className="block py-2 px-4 hover:bg-blue-50">FAQ</a>
            <a href="#" className="block py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 my-2 mx-4 rounded-lg">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
