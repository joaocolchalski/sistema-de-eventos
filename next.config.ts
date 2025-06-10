import withSvgr from 'next-svgr';

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{ hostname: 'res.cloudinary.com', pathname: '/**' }],
    },
};

export default withSvgr(nextConfig);
