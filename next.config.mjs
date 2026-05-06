/** @type {import('next').NextConfig} */
const repositoryName = "PrincipalEquityDemo";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repositoryName}` : "",
  assetPrefix: isGithubPages ? `/${repositoryName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
