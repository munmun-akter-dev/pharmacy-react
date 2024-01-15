import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Config } from "../../../model/config";
import { Grid } from "rsuite";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let customer = {
      name: name,
      mobile: mobile,
      email: email,
      address: address
    };

    fetch(`${Config.baseUrlCI}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(customer).toString(),
    })
      .then((response) => response.json())
      .then((customer) => console.log(customer))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div
        style={{
          fontSize: "25px",
          textAlign: "center",
          backgroundColor: "#008AD8",
          marginBottom: "25px",
          color:"white"
        }}
      >
        Add Customer
      </div>
      <Link
        to="/manage-customer"
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
          Manage Customer
        </Button>
      </Link>

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
                multiline
                maxRows={4}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Mobile"
                multiline
                maxRows={4}
                onChange={(e) => setMobile(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                style={{ width: "70%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                style={{ width: "70%" }}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="outlined"
              style={{
                marginLeft: "15px",
                backgroundColor: "#03AC13",
                color: "white",
                fontSize: "15px",
              }}
            >
              Save
            </Button>
          </Stack>
        </Grid>
      </form>
    </>
  );
}
