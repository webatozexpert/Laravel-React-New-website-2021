import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/homeBanner";
import CourseFeature from "../components/courseFeature";
import LoadingDiv from "../components/loadingDiv";
import WentWrong from "../components/wentWrong";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>

            </Fragment>
        );
    }
}

export default HomePage;
