import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Config } from "../../../model/config";
import { Grid } from "rsuite";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditMedicine = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [mfg_id, setMfgID] = useState();
  const [selling_price, setSellingPrice] = useState();
  const [purchase_price, setPurchasePrice] = useState();
  const [type_id, setTypeID] = useState();
  const [unit_id, setUnitID] = useState();
  const [barcode, setBarcode] = useState();

  useEffect(() => {
    fetch(`${Config.baseUrlCI}/medicines/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName(res.name);
        setMfgID(res.mfg_id);
        setSellingPrice(res.selling_price);
        setPurchasePrice(res.purchase_price);
        setTypeID(res.type_id);
        setUnitID(res.unit_id);
        setBarcode(res.barcode);
      });

    console.log(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: id,
      name: name,
      mfg_id: mfg_id,
      selling_price: selling_price,
      purchase_price: purchase_price,
      type_id: type_id,
      unit_id: unit_id,
      barcode: barcode,
    };

    fetch(`${Config.baseUrlCI}/medicines/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>

        <span style={{ textAlign: "left" }}>
          <Link
            to="/manage-medicine"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              disableElevation
              style={{
                marginLeft: "15px",
                marginBottom: "15px",
                color: "white",
                backgroundColor: "#03AC13",
              }}

            >
              Manage Medicine
            </Button>
          </Link>
        </span>
        <span style={{ marginLeft: "300px",fontSize:"25px" }}>Edit Medicine</span>

      <form onSubmit={handleSubmit}>
        <Grid
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
          display="flex"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "5px",
              padding: "10px",
              gap: "10px",
            }}
          >
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Name"
                focused
                maxRows={2}
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>

            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Manufacturer"
                focused
                maxRows={4}
                value={mfg_id}
                onChange={(e) => setMfgID(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Selling Price"
                focused
                maxRows={4}
                value={selling_price}
                onChange={(e) => setSellingPrice(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Purchase Price"
                focused
                maxRows={4}
                value={purchase_price}
                style={{ width: "70%" }}
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Type"
                focused
                maxRows={4}
                value={type_id}
                style={{ width: "70%" }}
                onChange={(e) => setTypeID(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Unit"
                focused
                maxRows={4}
                value={unit_id}
                style={{ width: "70%" }}
                onChange={(e) => setUnitID(e.target.value)}
              />
            </div>

            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Barcode"
                focused
                maxRows={4}
                value={barcode}
                style={{ width: "70%" }}
                onChange={(e) => setBarcode(e.target.value)}
              />
            </div>

          </div>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="outlined"
              style={{
                marginLeft: "15px",
                marginBottom: "15px",
                color: "white",
                backgroundColor: "#03AC13",
              }}
            >
              Update
            </Button>
          </Stack>
        </Grid>
      </form>
    </>
  );
};

export default EditMedicine;
