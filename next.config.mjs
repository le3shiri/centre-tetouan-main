/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
      child_process: false,
      async_hooks: false,
      "https": false,
      "http": false,
      "url": false,
      "util": false,
      "zlib": false,
      "stream": false,
      "crypto": false,
      "os": false,
      "path": false,
      "assert": false,
    }

    return config
  },
}

export default nextConfig
