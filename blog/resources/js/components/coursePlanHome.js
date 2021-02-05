import React, {Component, Fragment} from 'react';
import PlayLogo from '../../images/play.svg'
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Axios from "axios";
import LoadingDiv from "./loadingDiv";
import WentWrong from "./wentWrong";
class CoursePlanHome extends Component {
    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }

    componentDidMount() {
        Axios.get("/CoursePlan").then((response)=>{
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
        else {
            const myData=this.state.DataList;
            return (
                <Fragment>
                    <Container fluid={true} className="jumbotron bg-light section-marginbg jumbotron-fluid">
                        <Row className="row justify-content-md-center  text-center">
                            <Col className="col-md-8">
                                <NavLink className="nav-font"  to="/courseplan" ><img className="play-logo" src={PlayLogo}/></NavLink>
                                <h5 className="title-text mt-2"><b> {myData[0]['title']}</b></h5>
                                <p className="des-text">{myData[0]['short_des']}</p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );

        }
    }
}

export default CoursePlanHome;
