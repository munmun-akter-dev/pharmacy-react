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

const ManageMedicine = () => {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  function fetchMedicines() {
    fetch(`${Config.baseUrlCI}/medicines`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        setMedicines(result);
        console.log(medicines);
      })
      .catch((err) => {
        setError(err);
      });
  }

  const handleEdit = (id) => {
    navigate(`/edit-medicine/${id}`);
  };

  const handleDelete = (id) => {
    // let data={id:id}

    fetch(`${Config.baseUrlCI}/medicines/${id}`, {
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
        fetchMedicines();
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
        Manage Medicine
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Manufacturer</StyledTableCell>
              <StyledTableCell>Selling Price</StyledTableCell>
              <StyledTableCell>Purchase Price</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Unit</StyledTableCell>
              <StyledTableCell>Barcode</StyledTableCell>
              <StyledTableCell>
                Action
                <Link
                  to="/add-medicine"
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
                    Add Medicine
                  </Button>
                </Link>
                </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((medicine) => (
              <StyledTableRow key={medicine.id}>
                <StyledTableCell component="th" scope="row">{medicine.id}</StyledTableCell>
                <StyledTableCell>{medicine.name}</StyledTableCell>
                <StyledTableCell>{medicine.mfg_id}</StyledTableCell>
                <StyledTableCell>{medicine.selling_price}</StyledTableCell>
                <StyledTableCell>{medicine.purchase_price}</StyledTableCell>
                <StyledTableCell>{medicine.type_id}</StyledTableCell>
                <StyledTableCell>{medicine.unit_id}</StyledTableCell>
                <StyledTableCell>{medicine.barcode}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() => handleEdit(medicine.id)}
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
                    onClick={() => handleDelete(medicine.id)}
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

export default ManageMedicine;
