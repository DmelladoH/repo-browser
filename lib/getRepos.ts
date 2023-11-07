import { MAX_PAGE } from "@/constants";
import { Repo } from "../app/types";
const { Octokit } = require("octokit");

interface Props {
  search: string;
  page: number;
  limit: number;
}

export async function getRepos({ search, page, limit }: Props) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const { data } = await octokit.request(
    `GET /search/repositories?q=${search}&per_page=${limit}&page=${page}`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return data.items;
}
