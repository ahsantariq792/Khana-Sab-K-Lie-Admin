import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';


export default function Details() {

    return (

        <div className="container py-5" style={{ overflow: "hidden" }}>
            <h1 className="text-center py-2">DETAILS</h1>
            <div className="accordion-body shadow rounded p-5">
                <ul className="ul">
                    <li className="full"><span className="left">NAME</span><span className="right">NAME</span>
                    </li>
                    <li className="full"><span className="left">FATHER'S NAME</span><span className="right">FATHER'S NAME</span>
                    </li>
                    <li className="full"><span className="left">CNIC</span><span className="right">CNIC</span>
                    </li>
                    <li className="full"><span className="left">PHONE NUMBER</span><span className="right"> PHONE NUMBER</span>
                    </li>
                    <li className="full"><span className="left">RESIDENTIAL ADDRESS</span><span className="right"> RESIDENTIAL ADDRESS </span>
                    </li>
                    <li className="full"><span className="left">RASHAN FOR</span><span className="right">RASHAN FOR </span>
                    </li>
                </ul>
            </div>



            <div className='loan_buttons pt-5 '>
                <Button variant="contained" className="loanbtn mx-5 px-5" color="success">Accept</Button>
                <Button variant="contained" className="loanbtn mx-5 px-5" color="error">Reject</Button>
            </div>
        </div>

    );
}