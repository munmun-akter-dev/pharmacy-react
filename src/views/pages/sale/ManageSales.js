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

const ManageSale = () => {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sales, getSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  function fetchSales() {
    fetch(`${Config.baseUrlCI}/sales`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        getSales(result);
        console.log(sales);
      })
      .catch((err) => {
        setError(err);
      });
  }

  const handleEdit = (id) => {
    navigate(`/edit-sales/${id}`);
  };

  const handleDelete = (id) => {
    // let data={id:id}

    fetch(`${Config.baseUrlCI}/sales/${id}`, {
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
        fetchSales();
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
        Manage Sales
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell>Sale Total</StyledTableCell>
              <StyledTableCell>Discount</StyledTableCell>
              <StyledTableCell>Vat</StyledTableCell>
              <StyledTableCell>Remark</StyledTableCell>
              <StyledTableCell>Sale Date</StyledTableCell>
              <StyledTableCell>
                Action
                <Link
                  to="/make-sale"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    disableElevation
                    style={{
                      marginLeft: "100px",
                      color: "black",
                      backgroundColor: "lightgray",
                    }}
                  >
                    New Sale
                  </Button>
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((sale) => (
              <StyledTableRow key={sale.id}>
                <StyledTableCell component="th" scope="row">{sale.id}</StyledTableCell>
                <StyledTableCell>{sale.customer_id}</StyledTableCell>
                <StyledTableCell>{sale.sale_total}</StyledTableCell>
                <StyledTableCell>{sale.discount}</StyledTableCell>
                <StyledTableCell>{sale.vat}</StyledTableCell>
                <StyledTableCell>{sale.remark}</StyledTableCell>
                <StyledTableCell>{sale.sale_date}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={() => handleEdit(sale.id)}
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
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    startIcon={<VisibilityIcon />}
                  >
                    Details
                  </Button>
                  <Button
                    onClick={() => handleDelete(sale.id)}
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

export default ManageSale;
