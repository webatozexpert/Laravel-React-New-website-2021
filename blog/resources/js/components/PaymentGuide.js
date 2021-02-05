import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import bKashLogo from '../../images/BKASH-LOGO.png'
import {NavLink} from "react-router-dom";
import Axios from "axios";
import LoadingDiv from "./loadingDiv";
import WentWrong from "./wentWrong";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class PaymentGuide extends Component {

    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }


    componentDidMount() {
        Axios.get("/PaymentGuide").then((response)=>{
            if(response.status==200){
                this.setState({DataList:response.data,isLoading:false})
            }
            else{
                this.setState({isLoading:false,isError:true})
            }

        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })
    }

    render() {

        if(this.state.isLoading===true){
            return (
                <LoadingDiv/>
            )
        }

        else if(this.state.isError===true){
            return (
                <WentWrong/>
            )
        }
        else{

            const myData=this.state.DataList;

            return (
                <Fragment>
                    <Container className="container section-marginbg">
                        <Row>
                            <Col md={6} sm={12} className="p-3">
                                <img className="bkash-logo" src={bKashLogo} /><br/>
                                <p className="text-justify des-text">{ ReactHtmlParser(myData[0]['des']) }</p>
                                <Row>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <h4 className="">0000</h4>
                                                <p className="des-text m-0">Total Class</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <h4 className="">0000</h4>
                                                <p className="des-text m-0">Total Student</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <h4 className="">{myData[0]['price']}</h4>
                                                <p className="des-text m-0">Enroll Fee</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} sm={12} className="p-3 text-center">
                                <Card className="text-center h-100">
                                    <img className="card-img-top" src={myData[0]['banner']} alt="Card image cap"/>
                                    <Card.Body>
                                        <NavLink className="btn mt-2 btn-outline"  to="/registration" href="#link">Enroll Now</NavLink>

                                    </Card.Body>
                                </Card>


                            </Col>
                        </Row>

                    </Container>

                </Fragment>
            );
        }

    }
}

export default PaymentGuide;
