import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import  {faEnvelope,faPhone,faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";



class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="jumbotron  jumbotron-fluid bg-light mb-0">
                    <Container className="container">
                        <Row>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">Follow Me</h3>
                                <hr/>
                                <p><a target="_blank" href="" className="footer-link">  <FontAwesomeIcon icon={faFacebook} /> Facebook</a></p>
                                <p><a target="_blank" href="" className="footer-link">  <FontAwesomeIcon icon={faYoutube} /> YouTube </a></p>
                            </Col>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">My Address</h3>
                                <hr/>
                                <p className="des-text">  <FontAwesomeIcon icon={faMapMarkedAlt} /> Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207</p>
                                <p className="des-text">  <FontAwesomeIcon icon={faPhone} /> +8801701063280</p>
                                <p className="des-text">  <FontAwesomeIcon icon={faEnvelope} /> Engr.Rabbil@yahoo.com</p>
                            </Col>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">Information</h3>
                                <hr/>
                                <a className="footer-link" target="_blank" href="http://rabbil.com/">About Rabbil </a><br/>
                            </Col>
                            <Col sm={6} lg={3} md={3} >
                                <h3 className="title-text">Legal</h3>
                                <hr/>
                                <a className="footer-link" target="_blank" href="">Refund Policy</a><br/>
                                <a className="footer-link" target="_blank" href="">Terms & Conditions</a><br/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid={true} className="text-white m-0 text-center p-3 custom-bg">
                    <p className="credit-text my-2 ">All Rights Reserved By Rabbil Hasan © 2020-2021</p>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
