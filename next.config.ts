// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['firebasestorage.googleapis.com'],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   output: 'export',
  
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     // unoptimized: true,
//     domains: ['firebasestorage.googleapis.com'],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'pettro.co',
          },
        ],
        destination: 'https://www.pettro.co/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
