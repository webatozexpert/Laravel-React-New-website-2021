import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import LoadingDiv from "./loadingDiv";
import WentWrong from "./wentWrong";

class CourseFeature extends Component {

    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }



    componentDidMount() {
        Axios.get("/CourseFeatures").then((response)=>{
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
            const mylist = this.state.DataList;
            const myView=mylist.map(mylist=>{
                return(
                    <Col className="p-2" lg={3} md={3} sm={12}>
                        <Card className=" card text-center">
                            <Card.Body >
                                <Card.Img className="item-logo"  src={mylist.img} />
                                <h5 className="title-text mt-2"><b>{mylist.title}</b></h5>
                                <p className="des-text">{mylist.des}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            return (
                <Fragment>
                    <Container className="section-margin">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );


        }
    }


}

export default CourseFeature;
