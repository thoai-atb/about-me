import type { NextConfig } from "next";

// Get the full "user/repository" value from the environment variable
const githubRepository = process.env.GITHUB_REPOSITORY || ""; // e.g., "user/repository"

// Extract only "/repository"
const repoName = githubRepository
  ? "/" + (githubRepository.split("/").pop() || "")
  : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {unoptimized: true},
  basePath: repoName,
  publicRuntimeConfig: {
    basePath: repoName,
  },
};

export default nextConfig;
