/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    // domains:["api.themoviedb.org"],
    // protocol: "https",
  }
}

module.exports = nextConfig
