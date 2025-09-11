/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Generates static site in 'out/' directory
  trailingSlash: true, // Ensures paths work on GitHub Pages (e.g., /page/)
  images: {
    unoptimized: true, // Disables image optimization (required for GitHub Pages)
  },
  // Set basePath for subpath deploys (e.g., username.github.io/repo-name)
  basePath: process.env.BASE_PATH || '',
};

module.exports = nextConfig;
