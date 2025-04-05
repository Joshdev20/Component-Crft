#!/bin/bash

# Run the regular build process
npm run build

# Ensure the functions directory exists in the output
mkdir -p dist/netlify/functions

# Copy the Netlify function files to the dist folder
cp -r netlify/functions/* dist/netlify/functions/

echo "Build completed successfully!"
