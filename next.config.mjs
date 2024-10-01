const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/churchwebsite',
    distDir: 'dist',
    output: 'export',
    assetPrefix: isDev ? undefined : 'https://rialparmar1777.github.io/churchwebsite',
    env: {
        assetPrefix: isDev ? '' : 'https://rialparmar1777.github.io/churchwebsite',
    },
};

export default nextConfig;
