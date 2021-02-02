import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div>
                    <h1>Home Page</h1>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
