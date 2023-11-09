import { TableCell } from "@mui/material";
import Link from "next/link";

interface Props {
  link: string;
  children: React.ReactNode;
  props?: any;
}

function LinkCell({ children, link, ...props }: Props) {
  return (
    <TableCell className="items-center" {...props}>
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        {children}
      </a>
    </TableCell>
  );
}

export default LinkCell;
