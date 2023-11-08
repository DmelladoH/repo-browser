import { Console } from "console";
import { getRepos } from "../lib/getRepos";
import TableRepo from "./ui/repo-table";
import { useState } from "react";
import Search from "./ui/search";

export default async function Home() {
  // const repos = await getRepos({ search: "react", page: page });
  // console.log(repos);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>start searching your favorite github repositories</p>
    </main>
  );
}
