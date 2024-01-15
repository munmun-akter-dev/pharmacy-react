import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useState, useEffect } from "react";
import { Config } from "../../../model/config";
import { useNavigate, Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageStatus = () => {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetchStatus();
  }, []);

  function fetchStatus() {
    fetch(`${Config.baseUrlCI}/status`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        setStatus(result);
        console.log(status);
      })
      .catch((err) => {
        setError(err);
      });
  }

  const handleEdit = (id) => {
    navigate(`/edit-status/${id}`);
  };

  const handleDelete = (id) => {
    // let data={id:id}

    fetch(`${Config.baseUrlCI}/status/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        fetchStatus();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  // if (error) return <div>Error:{error.massege}</div>;
  // if (!isLoaded) return <div>Loaded</div>;

  return (
    <>
      <div
        style={{
          fontSize: "25px",
          textAlign: "center",
          backgroundColor: "lightgrey",
          marginBottom: "15px",
        }}
      >
        Manage Status
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>
                Action
                <Link
                  to="/add-status"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    disableElevation
                    style={{
                      marginLeft:"100px",
                      color: "black",
                      backgroundColor: "lightgray",
                    }}
                  >
                    Add Status
                  </Button>
                </Link>
                </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {status.map((stat) => (
              <StyledTableRow key={stat.id}>
                <StyledTableCell component="th" scope="row">
                  {stat.id}
                </StyledTableCell>
                <StyledTableCell>{stat.name}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() => handleEdit(stat.id)}
                    variant="outlined"
                    style={{
                      backgroundColor: "#008AD8",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  {/* <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    startIcon={<VisibilityIcon />}
                  >
                    Details
                  </Button> */}
                  <Button
                    onClick={() => handleDelete(stat.id)}
                    variant="outlined"
                    style={{
                      backgroundColor: " red",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageStatus;
