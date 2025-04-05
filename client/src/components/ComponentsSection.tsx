import { useRef, useEffect, useState } from 'react';

// Component data - expanded with more free components from different categories
const components = [
  // Buttons category
  {
    id: 'button-variants',
    name: 'Button Variants',
    category: 'buttons',
    preview: (
      <div className="flex flex-wrap gap-2">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Primary
        </button>
        <button className="bg-transparent border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors">
          Outline
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
          Secondary
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
          Danger
        </button>
      </div>
    ),
    code: `<!-- Primary Button -->
<button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
  Primary
</button>

<!-- Outline Button -->
<button class="bg-transparent border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition-colors">
  Outline
</button>

<!-- Secondary Button -->
<button class="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
  Secondary
</button>

<!-- Danger Button -->
<button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
  Danger
</button>`
  },
  
  // Cards category
  {
    id: 'feature-card',
    name: 'Feature Card',
    category: 'cards',
    preview: (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all max-w-xs">
        <div className="bg-primary/10 p-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
          <p className="text-muted-foreground text-sm">Optimized for speed and performance, loading in milliseconds.</p>
        </div>
      </div>
    ),
    code: `<div class="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all max-w-xs">
  <div class="bg-primary/10 p-4 flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <div class="p-5">
    <h3 class="text-lg font-semibold mb-2">Lightning Fast</h3>
    <p class="text-muted-foreground text-sm">Optimized for speed and performance, loading in milliseconds.</p>
  </div>
</div>`
  },
  
  {
    id: 'product-card',
    name: 'Product Card',
    category: 'cards',
    preview: (
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all max-w-xs">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
          alt="Product" 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">Running Shoes</h3>
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">New</span>
          </div>
          <p className="text-muted-foreground text-sm mb-3">Premium sports footwear with cushioned comfort.</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-semibold">$95.99</span>
            <button className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm hover:bg-primary/90 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div class="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all max-w-xs">
  <img 
    src="product-image.jpg" 
    alt="Product" 
    class="w-full h-48 object-cover"
  />
  <div class="p-5">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-lg font-semibold">Running Shoes</h3>
      <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">New</span>
    </div>
    <p class="text-muted-foreground text-sm mb-3">Premium sports footwear with cushioned comfort.</p>
    <div class="flex items-center justify-between mt-4">
      <span class="text-lg font-semibold">$95.99</span>
      <button class="bg-primary text-white px-3 py-1.5 rounded-lg text-sm hover:bg-primary/90 transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>`
  },
  
  // Forms category
  {
    id: 'contact-form',
    name: 'Contact Form',
    category: 'forms',
    preview: (
      <div className="bg-card border border-border rounded-xl p-5 shadow-sm max-w-md">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea id="message" name="message" rows={3} className="w-full p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" required></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">Send Message</button>
        </form>
      </div>
    ),
    code: `<div class="bg-card border border-border rounded-xl p-5 shadow-sm max-w-md">
  <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
  <form action="#" method="POST">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-foreground mb-1">Name</label>
      <input type="text" id="name" name="name" class="w-full p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" required />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-foreground mb-1">Email</label>
      <input type="email" id="email" name="email" class="w-full p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" required />
    </div>
    <div class="mb-4">
      <label for="message" class="block text-sm font-medium text-foreground mb-1">Message</label>
      <textarea id="message" name="message" rows="3" class="w-full p-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" required></textarea>
    </div>
    <button type="submit" class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">Send Message</button>
  </form>
</div>`
  },
  
  // Alerts category
  {
    id: 'alert-components',
    name: 'Alert Components',
    category: 'alerts',
    preview: (
      <div className="flex flex-col space-y-3">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-blue-700 font-medium">Information</p>
              <p className="text-xs text-blue-600">This is an information message.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="text-sm text-green-700 font-medium">Success</p>
              <p className="text-xs text-green-600">Your changes have been saved.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-sm text-red-700 font-medium">Error</p>
              <p className="text-xs text-red-600">There was a problem with your request.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<!-- Info Alert -->
<div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
  <div class="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div>
      <p class="text-sm text-blue-700 font-medium">Information</p>
      <p class="text-xs text-blue-600">This is an information message.</p>
    </div>
  </div>
</div>

<!-- Success Alert -->
<div class="bg-green-50 border-l-4 border-green-500 p-3 rounded">
  <div class="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <p class="text-sm text-green-700 font-medium">Success</p>
      <p class="text-xs text-green-600">Your changes have been saved.</p>
    </div>
  </div>
</div>

<!-- Error Alert -->
<div class="bg-red-50 border-l-4 border-red-500 p-3 rounded">
  <div class="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
    <div>
      <p class="text-sm text-red-700 font-medium">Error</p>
      <p class="text-xs text-red-600">There was a problem with your request.</p>
    </div>
  </div>
</div>`
  },
  
  // Navigation category
  {
    id: 'breadcrumb',
    name: 'Breadcrumb Navigation',
    category: 'navigation',
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-foreground hover:text-primary md:ml-2">Components</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="ml-1 text-sm font-medium text-muted-foreground md:ml-2">Navigation</span>
            </div>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-primary hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" class="ml-1 text-sm font-medium text-foreground hover:text-primary md:ml-2">Components</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="ml-1 text-sm font-medium text-muted-foreground md:ml-2">Navigation</span>
      </div>
    </li>
  </ol>
</nav>`
  },
  
  // Tabs category
  {
    id: 'tab-component',
    name: 'Simple Tabs',
    category: 'tabs',
    preview: (
      <div className="max-w-lg">
        <div className="border-b border-border">
          <nav className="flex -mb-px">
            <button className="py-2 px-4 text-sm font-medium border-b-2 border-primary text-primary">Profile</button>
            <button className="py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground">Settings</button>
            <button className="py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground">Messages</button>
          </nav>
        </div>
        <div className="p-4">
          <p className="text-sm text-foreground">Your profile content would appear here.</p>
        </div>
      </div>
    ),
    code: `<div class="max-w-lg">
  <div class="border-b border-border">
    <nav class="flex -mb-px">
      <button class="py-2 px-4 text-sm font-medium border-b-2 border-primary text-primary">Profile</button>
      <button class="py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground">Settings</button>
      <button class="py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground">Messages</button>
    </nav>
  </div>
  <div class="p-4">
    <p class="text-sm text-foreground">Your profile content would appear here.</p>
  </div>
</div>`
  },
  
  // Avatars category 
  {
    id: 'avatar-group',
    name: 'Avatar Group',
    category: 'avatars',
    preview: (
      <div className="flex -space-x-2">
        <img 
          className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
          src="https://randomuser.me/api/portraits/women/62.jpg" 
          alt="User 1"
        />
        <img 
          className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="User 2"
        />
        <img 
          className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="User 3"
        />
        <img 
          className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
          src="https://randomuser.me/api/portraits/men/46.jpg" 
          alt="User 4"
        />
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-medium border-2 border-white dark:border-slate-800">
          +3
        </div>
      </div>
    ),
    code: `<div class="flex -space-x-2">
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="user1.jpg" 
    alt="User 1"
  />
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="user2.jpg" 
    alt="User 2"
  />
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="user3.jpg" 
    alt="User 3"
  />
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="user4.jpg" 
    alt="User 4"
  />
  <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-medium border-2 border-white dark:border-slate-800">
    +3
  </div>
</div>`
  },
  
  // Dropdowns category
  {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    category: 'dropdowns',
    preview: (
      <div className="relative inline-block text-left">
        <div>
          <button className="inline-flex justify-center w-full rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
            Options
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Example dropdown content (note: it would be hidden in real usage) */}
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
          <div className="py-1">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Edit</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Duplicate</a>
          </div>
          <div className="py-1">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Archive</a>
            <a href="#" className="text-red-600 block px-4 py-2 text-sm hover:bg-gray-100">Delete</a>
          </div>
        </div>
      </div>
    ),
    code: `<div class="relative inline-block text-left">
  <div>
    <button class="inline-flex justify-center w-full rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
      Options
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>

  <!-- Dropdown menu, show/hide based on menu state -->
  <div class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
    <div class="py-1">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Edit</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Duplicate</a>
    </div>
    <div class="py-1">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Archive</a>
      <a href="#" class="text-red-600 block px-4 py-2 text-sm hover:bg-gray-100">Delete</a>
    </div>
  </div>
</div>`
  },
];

const ComponentsSection = () => {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from components
  const categories = Array.from(new Set(components.map(c => c.category)));
  
  // Filter components based on selected category
  const filteredComponents = selectedCategory 
    ? components.filter(c => c.category === selectedCategory)
    : components;

  // Setup copy to clipboard functionality
  useEffect(() => {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Get the nearest code snippet content
        const card = (e.currentTarget as HTMLElement).closest('.component-card');
        if (card) {
          const codeSnippet = card.querySelector('.code-snippet');
          if (codeSnippet && codeSnippet.textContent) {
            navigator.clipboard.writeText(codeSnippet.textContent);
            
            // Update button text
            const button = e.currentTarget as HTMLElement;
            const originalInnerHTML = button.innerHTML;
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Copied!';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
              button.innerHTML = originalInnerHTML;
            }, 2000);
          }
        }
      });
    });
  }, [selectedCategory]); // Re-run when category changes

  return (
    <section id="components" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Free Components</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Copy and paste these ready-to-use Tailwind components into your projects.
            No attribution required, completely free to use in any project.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === null 
                  ? 'bg-primary text-white' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              All Components
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-full capitalize transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredComponents.map(component => (
            <div 
              key={component.id}
              id={component.id} 
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm component-card hover:shadow-md transition-all"
            >
              <div className="p-4 border-b border-border bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{component.name}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize">
                    {component.category}
                  </span>
                </div>
              </div>
              
              <div className="preview p-6 flex justify-center items-center min-h-[180px] bg-background">
                {component.preview}
              </div>
              
              <div className="border-t border-border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Tailwind CSS</span>
                  <button className="copy-btn text-xs text-primary hover:text-primary/80 flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                      />
                    </svg>
                    Copy Code
                  </button>
                </div>
                <pre className="code-snippet mt-2 text-xs bg-gray-800 text-white p-3 rounded-md overflow-auto max-h-[200px]">{component.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
