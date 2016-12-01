import React, {Component} from "react";
import { Router, Route, hashHistory } from 'react-router';
import {Lifecycle} from "react-router";
class About extends Component {
    go() {
        hashHistory.push("/contact");
    }
    render() {
        return (
            <div>
                <a onClick={this.go.bind(this)}>about</a>
            </div>
        )
    }

}
export default About;