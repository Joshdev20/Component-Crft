import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg mr-3">
            CC
          </div>
          <h1 className="text-xl font-bold">
            <span className="text-primary">Component</span>
            <span className="text-foreground">Craft</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#components" className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-layout-grid">
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <span>Components</span>
          </a>
          <a href="#pricing" className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-tag">
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
            <span>Pricing</span>
          </a>
          <a href="#reviews" className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Reviews</span>
          </a>
          <a href="#faq" className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-help-circle">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>FAQ</span>
          </a>
          <a href="#" className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors shadow-sm hover:shadow">
            Login
          </a>
        </nav>
        
        {/* Mobile Navbar */}
        <div className="md:hidden">
          <button 
            aria-label="Toggle menu"
            className="text-foreground p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          md:hidden 
          overflow-hidden 
          transition-all 
          duration-300 
          ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}
          bg-white/95 dark:bg-slate-900/95
          backdrop-blur-sm
          shadow-lg
        `}
      >
        <div className="container mx-auto px-4 py-2 space-y-1">
          <a href="#components" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <span>Components</span>
          </a>
          <a href="#pricing" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
            <span>Pricing</span>
          </a>
          <a href="#reviews" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Reviews</span>
          </a>
          <a href="#faq" className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>FAQ</span>
          </a>
          <div className="p-3">
            <a href="#" className="block w-full bg-primary text-white py-3 rounded-full text-center hover:bg-primary/90 transition-colors">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
