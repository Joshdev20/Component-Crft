import { useRef, useEffect } from 'react';

// Component data
const components = [
  {
    id: 'buttons',
    name: 'Button Component',
    preview: (
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
        Click Me
      </button>
    ),
    code: `<button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Click Me</button>`
  },
  {
    id: 'cards',
    name: 'Product Card',
    preview: (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
          alt="Product" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h5 className="text-xl font-semibold text-gray-800">Running Shoes</h5>
          <p className="text-gray-600 mt-2">Premium sports footwear with cushioned comfort.</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-semibold text-gray-800">$95.99</span>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Buy Now</a>
          </div>
        </div>
      </div>
    ),
    code: `<div class="bg-white shadow-lg rounded-lg overflow-hidden">
  <img src="product-image.jpg" alt="Product" class="w-full h-48 object-cover">
  <div class="p-6">
    <h5 class="text-xl font-semibold text-gray-800">Running Shoes</h5>
    <p class="text-gray-600 mt-2">Premium sports footwear with cushioned comfort.</p>
    <div class="flex items-center justify-between mt-4">
      <span class="text-lg font-semibold text-gray-800">$95.99</span>
      <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Buy Now</a>
    </div>
  </div>
</div>`
  },
  {
    id: 'gallery',
    name: 'Image Gallery',
    preview: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" 
            alt="Food" 
            className="w-full h-24 object-cover rounded-md"
          />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" 
            alt="Flower" 
            className="w-full h-24 object-cover rounded-md"
          />
        </div>
        <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1523438290-27b48b0333e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80" 
            alt="Architecture" 
            className="w-full h-24 object-cover rounded-md"
          />
        </div>
      </div>
    ),
    code: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="bg-gray-100 p-2 rounded-lg shadow-sm">
    <img src="image1.jpg" alt="Image 1" class="w-full h-24 object-cover rounded-md">
  </div>
  <div class="bg-gray-100 p-2 rounded-lg shadow-sm">
    <img src="image2.jpg" alt="Image 2" class="w-full h-24 object-cover rounded-md">
  </div>
  <div class="bg-gray-100 p-2 rounded-lg shadow-sm">
    <img src="image3.jpg" alt="Image 3" class="w-full h-24 object-cover rounded-md">
  </div>
</div>`
  },
  {
    id: 'contact-form',
    name: 'Contact Form',
    preview: (
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
        <form action="#" method="POST">
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea id="message" name="message" rows={2} className="w-full p-2 border border-gray-300 rounded-lg" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </div>
    ),
    code: `<div class="bg-white p-6 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
  <form action="#" method="POST">
    <div class="mb-3">
      <label for="name" class="block text-sm text-gray-600 mb-1">Name</label>
      <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded-lg" required>
    </div>
    <div class="mb-3">
      <label for="email" class="block text-sm text-gray-600 mb-1">Email</label>
      <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-lg" required>
    </div>
    <div class="mb-3">
      <label for="message" class="block text-sm text-gray-600 mb-1">Message</label>
      <textarea id="message" name="message" rows="3" class="w-full p-2 border border-gray-300 rounded-lg" required></textarea>
    </div>
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
  </form>
</div>`
  }
];

const ComponentsSection = () => {
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
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Copied!';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
              button.innerHTML = originalInnerHTML;
            }, 2000);
          }
        }
      });
    });
  }, []);

  return (
    <section id="components" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-10 text-center">Featured Free Components</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map(component => (
            <div 
              key={component.id}
              id={component.id} 
              className="bg-white rounded-lg shadow-md p-6 component-card hover:shadow-lg transition-shadow"
            >
              <div className="preview border rounded p-4 mb-4 bg-gray-50 flex justify-center items-center min-h-[100px]">
                {component.preview}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{component.name}</span>
                <button className="copy-btn text-sm text-blue-600 hover:text-blue-800 flex items-center">
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
              <pre className="code-snippet mt-2 text-sm bg-gray-800 text-white p-4 rounded overflow-auto">{component.code}</pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
