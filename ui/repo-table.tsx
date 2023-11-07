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
import { Repo } from "../app/types";

function TableRepo({ repos }: any) {
  return (
    <>
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
    </>
  );
}

export default TableRepo;
