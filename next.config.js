/** @type {import('next').NextConfig} */
const nextConfig = {
  // Safety valve: don’t let ESLint block builds. Remove later if you want CI to fail on lint.
  eslint: { ignoreDuringBuilds: true }
};

module.exports = nextConfig;
