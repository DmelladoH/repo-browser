import { getRepos } from "@/lib/getRepos";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Repo } from "../types";
import Link from "next/link";
import { MAX_PAGE } from "@/constants";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}
async function Repos({ searchParams }: Props) {
  const name =
    typeof searchParams.name === "string" ? searchParams.name : "react";
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

  const repos = await getRepos({ search: name, page: page, limit: MAX_PAGE });

  console.log(repos[0].name);
  return (
    <main>
      <h1>Repos</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Full Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map((repo: Repo) => (
              <TableRow key={repo.id}>
                <TableCell>{repo.id}</TableCell>
                <TableCell>{repo.name}</TableCell>
                <TableCell>{repo.full_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <section>
        <Link href={`/repos?name=${name}&page=${page > 1 ? page - 1 : 1}`}>
          <p>previous</p>
        </Link>
        <Link href={`/repos?name=${name}&page=${page + 1}`}>
          <p>next</p>
        </Link>
      </section>
    </main>
  );
}

export default Repos;
