import type { NextConfig } from "next";

const githubRepository = process.env.GITHUB_REPOSITORY || "thoai/haha";

// Extract only the repository name after the slash
const repoName = "/" + (githubRepository.split("/").pop() || "");

console.log("REPO NAME: " + repoName);

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: repoName || '',
};

export default nextConfig;
