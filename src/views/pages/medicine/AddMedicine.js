import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import { Config } from "../../../model/config";
import { Grid } from "rsuite";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function AddMedicine() {
  const [name, setName] = useState("");
  const [mfg_id, setMfgID] = useState();
  const [selling_price, setSellingPrice] = useState();
  const [purchase_price, setPurchasePrice] = useState();
  const [type_id, setTypeID] = useState();
  const [unit_id, setUnitID] = useState();
  const [barcode, setBarcode] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      mfg_id: mfg_id,
      selling_price: selling_price,
      purchase_price: purchase_price,
      type_id: type_id,
      unit_id: unit_id,
      barcode: barcode,
    };

    fetch(`${Config.baseUrlCI}/medicines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMFG();
    fetchTypes();
    fetchUnits()
  }, []);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [manufacturers, getMFG] = useState([]);
  const [medicinetypes,getMedicineTypes]=useState([]);
  const [medicineunits,getMedicineUnits]=useState([]);

  function fetchMFG() {
    fetch(`${Config.baseUrlCI}/manufacturers`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        getMFG(result);
        console.log(manufacturers);
      })
      .catch((err) => {
        setError(err);
      });
  }

  function fetchTypes(){
    fetch(`${Config.baseUrlCI}/medicine-types`)
    .then((res)=>res.json())
    .then((result)=>{      
      setIsLoaded(true);
      console.log(result);
      getMedicineTypes(result);
      console.log(medicinetypes);
    })
    .catch((err)=>setError(err));
  }

  function fetchUnits(){
    fetch(`${Config.baseUrlCI}/medicine-units`)
    .then((res)=>res.json())
    .then((result)=>{
      setIsLoaded(true);
      console.log(result);
      getMedicineUnits(result);
      console.log(medicineunits);
    })
    .catch((err)=>setError(err));
  }

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
        Add Medicine
      </div>
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
                label="Selling Price"
                multiline
                maxRows={4}
                onChange={(e) => setSellingPrice(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>

            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Purchase Price"
                multiline
                maxRows={4}
                onChange={(e) => setPurchasePrice(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>

            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Barcode"
                multiline
                maxRows={4}
                onChange={(e) => setBarcode(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>

            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  Manufacturer
                </InputLabel>
                <Select
                  onChange={(e) => setMfgID(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Manufacturer" />}
                >
                  {manufacturers.map((manufacturer) => (
                    <MenuItem key={manufacturer.id} value={manufacturer.id}>
                      {manufacturer.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  Medicine Type
                </InputLabel>
                <Select
                  onChange={(e) => setTypeID(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Medicine Type" />}
                >
                  {medicinetypes.map((medicinetype) => (
                    <MenuItem key={medicinetype.id} value={medicinetype.id}>
                      {medicinetype.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  Medicine Unit
                </InputLabel>
                <Select
                  onChange={(e) => setUnitID(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Medicine Unit" />}
                >
                  {medicineunits.map((medicineunit) => (
                    <MenuItem key={medicineunit.id} value={medicineunit.id}>
                      {medicineunit.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
              Save
            </Button>
          </Stack>
        </Grid>
      </form>
    </>
  );
}
