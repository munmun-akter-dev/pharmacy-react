import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Config } from "../../../model/config";
import { Grid } from "rsuite";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EditEmployee=()=> {

  const { id } = useParams()

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState(1);

  useEffect(() => {
    fetch(`${Config.baseUrlCI}/employees/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setName(res.name);
        setMobile(res.mobile);
        setPosition(res.position);
        setSalary(res.salary);
        setStatus(res.status);
      });

    console.log(id);

  }, [id]);

  useEffect(() => {
    fetchPositions();
    fetchStatus();
  }, []);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [positions, getPositon] = useState([]);
  const[statuss,getStatus]=useState([]);

  function fetchPositions() {
    fetch(`${Config.baseUrlCI}/positions`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        console.log(result);
        getPositon(result);
        console.log(positions);
      })
      .catch((err) => setError(err));
  }

  function fetchStatus(){
    fetch(`${Config.baseUrlCI}/status`)
    .then((res)=>res.json())
    .then((result)=>{
      setIsLoaded(true);
      console.log(result);
      getStatus(result);
      console.log(statuss);
    })
    .catch((err)=>setError(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: id,
      name: name,
      mobile: mobile,
      position: position,
      salary: salary,
      status: status
    };

    fetch(`${Config.baseUrlCI}/employees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
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
        Edit Employee
      </div>
      <Link
        to="/manage-employee"
        style={{ textDecoration: "none", color: "black" }}
      >
        <Button
          disableElevation
          style={{
            marginLeft: "15px",
            backgroundColor: "#03AC13",
            color: "white",
            fontSize: "15px",
          }}
        >
          Manage Employee
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
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Mobile"
                multiline
                maxRows={4}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>

            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Salary"
                multiline
                maxRows={4}
                value={salary}
                style={{ width: "70%" }}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                  onChange={(e) => setPosition(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Position" />}
                >
                  {positions.map((position) => (
                    <MenuItem key={position.id} value={position.id}>
                      {position.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  onChange={(e) => setStatus(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Status" />}
                >
                  {statuss.map((status) => (
                    <MenuItem key={status.id} value={status.id}>
                      {status.name}
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
                backgroundColor: "#03AC13",
                color: "white",
                fontSize: "15px",
              }}
            >
              Update
            </Button>
          </Stack>
        </Grid>
      </form>
    </>
  );
  
}

export default EditEmployee;
