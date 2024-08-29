/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "en-US", "de-DE"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
