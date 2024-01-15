import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Config } from "../../../model/config";
import { Grid } from "rsuite";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditMedicineType = () => {
  const { id } = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`${Config.baseUrlCI}/medicine-types/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName(res.name);
      });

    console.log(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: id,
      name: name,
    };

    fetch(`${Config.baseUrlCI}/medicine-types/${id}`, {
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
      <div
        style={{
          fontSize: "25px",
          textAlign: "center",
          backgroundColor: "#008AD8",
          marginBottom: "25px",
          color:"white"
        }}
      >
        Edit Medicine Type
      </div>
      <Link
        to="/manage-medicine-type"
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
          Manage Medicine Type
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "70%" }}
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

export default EditMedicineType;
