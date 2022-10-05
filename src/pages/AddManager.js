import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import { Container } from '@mui/material';


const validationSchema = yup.object({
    email: yup
        .string('Enter your item')
        .min(3, 'item should be of minimum 3 characters length')
        .required('item is required'),

    password: yup
        .string('Enter your item')
        .min(3, 'item should be of minimum 3 characters length')
        .required('No password provided.')
});









function Addmanager() {

    async function submit(values) {
        console.log("values", values)

    }










    //getting data in object
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
            email: '',
            password: '',
            branch: ''
        },
        onSubmit: submit
    },
    );


    return (
        <>
            <Container style={{ margin: "2% 10%" }}>
                <div className="webadmin">
                    <div className="adminlogin">
                        <h1 style={{ margin: '2%' }}>Add Branch Manager</h1>

                        <form onSubmit={formik.handleSubmit}>

                            <TextField
                                id="outlined-basic"
                                name="name"
                                label="name"
                                className="box"
                                value={formik.values.name}
                                onChange={formik.handleChange}

                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                variant="outlined" />



                            <TextField
                                id="outlined-basic"
                                name="email"
                                label="email"
                                className="box"
                                value={formik.values.email}
                                onChange={formik.handleChange}

                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                variant="outlined" />



                            <TextField
                                id="outlined-basic"
                                name="password"
                                label="password"
                                className="box"
                                value={formik.values.password}
                                onChange={formik.handleChange}

                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                variant="outlined" />




                            <TextField
                                id="outlined-basic"
                                name="branch"
                                label="branch location"
                                className="box"
                                value={formik.values.branch}
                                onChange={formik.handleChange}

                                error={formik.touched.branch && Boolean(formik.errors.branch)}
                                helperText={formik.touched.branch && formik.errors.branch}
                                variant="outlined" />

                            <div style={{ textAlign: "center" }}>
                                <Button id="btn" variant="contained" color="success" type="submit" >
                                    Add Manager
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Addmanager;