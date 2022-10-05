import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function SimpleAccordion(props) {
    return (
        <div>
            <Accordion style={{ backgroundColor: "#D3D3D3" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>UserId = {props.userID}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ marginLeft: "2%" }}>
                    <Typography>
                        User Name : {props.username}
                    </Typography>
                    <Typography>
                        Father name : {props.fathername}
                    </Typography>
                    <Typography>
                        CNIC : {props.cnic}
                    </Typography>
                    <Typography>
                        Rashan for : {props.rashan}
                    </Typography>
                    <Link to="/details" style={{ textDecoration: "none" }}>
                        <Button style={{ marginTop: "2%" }} variant="contained" color="primary">See Details</Button>
                    </Link>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
