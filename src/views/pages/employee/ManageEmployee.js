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
//import VisibilityIcon from "@mui/icons-material/Visibility";

import { useState, useEffect } from "react";
import { Config } from "../../../model/config";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from 'react-toastify'; // Slide,Bounce,Flip
import Modal from "react-modal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: theme.palette.success.main,
    //color: theme.palette.common.white,
    fontWeight: "bold",
    backgroundColor: "#00A609",
    color: "white",
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



const ManageEmployee = () => {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [positions, setPositions] = useState([]);
  const [statuses, setStatuses] = useState([]);

  // for delete confirmation
  const [confirmationStates, setConfirmationStates] = useState({});

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    const initialConfirmationStates = employees.reduce((acc, employee) => {
      acc[employee.id] = false;
      return acc;
    }, {});
    setConfirmationStates(initialConfirmationStates);
  }, [employees]);

  const toggleConfirmModal = (id) => {
    setConfirmationStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  function fetchEmployees() {
    fetch(`${Config.baseUrlCI}/employees`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setEmployees(result);
      })
      .catch((err) => {
        setError(err);
      });

    fetch(`${Config.baseUrlCI}/positions`)
      .then((res) => res.json())
      .then((result) => {
        setPositions(result);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      });

    fetch(`${Config.baseUrlCI}/status`)
      .then((res) => res.json())
      .then((result) => {
        setStatuses(result);
      })
      .catch((err) => {
        console.error("Error fetching statuses:", err);
      });
  }

  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = (id) => {
    toggleConfirmModal(id);
  };

  const confirmDelete = (id) => {
    fetch(`${Config.baseUrlCI}/employees/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        fetchEmployees();
        toast.success("Deleted Successfully", {
          hideProgressBar: true,
          type: "success",
          theme: "dark",
          autoClose: 1000,
          transition: Zoom
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        toast.error("Failed to Delete");
      })
      .finally(() => {
        toggleConfirmModal(id); // Close the confirmation modal after delete operation
      });
  };

  const cancelDelete = (id) => {
    toggleConfirmModal(id);
  };

  const ConfirmOverlay = ({ isOpen, message, onConfirm, onCancel }) => (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={{
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "5px",
          width: "300px",
          maxWidth: "80%",
          height: "100px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
        {message}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1px" }}
      >
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "50px",
            fontFamily: "Segoe UI",
          }}
          onClick={onConfirm}
        >
          Yes
        </Button>
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "red",
            color: "white",
            fontFamily: "Segoe UI",
          }}
          onClick={onCancel}
        >
          No
        </Button>
      </div>
    </Modal>
  );


  // if (error) return <div>Error:{error.massege}</div>;
  // if (!isLoaded) return <div>Loaded</div>;

  return (
    <>
      <div
        style={{
          fontSize: "25px",
          textAlign: "center",
          backgroundColor: "#008AD8",
          color: "white",
          marginBottom: "15px",
          maxWidth: "850px",
          borderRadius: "5px",
          fontFamily: "Segoe UI",
        }}
      >
        Manage Employee
      </div>
      <TableContainer
        component={Paper}
        style={{ maxWidth: 850, backgroundColor: "#E4E4E4" }}
      >
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Mobile</StyledTableCell>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Salary</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>
                Action
                <Link
                  to="/add-employee"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    disableElevation
                    size="small"
                    style={{
                      marginLeft: "30px",
                      color: "black",
                      backgroundColor: "white",
                      fontFamily: "Segoe UI",
                    }}
                  >
                    Add Employee
                  </Button>
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
                <StyledTableRow key={employee.id}>
                  <StyledTableCell component="th" scope="row">
                    {employee.id}
                  </StyledTableCell>
                  <StyledTableCell>{employee.name}</StyledTableCell>
                  <StyledTableCell>{employee.mobile}</StyledTableCell>
                  <StyledTableCell>
                    {positions.find((pos) => pos.id === employee.position)
                      ?.name || " "}
                  </StyledTableCell>
                  <StyledTableCell>{employee.salary}</StyledTableCell>
                  <StyledTableCell>
                    {statuses.find((stat) => stat.id === employee.status)
                      ?.name || " "}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      size="small"
                      onClick={() => handleEdit(employee.id)}
                      variant="contained"
                      style={{
                        backgroundColor: "#008AD8",
                        color: "white",
                        borderRadius: "5px",
                        marginRight: "5px",
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
                      size="small"
                      onClick={() => handleDelete(employee.id)}
                      variant="contained"
                      style={{
                        backgroundColor: " red",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <ConfirmOverlay
                      isOpen={confirmationStates[employee.id]}
                      message="Are you sure you want to delete?"
                      onConfirm={() => confirmDelete(employee.id)}
                      onCancel={() => cancelDelete(employee.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer />
    </>
  );
};

export default ManageEmployee;
