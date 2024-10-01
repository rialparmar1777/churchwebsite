const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isDev ? '' : '/churchwebsite',
    distDir: 'dist',
    output: 'export',
    assetPrefix: isDev ? '' : 'https://rialparmar1777.github.io/churchwebsite',
    env: {
        assetPrefix: isDev ? '' : 'https://rialparmar1777.github.io/churchwebsite',
    },
};

export default nextConfig;
