import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import logo from "../assets/kahana.png"
import { Typography } from '@mui/material';

function DashNavbar() {




    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link to="/" className="nav-itms">
                                <Button color="inherit" className="nav-item">Dashboard</Button>
                            </Link>

                            <Link to="/addmanager" className="nav-itms">
                                <Button color="inherit" className="nav-item">Managers</Button>

                            </Link>


                            <li>
                                <NavDropdown title="REQUESTS" className="nav-itms nav-item" id="dropdown">
                                    <NavDropdown.Item style={{ textAlign: "center", fontSize: "14px" }}>
                                        <Link to="/accepted" style={{ textDecoration: "none", color: "black" }}>
                                            ACCEPTED
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item style={{ textAlign: "center", fontSize: "14px" }}>
                                        <Link to="/rejected" style={{ textDecoration: "none", color: "black" }}>
                                            REJECTED
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>

                            <li>
                                <NavDropdown title="LOGOUT" className="nav-itms" id="dropdown">
                                    <NavDropdown.Item style={{ textAlign: "center", fontSize: "14px" }}>
                                        Logout
                                    </NavDropdown.Item>

                                </NavDropdown>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default DashNavbar;
