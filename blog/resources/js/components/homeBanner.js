import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import ReactLogo from '../../images/loading.svg'
class HomeBanner extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="bg-light">
                    <Row>
                        <Col lg={6} className="top-div text-center" md={6} sm={12}>
                            <p className="text-center m-0 top-title">React JS  </p>
                            <p className="text-center m-0 top-subtitle">Learn With Rabbil Hasan</p>
                            <p className="text-center m-0 top-subtitle">Learn Something Good, Do Something Better</p>
                            <Button className="btn login-btn m-2">Login</Button>
                        </Col>
                        <Col lg={6} className="top-div text-center" md={6} sm={12}>
                            <img className="react-logo" src={ReactLogo}/>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default HomeBanner;
