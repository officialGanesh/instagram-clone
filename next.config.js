/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      "www.instagram.com",
      "lh3.googleusercontent.com",
      "links.papareact.com",
      "platform-lookaside.fbsbx.com"
    ]
  }
}

module.exports = nextConfig
