/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.pivot-pharma.com',
            }
        ]
    },
};

export default nextConfig;