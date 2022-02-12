import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
    };
  }

  componentDidMount() {
    const url = "/api/v1/universities/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Response was not ok.");
      })
      .then((response) => this.setState({ universities: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name (100g serving)</TableCell>
              <TableCell align="right">Domains</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">WebPage&nbsp;(url)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.universities.map((university) => (
              <TableRow
                key={university.domains}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {university.name}
                </TableCell>
                <TableCell align="right">{university.domains}</TableCell>
                <TableCell align="right">{university.country}</TableCell>
                <TableCell align="right">{university.web_pages}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Universities;
