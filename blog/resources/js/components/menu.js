import React, {Component, Fragment} from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";



class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Laravel-React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default Menu;
