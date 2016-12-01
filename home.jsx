import React, {Component} from "react";
import {Button, Icon, Row, Col, Breadcrumb} from 'antd';
import {Link} from "react-router";

class Home extends Component {
    render() {
        // 获取登录传递过来的session值
        var session = sessionStorage.getItem("name");
        return (
            <div className="nav">
                <Row>
                    <Col span={18} offset={3}>
                        <div className="navbar">
                            <Row>
                                <Col span="12">
                                    <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="/about"> 关于我们</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><Link to="/contact"> 联系我们</Link></Breadcrumb.Item>
                                </Col>
                                <Col span="4" offset="8" style={{textAlign: "right"}}>
                                    <span>{session}</span>
                                    <Link to="/login"> 退出</Link>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;