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
  
  {
    id: 'button-with-icon',
    name: 'Buttons with Icons',
    category: 'buttons',
    preview: (
      <div className="flex flex-wrap gap-3">
        <button className="bg-primary text-white px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-primary/90 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Item</span>
        </button>
        
        <button className="bg-green-500 text-white px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-green-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Confirm</span>
        </button>
        
        <button className="border border-gray-300 px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span>Upload</span>
        </button>
      </div>
    ),
    code: `<!-- Add Button -->
<button class="bg-primary text-white px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-primary/90 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
  </svg>
  <span>Add Item</span>
</button>

<!-- Confirm Button -->
<button class="bg-green-500 text-white px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-green-600 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
  </svg>
  <span>Confirm</span>
</button>

<!-- Upload Button -->
<button class="border border-gray-300 px-4 py-2 rounded-md inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
  <span>Upload</span>
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
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
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
    id: 'tab-component-old',
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
  
  // Tooltips category
  {
    id: 'tooltip-component-old',
    name: 'Simple Tooltip',
    category: 'tooltips',
    preview: (
      <div className="flex items-center justify-center py-8">
        <div className="relative inline-block group">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Hover me
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="text-center">This is a tooltip with helpful information.</div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full border-solid border-t-gray-900 border-t-4 border-x-transparent border-x-4 border-b-0"></div>
          </div>
        </div>
      </div>
    ),
    code: `<div class="relative inline-block group">
  <button class="bg-primary text-white px-4 py-2 rounded-md">
    Hover me
  </button>
  <div class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div class="text-center">This is a tooltip with helpful information.</div>
    <div class="absolute left-1/2 -translate-x-1/2 top-full border-solid border-t-gray-900 border-t-4 border-x-transparent border-x-4 border-b-0"></div>
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
    src="https://randomuser.me/api/portraits/women/62.jpg" 
    alt="User 1"
  />
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="https://randomuser.me/api/portraits/men/32.jpg" 
    alt="User 2"
  />
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="https://randomuser.me/api/portraits/women/44.jpg" 
    alt="User 3"
  />
  <img 
    class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" 
    src="https://randomuser.me/api/portraits/men/46.jpg" 
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
  
  // Modals category
  {
    id: 'simple-modal',
    name: 'Simple Modal Dialog',
    category: 'modals',
    preview: (
      <div className="relative">
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center" style={{position: 'relative', height: '180px'}}>
          <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-foreground">Confirm Action</h3>
              <button className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Are you sure you want to complete this action? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 text-sm text-foreground bg-secondary rounded-md hover:bg-secondary/80">
                Cancel
              </button>
              <button className="px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-primary/90">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<!-- Modal backdrop -->
<div class="fixed inset-0 bg-black/30 flex items-center justify-center">
  <!-- Modal content -->
  <div class="bg-card border border-border rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
    <!-- Modal header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-medium text-foreground">Confirm Action</h3>
      <button class="text-muted-foreground hover:text-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Modal body -->
    <div class="mb-6">
      <p class="text-sm text-muted-foreground">
        Are you sure you want to complete this action? This action cannot be undone.
      </p>
    </div>
    <!-- Modal footer -->
    <div class="flex justify-end space-x-3">
      <button class="px-4 py-2 text-sm text-foreground bg-secondary rounded-md hover:bg-secondary/80">
        Cancel
      </button>
      <button class="px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-primary/90">
        Confirm
      </button>
    </div>
  </div>
</div>`
  },
  
  // Tables category
  {
    id: 'data-table',
    name: 'Data Table',
    category: 'tables',
    preview: (
      <div className="w-full overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-muted/50">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">Product</th>
              <th scope="col" className="px-6 py-3 font-medium">Category</th>
              <th scope="col" className="px-6 py-3 font-medium">Price</th>
              <th scope="col" className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border bg-card hover:bg-muted/20">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">MacBook Pro</th>
              <td className="px-6 py-4">Electronics</td>
              <td className="px-6 py-4">$2,499</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">In Stock</span>
              </td>
            </tr>
            <tr className="border-b border-border bg-card hover:bg-muted/20">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Wireless Headphones</th>
              <td className="px-6 py-4">Audio</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Low Stock</span>
              </td>
            </tr>
            <tr className="bg-card hover:bg-muted/20">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Monitor 27"</th>
              <td className="px-6 py-4">Electronics</td>
              <td className="px-6 py-4">$349</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Out of Stock</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    code: `<div class="w-full overflow-hidden rounded-lg border border-border">
  <table class="w-full text-sm text-left">
    <thead class="text-xs uppercase bg-muted/50">
      <tr>
        <th scope="col" class="px-6 py-3 font-medium">Product</th>
        <th scope="col" class="px-6 py-3 font-medium">Category</th>
        <th scope="col" class="px-6 py-3 font-medium">Price</th>
        <th scope="col" class="px-6 py-3 font-medium">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-border bg-card hover:bg-muted/20">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">MacBook Pro</th>
        <td class="px-6 py-4">Electronics</td>
        <td class="px-6 py-4">$2,499</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">In Stock</span>
        </td>
      </tr>
      <tr class="border-b border-border bg-card hover:bg-muted/20">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">Wireless Headphones</th>
        <td class="px-6 py-4">Audio</td>
        <td class="px-6 py-4">$99</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Low Stock</span>
        </td>
      </tr>
      <tr class="bg-card hover:bg-muted/20">
        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">Monitor 27"</th>
        <td class="px-6 py-4">Electronics</td>
        <td class="px-6 py-4">$349</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Out of Stock</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`
  },

  // Pagination component
  {
    id: 'pagination-component',
    name: 'Pagination Controls',
    category: 'navigation',
    preview: (
      <nav className="flex items-center justify-center space-x-2">
        <a href="#" className="px-3 py-1 rounded-md bg-secondary text-muted-foreground hover:bg-primary/10 transition-colors">
          <span className="sr-only">Previous</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <a href="#" className="px-3 py-1 rounded-md bg-primary text-white">1</a>
        <a href="#" className="px-3 py-1 rounded-md bg-secondary text-foreground hover:bg-primary/10 transition-colors">2</a>
        <a href="#" className="px-3 py-1 rounded-md bg-secondary text-foreground hover:bg-primary/10 transition-colors">3</a>
        <span className="px-3 py-1 text-muted-foreground">...</span>
        <a href="#" className="px-3 py-1 rounded-md bg-secondary text-foreground hover:bg-primary/10 transition-colors">8</a>
        <a href="#" className="px-3 py-1 rounded-md bg-secondary text-muted-foreground hover:bg-primary/10 transition-colors">
          <span className="sr-only">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </nav>
    ),
    code: `<nav class="flex items-center justify-center space-x-2">
  <a href="#" class="px-3 py-1 rounded-md bg-secondary text-muted-foreground hover:bg-primary/10 transition-colors">
    <span class="sr-only">Previous</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </a>
  <a href="#" class="px-3 py-1 rounded-md bg-primary text-white">1</a>
  <a href="#" class="px-3 py-1 rounded-md bg-secondary text-foreground hover:bg-primary/10 transition-colors">2</a>
  <a href="#" class="px-3 py-1 rounded-md bg-secondary text-foreground hover:bg-primary/10 transition-colors">3</a>
  <span class="px-3 py-1 text-muted-foreground">...</span>
  <a href="#" class="px-3 py-1 rounded-md bg-secondary text-foreground hover:bg-primary/10 transition-colors">8</a>
  <a href="#" class="px-3 py-1 rounded-md bg-secondary text-muted-foreground hover:bg-primary/10 transition-colors">
    <span class="sr-only">Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </a>
</nav>`
  },

  // Badge component
  {
    id: 'badge-component',
    name: 'Status Badges',
    category: 'inputs',
    preview: (
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Info
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Success
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Warning
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Error
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          <svg className="mr-1.5 h-2 w-2 text-gray-500" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          Default
        </span>
      </div>
    ),
    code: `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
  Info
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
  Success
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
  Warning
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
  Error
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
  <svg class="mr-1.5 h-2 w-2 text-gray-500" fill="currentColor" viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3" />
  </svg>
  Default
</span>`
  },

  // Toggle Switch component
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    category: 'inputs',
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        <span className="ml-3 text-sm font-medium text-foreground">Toggle me</span>
      </label>
    ),
    code: `<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
  <span class="ml-3 text-sm font-medium text-foreground">Toggle me</span>
</label>`
  },

  // Accordion component
  {
    id: 'accordion-component',
    name: 'Simple Accordion',
    category: 'dropdowns',
    preview: (
      <div className="w-full max-w-md mx-auto space-y-2">
        <div className="border border-border rounded-md">
          <button className="flex justify-between w-full px-4 py-3 text-left text-foreground font-medium">
            <span>What is ComponentCraft?</span>
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="px-4 pb-3 text-sm text-muted-foreground">
            ComponentCraft is a collection of free Tailwind CSS components that you can copy and paste into your projects.
          </div>
        </div>
        <div className="border border-border rounded-md">
          <button className="flex justify-between w-full px-4 py-3 text-left text-foreground font-medium">
            <span>Is it free to use?</span>
            <svg className="w-5 h-5 text-primary transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    ),
    code: `<div class="w-full max-w-md mx-auto space-y-2">
  <!-- Open accordion item -->
  <div class="border border-border rounded-md">
    <button class="flex justify-between w-full px-4 py-3 text-left text-foreground font-medium">
      <span>What is ComponentCraft?</span>
      <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div class="px-4 pb-3 text-sm text-muted-foreground">
      ComponentCraft is a collection of free Tailwind CSS components that you can copy and paste into your projects.
    </div>
  </div>
  
  <!-- Closed accordion item -->
  <div class="border border-border rounded-md">
    <button class="flex justify-between w-full px-4 py-3 text-left text-foreground font-medium">
      <span>Is it free to use?</span>
      <svg class="w-5 h-5 text-primary transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <!-- Content is hidden in closed state -->
  </div>
</div>`
  },

  // Progress Bar
  {
    id: 'progress-bars',
    name: 'Progress Bars',
    category: 'inputs',
    preview: (
      <div className="space-y-4 w-full max-w-md">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-foreground">Basic</span>
            <span className="text-sm font-medium text-foreground">50%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-foreground">With Steps</span>
            <span className="text-sm font-medium text-foreground">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-1.5"></div>
              <span className="text-xs text-muted-foreground">Step 1</span>
            </div>
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-1.5"></div>
              <span className="text-xs text-muted-foreground">Step 2</span>
            </div>
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-200 mr-1.5"></div>
              <span className="text-xs text-muted-foreground">Step 3</span>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<!-- Basic progress bar -->
<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium text-foreground">Basic</span>
    <span class="text-sm font-medium text-foreground">50%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div class="bg-primary h-2.5 rounded-full" style="width: 50%"></div>
  </div>
</div>

<!-- Progress bar with steps -->
<div>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium text-foreground">With Steps</span>
    <span class="text-sm font-medium text-foreground">75%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
  </div>
  <div class="flex justify-between mt-2">
    <div class="flex items-center">
      <div class="w-2.5 h-2.5 rounded-full bg-blue-600 mr-1.5"></div>
      <span class="text-xs text-muted-foreground">Step 1</span>
    </div>
    <div class="flex items-center">
      <div class="w-2.5 h-2.5 rounded-full bg-blue-600 mr-1.5"></div>
      <span class="text-xs text-muted-foreground">Step 2</span>
    </div>
    <div class="flex items-center">
      <div class="w-2.5 h-2.5 rounded-full bg-gray-200 mr-1.5"></div>
      <span class="text-xs text-muted-foreground">Step 3</span>
    </div>
  </div>
</div>`
  },

  // Skeleton Loader
  {
    id: 'skeleton-loader',
    name: 'Skeleton Loader',
    category: 'feedback',
    preview: (
      <div className="w-full max-w-md p-4 space-y-4 bg-card rounded-md">
        <div className="flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="flex-1 py-1 space-y-2">
            <div className="h-2.5 rounded bg-gray-200 animate-pulse w-3/4"></div>
            <div className="h-2 rounded bg-gray-200 animate-pulse w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-2.5 rounded bg-gray-200 animate-pulse w-full"></div>
          <div className="h-2.5 rounded bg-gray-200 animate-pulse w-full"></div>
          <div className="h-2.5 rounded bg-gray-200 animate-pulse w-3/4"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-20 h-8 rounded bg-gray-200 animate-pulse"></div>
          <div className="w-20 h-8 rounded bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    ),
    code: `<div class="w-full max-w-md p-4 space-y-4 bg-card rounded-md">
  <!-- Avatar and text skeleton -->
  <div class="flex space-x-4">
    <div class="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
    <div class="flex-1 py-1 space-y-2">
      <div class="h-2.5 rounded bg-gray-200 animate-pulse w-3/4"></div>
      <div class="h-2 rounded bg-gray-200 animate-pulse w-1/2"></div>
    </div>
  </div>
  
  <!-- Content skeleton -->
  <div class="space-y-3">
    <div class="h-2.5 rounded bg-gray-200 animate-pulse w-full"></div>
    <div class="h-2.5 rounded bg-gray-200 animate-pulse w-full"></div>
    <div class="h-2.5 rounded bg-gray-200 animate-pulse w-3/4"></div>
  </div>
  
  <!-- Button skeleton -->
  <div class="flex items-center space-x-2">
    <div class="w-20 h-8 rounded bg-gray-200 animate-pulse"></div>
    <div class="w-20 h-8 rounded bg-gray-200 animate-pulse"></div>
  </div>
</div>`
  },

  // Stepper component
  {
    id: 'stepper-component',
    name: 'Stepper Process',
    category: 'navigation',
    preview: (
      <div className="flex items-center w-full max-w-md mx-auto">
        <div className="flex items-center relative">
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-primary text-white text-sm font-medium">1</div>
          <div className="absolute top-0 -ml-2 text-xs font-medium text-primary w-max mt-10">Account</div>
        </div>
        <div className="flex-auto border-t-2 border-primary"></div>
        <div className="flex items-center relative">
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-primary text-white text-sm font-medium">2</div>
          <div className="absolute top-0 -ml-10 text-xs font-medium text-primary w-max mt-10">Shipping</div>
        </div>
        <div className="flex-auto border-t-2 border-gray-300"></div>
        <div className="flex items-center relative">
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 text-gray-600 text-sm font-medium">3</div>
          <div className="absolute top-0 -ml-6 text-xs font-medium text-gray-500 w-max mt-10">Payment</div>
        </div>
      </div>
    ),
    code: `<div class="flex items-center w-full max-w-md mx-auto">
  <!-- Completed step -->
  <div class="flex items-center relative">
    <div class="rounded-full h-8 w-8 flex items-center justify-center bg-primary text-white text-sm font-medium">1</div>
    <div class="absolute top-0 -ml-2 text-xs font-medium text-primary w-max mt-10">Account</div>
  </div>
  
  <!-- Completed connector -->
  <div class="flex-auto border-t-2 border-primary"></div>
  
  <!-- Current step -->
  <div class="flex items-center relative">
    <div class="rounded-full h-8 w-8 flex items-center justify-center bg-primary text-white text-sm font-medium">2</div>
    <div class="absolute top-0 -ml-10 text-xs font-medium text-primary w-max mt-10">Shipping</div>
  </div>
  
  <!-- Incomplete connector -->
  <div class="flex-auto border-t-2 border-gray-300"></div>
  
  <!-- Incomplete step -->
  <div class="flex items-center relative">
    <div class="rounded-full h-8 w-8 flex items-center justify-center bg-gray-300 text-gray-600 text-sm font-medium">3</div>
    <div class="absolute top-0 -ml-6 text-xs font-medium text-gray-500 w-max mt-10">Payment</div>
  </div>
</div>`
  },

  // File Upload
  {
    id: 'file-upload',
    name: 'File Upload',
    category: 'forms',
    preview: (
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    ),
    code: `<div class="flex items-center justify-center w-full">
  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
      </svg>
      <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" type="file" class="hidden" />
  </label>
</div>`
  },

  // Stats Card
  {
    id: 'stats-card',
    name: 'Stats Cards',
    category: 'cards',
    preview: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Total Customers</p>
              <p className="text-xl font-bold text-foreground">6,389</p>
              <p className="flex items-center text-xs text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                16.5% vs last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Revenue</p>
              <p className="text-xl font-bold text-foreground">$23,456</p>
              <p className="flex items-center text-xs text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                12.3% vs last month
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Orders</p>
              <p className="text-xl font-bold text-foreground">1,203</p>
              <p className="flex items-center text-xs text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                5.2% vs last month
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <!-- Users stats card -->
  <div class="bg-card border border-border rounded-lg p-5 shadow-sm">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <div>
        <p class="text-muted-foreground text-sm">Total Customers</p>
        <p class="text-xl font-bold text-foreground">6,389</p>
        <p class="flex items-center text-xs text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          16.5% vs last month
        </p>
      </div>
    </div>
  </div>
  
  <!-- Revenue stats card -->
  <div class="bg-card border border-border rounded-lg p-5 shadow-sm">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-green-100 text-green-500 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <p class="text-muted-foreground text-sm">Revenue</p>
        <p class="text-xl font-bold text-foreground">$23,456</p>
        <p class="flex items-center text-xs text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          12.3% vs last month
        </p>
      </div>
    </div>
  </div>
  
  <!-- Orders stats card -->
  <div class="bg-card border border-border rounded-lg p-5 shadow-sm">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <div>
        <p class="text-muted-foreground text-sm">Orders</p>
        <p class="text-xl font-bold text-foreground">1,203</p>
        <p class="flex items-center text-xs text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          5.2% vs last month
        </p>
      </div>
    </div>
  </div>
</div>`
  },

  // Toast/Notification
  {
    id: 'toast-notification',
    name: 'Toast Notification',
    category: 'feedback',
    preview: (
      <div className="flex flex-col space-y-4">
        <div className="fixed top-4 right-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 flex items-center gap-3">
          <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-lg bg-green-100 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-2">
            <h4 className="text-sm font-medium text-gray-900">Success!</h4>
            <p className="text-xs text-gray-500">Your changes have been saved successfully.</p>
          </div>
          <button className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    ),
    code: `<div class="fixed top-4 right-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 flex items-center gap-3">
  <div class="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-lg bg-green-100 text-green-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="ml-2">
    <h4 class="text-sm font-medium text-gray-900">Success!</h4>
    <p class="text-xs text-gray-500">Your changes have been saved successfully.</p>
  </div>
  <button class="ml-auto">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>
</div>`
  },

  // Timeline component
  {
    id: 'timeline-component',
    name: 'Vertical Timeline',
    category: 'feedback',
    preview: (
      <div className="relative border-l-2 border-gray-200 ml-3 pl-8 py-2 space-y-10">
        <div className="relative">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-12 ring-4 ring-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-gray-900">Application Submitted</h3>
          <time className="block mb-2 text-sm font-normal text-gray-500">January 13, 2022</time>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.</p>
        </div>
        <div className="relative">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-12 ring-4 ring-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-gray-900">Application Approved</h3>
          <time className="block mb-2 text-sm font-normal text-gray-500">February 2, 2022</time>
          <p className="text-sm text-gray-600">Etiam sit amet orci eget eros faucibus tincidunt nulla facilisi.</p>
        </div>
      </div>
    ),
    code: `<div class="relative border-l-2 border-gray-200 ml-3 pl-8 py-2 space-y-10">
  <!-- First timeline item -->
  <div class="relative">
    <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-12 ring-4 ring-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </span>
    <h3 class="text-lg font-semibold text-gray-900">Application Submitted</h3>
    <time class="block mb-2 text-sm font-normal text-gray-500">January 13, 2022</time>
    <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.</p>
  </div>
  
  <!-- Second timeline item -->
  <div class="relative">
    <span class="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-12 ring-4 ring-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
    <h3 class="text-lg font-semibold text-gray-900">Application Approved</h3>
    <time class="block mb-2 text-sm font-normal text-gray-500">February 2, 2022</time>
    <p class="text-sm text-gray-600">Etiam sit amet orci eget eros faucibus tincidunt nulla facilisi.</p>
  </div>
</div>`
  },

  // Breadcrumbs component
  {
    id: 'breadcrumbs-component',
    name: 'Breadcrumbs',
    category: 'navigation',
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Projects</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Project Settings</span>
            </div>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">Project Settings</span>
      </div>
    </li>
  </ol>
</nav>`
  },

  // Tooltip component
  {
    id: 'tooltip-component-new',
    name: 'Tooltip',
    category: 'tooltips',
    preview: (
      <div className="relative inline-block">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">Hover me</button>
        <div className="absolute z-10 w-auto p-2 -mt-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm -top-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          This is a tooltip
          <div className="absolute w-3 h-3 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    ),
    code: `<!-- Button trigger element -->
<div class="relative inline-block">
  <button class="px-4 py-2 bg-gray-800 text-white rounded-md">Hover me</button>
  
  <!-- Tooltip -->
  <div class="absolute z-10 w-auto p-2 -mt-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm -top-full left-1/2 transform -translate-x-1/2 -translate-y-2">
    This is a tooltip
    <!-- Tooltip arrow -->
    <div class="absolute w-3 h-3 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
  </div>
</div>`
  },

  // Tab component
  {
    id: 'tab-component-new',
    name: 'Tabs Interface',
    category: 'tabs',
    preview: (
      <div className="w-full max-w-md mx-auto">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            <button className="w-1/3 py-4 px-1 text-center border-b-2 border-primary font-medium text-sm text-primary">
              Profile
            </button>
            <button className="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Settings
            </button>
            <button className="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Messages
            </button>
          </nav>
        </div>
        <div className="py-4">
          <p className="text-gray-700 text-sm">Your profile content goes here...</p>
        </div>
      </div>
    ),
    code: `<div class="w-full max-w-md mx-auto">
  <!-- Tab navigation -->
  <div class="border-b border-gray-200">
    <nav class="-mb-px flex" aria-label="Tabs">
      <button class="w-1/3 py-4 px-1 text-center border-b-2 border-primary font-medium text-sm text-primary">
        Profile
      </button>
      <button class="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
        Settings
      </button>
      <button class="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
        Messages
      </button>
    </nav>
  </div>
  
  <!-- Active tab content -->
  <div class="py-4">
    <p class="text-gray-700 text-sm">Your profile content goes here...</p>
  </div>
</div>`
  },

  // Rating component 
  {
    id: 'rating-component',
    name: 'Star Rating',
    category: 'feedback',
    preview: (
      <div className="flex flex-col space-y-4 max-w-md">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p className="ml-2 text-sm font-medium text-foreground">4.0 out of 5</p>
        </div>

        <div className="flex items-center">
          <p className="text-sm font-medium text-foreground">4 stars</p>
          <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded">
            <div className="h-2 bg-yellow-400 rounded" style={{width: '75%'}}></div>
          </div>
          <p className="text-sm font-medium text-foreground">75%</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium text-foreground">3 stars</p>
          <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded">
            <div className="h-2 bg-yellow-400 rounded" style={{width: '18%'}}></div>
          </div>
          <p className="text-sm font-medium text-foreground">18%</p>
        </div>
      </div>
    ),
    code: `<!-- Basic Star Rating -->
<div class="flex items-center">
  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
  <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
  <p class="ml-2 text-sm font-medium text-foreground">4.0 out of 5</p>
</div>

<!-- Rating Progress Bars -->
<div class="flex items-center">
  <p class="text-sm font-medium text-foreground">4 stars</p>
  <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded">
    <div class="h-2 bg-yellow-400 rounded" style="width: 75%"></div>
  </div>
  <p class="text-sm font-medium text-foreground">75%</p>
</div>
<div class="flex items-center">
  <p class="text-sm font-medium text-foreground">3 stars</p>
  <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded">
    <div class="h-2 bg-yellow-400 rounded" style="width: 18%"></div>
  </div>
  <p class="text-sm font-medium text-foreground">18%</p>
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
