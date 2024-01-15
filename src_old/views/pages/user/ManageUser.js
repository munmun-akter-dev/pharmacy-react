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
import VisibilityIcon from "@mui/icons-material/Visibility";

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

const ManageUser = () => {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, getUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    fetch(`${Config.baseUrlCI}/users`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        getUsers(result);
        console.log(users);
      })
      .catch((err) => {
        setError(err);
      });
  }

  const handleEdit=(id)=>{
    navigate(`/edit-user/${id}`);
    
  }

  const handleDelete=(id)=>{
         
        // let data={id:id}

        fetch(`${Config.baseUrlCI}/users/${id}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          //console.log(data);
          fetchUsers();

        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
  }

  // if (error) return <div>Error:{error.massege}</div>;
  // if (!isLoaded) return <div>Loaded</div>;

  return (
    <>
      <div
        style={{
          fontSize: "25px",
          textAlign: "center",
          backgroundColor: "lightgrey",
          marginBottom: "25px",
        }}
      >
        Manage User
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Password</StyledTableCell>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell>
              Action
              <Link
                  to="/add-user"
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
                    Add User
                  </Button>
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell>{user.username}</StyledTableCell>
                <StyledTableCell>{user.password}</StyledTableCell>
                <StyledTableCell>{user.full_name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.role_id}</StyledTableCell>
                <StyledTableCell><img src={`http://localhost:8080/img/${user.photo}`} width="100" /></StyledTableCell>
                <StyledTableCell>
                  
                  <Button onClick={() =>handleEdit(user.id)}
                    variant="outlined"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button onClick={() =>handleDelete(user.id)}
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

export default ManageUser;
