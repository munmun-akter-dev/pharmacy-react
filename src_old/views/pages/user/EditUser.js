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

import { useForm } from "react-hook-form";

const EditUser=()=> {

  const { id } = useParams()

  const { register, handleSubmit } = useForm();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleID] = useState(0);


  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("role_id", role_id);
    formData.append("file", data.file[0]);

    fetch(`${Config.baseUrlCI}/users`, {
    method: 'POST',
    body: formData
    })
      .then((response) => response.json())
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(`${Config.baseUrlCI}/users/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserName(res.username);
        setPassword(res.password);
        setFullName(res.full_name);
        setEmail(res.email);
        setRoleID(res.role_id);
      });

    console.log(id);

  }, [id]);

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
        Edit User
      </div>
      <Link
        to="/manage-user"
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
          Manage User
        </Button>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
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
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Role" />}
                  onChange={(e) => setRoleID(e.target.value)}
                >
                  {/* {positions.map((position) => (
                    <MenuItem key={position.id} value={position.id}>
                      {position.name}
                    </MenuItem>
                  ))} */}
                  <MenuItem value={role_id}></MenuItem>
                  <MenuItem value="1">Admin</MenuItem>
                  <MenuItem value="2">Manager</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Username"
                multiline
                maxRows={4}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Password"
                multiline
                maxRows={4}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Full Name"
                multiline
                maxRows={4}
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: "70%" }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                value={email}
                style={{ width: "70%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                focused
                id="outlined-multiline-flexible"
                label="Photo"
                type="file"
                {...register("file")}
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
  
}

export default EditUser;
