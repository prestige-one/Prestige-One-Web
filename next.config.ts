import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add support for GLTF and binary files
    config.module.rules.push({
      test: /\.(gltf|bin)$/,
      type: 'asset/resource',
    })
    return config
  },
  // Ensure static files are properly served
  async headers() {
    return [
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.bin',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/octet-stream',
          },
        ],
      },
      {
        source: '/:path*.gltf',
        headers: [
          {
            key: 'Content-Type',
            value: 'model/gltf+json',
          },
        ],
      },
    ]
  },
}

export default nextConfig
