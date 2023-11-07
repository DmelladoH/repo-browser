import { Console } from "console";
import { getRepos } from "../lib/getRepos";
import TableRepo from "../ui/repo-table";
import { useState } from "react";

export default async function Home() {
  // const repos = await getRepos({ search: "react", page: page });
  // console.log(repos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Repo Browser</h1>

      {/* <TableRepo repos={repos} /> */}
    </main>
  );
}
