import { getRepos } from "@/lib/getRepos";
import Link from "next/link";
import { MAX_PAGE } from "@/constants";
import TableRepo from "@/app/ui/repo-table";
import Search from "@/app/ui/search";
import Action from "../ui/action";
import Header from "../ui/header";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}
async function Repos({ searchParams }: Props) {
  const name =
    typeof searchParams.name === "string" ? searchParams.name : "react";
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

  const repos = await getRepos({ search: name, page: page, limit: MAX_PAGE });

  if (repos.length === 0) {
    return (
      <main>
        <div className="flex justify-center m-7">
          <p>Not Found</p>
        </div>
      </main>
    );
  }

  return (
    <main className="m-4">
      <TableRepo repos={repos} />
      <footer className="flex gap-8 justify-center  m-5">
        <Action href={`/repos?name=${name}&page=${page > 1 ? page - 1 : 1}`}>
          <p>previous</p>
        </Action>
        <div className="flex items-center justify-center">
          <p>{page}</p>
        </div>
        <Action href={`/repos?name=${name}&page=${page + 1}`}>
          <p>next</p>
        </Action>
      </footer>
    </main>
  );
}

export default Repos;
