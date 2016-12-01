import React, {Component} from "react";
import {Button, Icon} from 'antd';
import {Link, hashHistory} from "react-router";

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">首页</Link> |
                        <Link to="/about"> 关于我们</Link> |
                        <Link to="/contact"> 联系我们</Link> |
                        <Link to="/login"> 退出</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default Home;