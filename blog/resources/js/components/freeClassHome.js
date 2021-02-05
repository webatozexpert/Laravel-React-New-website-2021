import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import playLogo from '../../images/play.svg';
import Axios from "axios";
import LoadingDiv from "./loadingDiv";
import WentWrong from "./wentWrong";
class FreeClassHome extends Component {

    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }

    componentDidMount() {
        Axios.get("/FreeClass").then((response)=>{
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
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };



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
                    <div className="p-2 text-center">
                        <Card className="m-2 text-center card  ">
                            <img className="w-100" src={mylist['img']} alt="Card image cap"/>
                            <Card.Body>
                                <img id="videoPlay" className="play-small" src={playLogo}/>
                                <p className="des-text mt-2"><b>{mylist['title']}</b></p>
                            </Card.Body>

                        </Card>
                    </div>
                )


            });
            return (
                <Fragment>
                    <Container className="bg-light text-center section-margin jumbotron jumbotron-fluid" fluid={true}>
                        <Container>
                            <h5 className="title-text mt-2"><b>Free Class</b></h5>
                            <p className="des-text">Watch free videos on React JS by Rabbil Hasan.</p>
                            <Row>
                                <Col sm={12} md={12} lg={12}>

                                    <div>
                                        <Slider {...settings}>
                                            {myView}
                                        </Slider>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </Container>

                </Fragment>
            );

        }



    }
}

export default FreeClassHome;
