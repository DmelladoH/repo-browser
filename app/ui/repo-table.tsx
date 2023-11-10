/* eslint-disable @next/next/no-img-element */
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import { Repo } from "../types";
import Link from "next/link";
import LinkCell from "./linkCell";

function TableRepo({ repos }: any) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Repo Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Created at</TableCell>
              <TableCell>Updated at</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Stars</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map((repo: Repo) => (
              <TableRow key={repo.id}>
                <LinkCell link={repo.html_url}>
                  <div className="flex gap-4">
                    <img
                      src={repo.owner.avatar_url}
                      alt={`avatar ${repo.owner.login}}`}
                      className="w-10 h-10 rounded-full"
                    />
                    {repo.owner.login}
                  </div>
                </LinkCell>
                <LinkCell link={repo.html_url}>{repo.name}</LinkCell>
                <LinkCell link={repo.html_url}>{repo.description}</LinkCell>
                <LinkCell link={repo.html_url}>
                  {new Date(repo.created_at).toLocaleDateString()}
                </LinkCell>
                <LinkCell link={repo.html_url}>
                  {new Date(repo.updated_at).toLocaleDateString()}
                </LinkCell>

                <LinkCell link={repo.html_url}>{repo.language}</LinkCell>
                <LinkCell link={repo.html_url}>{repo.score} ⭐</LinkCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableRepo;
