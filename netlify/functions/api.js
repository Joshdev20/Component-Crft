// This file serves as the API endpoint for Netlify Functions
import express from 'express';
import serverless from 'serverless-http';

// Import your server-side logic or create a simplified version
const app = express();

// Configure your API routes here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from ComponentCraft API!' });
});

// Any additional API routes from your original server
// app.get('/api/your-endpoint', ...)

// Export the serverless function
export const handler = serverless(app);
