import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';


export default function Registration() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



  const [regData, setRegData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false

  })

  const formSubmit = (event) => {

    event.preventDefault();

    axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register", regData).then(y => {

      console.log(y)

      if (y.status == 200 || y.status == 201) {
        toast.success("Registration successful..");
        navigate('/login');
      }

    })
      .catch(y => {
        toast.error("Registration Unsuccessful..")
        console.log(y.status);
      })
    console.log(regData);

  }

  const handler = (event) => {

    if (event.target.type != "checkbox") {
      setRegData({ ...regData, [event.target.name]: event.target.value })
    } else {
      setRegData({ ...regData, [event.target.name]: event.target.checked })

    }

  }


  return (
    <div>
      <Container maxWidth="sm">
        <div className='form'>
          
          <h2 style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>Registration</h2>

          <form onSubmit={formSubmit}>
            <FormControl sx={{ m: 1, width: '16%' }} variant="outlined">

              <InputLabel id="demo-simple-select-label">Title</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Title" name="title" onChange={handler}>
                <MenuItem value={"Mr"}>Mr.</MenuItem>
                <MenuItem value={"Miss"}>Miss</MenuItem>
                <MenuItem value={"Mrs"}>Mrs.</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: '37%' }} variant="outlined">
              <TextField id="outlined-basic" label="First Name" variant="outlined" name='firstName' onChange={handler} />
            </FormControl>

            <FormControl sx={{ m: 1, width: '37%' }} variant="outlined">
              <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastName' onChange={handler} />
            </FormControl>

            <FormControl sx={{ m: 1, width: "96%" }} variant="outlined">
              <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handler} />
            </FormControl>

            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" name='password' onChange={handler} />
          </FormControl>
          
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <TextField id="outlined-basic" label="Confirm Password" type="password" variant="outlined" name='confirmPassword'  onChange={handler} />
          </FormControl> */}


            {/* password */}

            <FormControl sx={{ m: 1, width: "46%" }} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                name='password'
                onChange={handler}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>


            {/* confirm password */}

            <FormControl sx={{ m: 1, width: "47%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                onChange={handler}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>


            {/* <Checkbox {...label} onClick={handler} name="acceptTerms" label="Accept Terms" /> */}

            <FormControlLabel
              sx={{ m: 1, width: "96%" }}
              control={<Checkbox type="checkbox" name="acceptTerms" onClick={handler} />}
              label="Accept Terms"
            />


            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>


          </form>
        </div>
      </Container>
    </div>
  )
}
