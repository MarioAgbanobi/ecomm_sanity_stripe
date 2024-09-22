/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' https://js.stripe.com; frame-src 'self' https://js.stripe.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
