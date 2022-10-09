// import '../App.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/kahana.png'
import { useDispatch } from 'react-redux';
import { login } from '../state/User'
import axios from 'axios';
import { baseurl } from '../Core';
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});





function Login() {

    const dispatch = useDispatch()
    const submit = (values) => {
        console.log("values", values)


        axios.post(`${baseurl}/api/v1/admin/login`,
        {
          email: values.email,
          password: values.password
        }, {
        withCredentials: true
      })
        .then(res => {
          console.log(res.data);
          if (res.data.email) {
            dispatch(login({
                email: values.email,
                password: values.password,
            }))
          }
  
  
        })
        .catch(error => {
          alert('Incorrect email or password')
        })

    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            email: 'admin@gmail.com',
            password: 'admin12345678',

        },
        onSubmit: submit
    },
    );


    return (
        <>
            <div className="container">

                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none  bg-light d-md-block">
                        <div style={{ fontFamily: "Impact, Haettenschweiler" }}>
                        </div><br /><br />
                        <div className="mx-2" style={{ color: "grey", textAlign: "center" }}>
                            <p className="para1"><center></center></p>
                        </div>
                        <div className="pic1" ><center>
                            <img style={{ height: "300px" }} src={Logo} /></center>
                        </div>
                    </div>
                    <div className="col-md-6  p-5" style={{ backgroundColor: "#A0F9AF" }}>
                        <h2 className="pb-4" style={{ fontFamily: "cursive", marginBottom: "10px" }}><center><b> WELCOME </b></center></h2><br />
                        <div className="form-style">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group pb-3">
                                    {/* <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}

                                    <TextField
                                        id="outlined-basic"
                                        name="email"
                                        label="email"
                                        className="inputbox"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}

                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        fullWidth
                                        variant="outlined" />

                                </div>
                                <div className="form-group pb-3">
                                    {/* <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" /> */}

                                    <TextField
                                        id="outlined-basic"
                                        name="password"
                                        label="password"
                                        type="password"
                                        className="inputbox"

                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        fullWidth
                                        variant="outlined" />

                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center"><input name="" className="mx-1" type="checkbox" value="" /> <span className="pl-2 font-weight-bold">Remember Me</span></div>
                                    <div>Forget Password?</div>
                                </div><br />
                                <div className="pb-2">
                                    <button type="submit" id="userbtn" className="btn btn-success py-2 w-100 font-weight-bold mt-2">LOGIN</button>
                                </div>
                                {/* <p><center>New User?&nbsp;&nbsp;&nbsp;&nbsp;<b><Link to="/signup" style={{textDecoration: "none", color:"black"}}>SIGNUP HERE</Link></b> </center></p> */}
                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;