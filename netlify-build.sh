#!/bin/bash

# Run the regular build process
npm run build

# Move files from dist/public to dist for Netlify
cp -r dist/public/* dist/

# Ensure the functions directory exists in the output
mkdir -p dist/netlify/functions

# Copy the Netlify function files to the dist folder
cp -r netlify/functions/* dist/netlify/functions/

# Create a redirects file for client-side routing
echo '/* /index.html 200' > dist/_redirects

echo "Build completed successfully!"
