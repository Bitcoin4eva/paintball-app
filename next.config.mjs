/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — the app is fully client-side (localStorage only), so it
  // deploys to any static host. GitHub Pages serves from a /paintball-app
  // subpath; the deploy workflow sets NEXT_PUBLIC_BASE_PATH accordingly.
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
