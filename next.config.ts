import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Ensure static files are properly served
  async headers() {
    return [
      {
        source: '/:path*.bin',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/octet-stream',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
