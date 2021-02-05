import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/homeBanner";
import CourseFeature from "../components/courseFeature";
import CoursePlan from "../components/coursePlanHome";
import PaymentGuide from "../components/PaymentGuide";
import MoreSeries from "../components/moreSeries";
import Footer from "../components/footer";


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
                <CoursePlan/>
                <PaymentGuide/>
                <MoreSeries/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
