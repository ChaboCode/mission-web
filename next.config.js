/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "localhost", "mission-minio.flycast"
        ]
    },
}

module.exports = nextConfig
