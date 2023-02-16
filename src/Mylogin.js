import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';





export default function Mylogin() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();

    };



    const loginSubmit = (e) => {

        e.preventDefault();

        axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate", loginData).then(y => {

            console.log(y)

            if (y.status == 200 || y.status == 201) {
                toast.success("Login successful..");
                localStorage.setItem("user", JSON.stringify(y.data))
            }

        }).catch(y => {
            toast.error("Login Unsuccessful..")
            console.log(y.status);
        })
    };


    const loginHandler = (e) => {

        setLoginData({ ...loginData, [e.target.name]: (e.target.value) })

    };




    return (
        <>
            <Container maxWidth="sm">
                <h2 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>Login</h2>
                <form onSubmit={loginSubmit}>

                    <FormControl fullWidth variant="outlined">
                        <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={loginHandler} />
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 3 }} variant="outlined" >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            name='password'
                            onChange={loginHandler}
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
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Submit
                    </Button>
                </form>
            </Container>


        </>
    )
}
