/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"]
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    generateBuildId: async () => {
        return 'build-' + Date.now();
    },
};

module.exports = nextConfig;
