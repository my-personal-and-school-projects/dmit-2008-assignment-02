import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ApplicationDataTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Applied</TableCell>
            <TableCell align="right">Response</TableCell>
            <TableCell align="right">Interview</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.company}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.applied}</TableCell>
              <TableCell align="right">{row.response}</TableCell>
              <TableCell align="right">{row.interview}</TableCell>{" "}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const data = [
  {
    id: 14,
    company: "Dans Super Company",
    position: "Professional Cat Sitter",
    applied: "2024-06-01",
    response: "responded",
    interview: "scheduled",
  },
  {
    id: 15,
    company: "Ricks Meme Company",
    position: "Professional Meme Maker",
    applied: "2024-06-05",
    response: "rejected",
    interview: "-",
  },
];
