import React, { useState, useEffect, useLayoutEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GetUniversities from "../components/GetUniversities";
import axios from "axios";

const Universities = (props) => {
  const [universities, setUniversities] = useState([]);
  useLayoutEffect(() => {
    const url = "/api/v1/universities/index";
    axios
      .get(url)
      .then((response) => setUniversities(response.data))
      .catch(() => this.props.history.push("/"));
  }, [setUniversities]);

  const highlightUniversities = (university) => {
    if (university.domains.length > 1) {
      return (
        <TableRow
          key={university.id}
          className="colored"
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell className="colored-text" component="th" scope="row">
            {university.name}
          </TableCell>
          <TableCell className="colored-text" align="right">
            {university.domains.map((domain, index) => (
              <div key={index}>{domain}</div>
            ))}
          </TableCell>
          <TableCell className="colored-text" align="right">
            {university.country}
          </TableCell>
          <TableCell className="colored-text" align="right">
            {university.web_pages.map((web_page, index) => (
              <div key={index}>{web_page}.</div>
            ))}
          </TableCell>
        </TableRow>
      );
    }
    return (
      <TableRow
        key={university.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {university.name}
        </TableCell>
        <TableCell align="right">
          <div>{university.domains}</div>
        </TableCell>
        <TableCell align="right">{university.country}</TableCell>
        <TableCell align="right">
          {university.web_pages.map((web_page, index) => (
            <div key={index}>{web_page}.</div>
          ))}
        </TableCell>
      </TableRow>
    );
  };

  const emptyDB = () => {
    if (universities.length == 0) {
      return true;
    }
    return false;
  };

  return emptyDB() ? (
    <GetUniversities />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Domains</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">WebPage&nbsp;(url)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universities.map(
            (university) =>
              highlightUniversities(university)
            //<TableRow
            //  key={university.id}
            //  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            //>
            //  <TableCell component="th" scope="row">
            //    {university.name}
            //  </TableCell>
            //  <TableCell align="right">
            //    {university.domains.map((domain, index) => (
            //      <div key={index}>{domain}</div>
            //    ))}
            //  </TableCell>
            //  <TableCell align="right">{university.country}</TableCell>
            //  <TableCell align="right">
            //    {university.web_pages.map((web_page, index) => (
            //      <div key={index}>{web_page}.</div>
            //    ))}
            //  </TableCell>
            //</TableRow>
          )}
          ;
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Universities;
