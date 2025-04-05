import { useState } from 'react';

// Expanded categories list with more components 
const categories = [
  { id: 'buttons', name: 'Buttons', count: 12, icon: 'square' },
  { id: 'cards', name: 'Cards', count: 18, icon: 'credit-card' },
  { id: 'forms', name: 'Forms', count: 14, icon: 'clipboard-list' },
  { id: 'modals', name: 'Dialogs', count: 8, icon: 'window-restore' },
  { id: 'inputs', name: 'Inputs', count: 16, icon: 'keyboard' },
  { id: 'alerts', name: 'Alerts', count: 6, icon: 'exclamation-circle' },
  { id: 'tables', name: 'Tables', count: 9, icon: 'table' },
  { id: 'navigation', name: 'Navigation', count: 11, icon: 'compass' },
  { id: 'dropdowns', name: 'Dropdowns', count: 7, icon: 'chevron-down' },
  { id: 'tooltips', name: 'Tooltips', count: 5, icon: 'info' },
  { id: 'tabs', name: 'Tabs', count: 6, icon: 'folder' },
  { id: 'avatars', name: 'Avatars', count: 10, icon: 'user' }
];

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse Our <span className="text-primary">Component Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect components for your next project from our extensive library of 
            professionally designed UI elements.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
            <input 
              id="category-search" 
              type="text" 
              placeholder="Search categories..." 
              className="pl-10 pr-4 py-3 bg-background border border-input rounded-full w-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredCategories.map(category => (
            <a 
              key={category.id}
              href={`#${category.id}`} 
              className="bg-card dark:bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all group relative flex flex-col items-center text-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {category.icon === 'square' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />}
                  {category.icon === 'credit-card' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                  {category.icon === 'clipboard-list' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />}
                  {category.icon === 'window-restore' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />}
                  {category.icon === 'keyboard' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />}
                  {category.icon === 'exclamation-circle' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {category.icon === 'table' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />}
                  {category.icon === 'compass' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />}
                  {category.icon === 'chevron-down' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />}
                  {category.icon === 'info' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {category.icon === 'folder' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />}
                  {category.icon === 'user' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                </svg>
              </div>
              <h3 className="text-foreground font-medium text-lg mb-1">{category.name}</h3>
              <p className="text-muted-foreground text-sm">{category.count} components</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
