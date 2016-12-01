import React, {Component} from "react";
import {Lifecycle, hashHistory} from "react-router";
import {Row, Col, Icon, Button, Input, Form, message} from "antd";
// class Login extends Component {
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    signIn() {
        if(this.state.name=="zhangxuchao" && this.state.password=="heping") {
            sessionStorage.setItem("name", this.state.name);
            message.success("登录成功!");
            hashHistory.push("/");
        }
        else {
            sessionStorage.clear();
            message.error("用户名和密码不匹配");
        }
    }

    render() {
        return (
            <div>
                <form>
                    <Row>
                        <Col span={8} offset={8}>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p style={{textAlign: "center", fontSize: 60}}>
                                <Icon type="user"></Icon>
                            </p>
                            <br/>
                            <p>
                                <Input type="text" name="name" value={this.state.name} className="name"
                                       onChange={this.changeName.bind(this)}/>
                            </p>
                            <br/>
                            <p>
                                <Input type="password" name="password" value={this.state.password} className="password"
                                       onChange={this.changePassword.bind(this)}/>
                            </p>
                            <br/>
                            <p style={{textAlign: "right"}}>
                                <Button type="primary" icon="user" onClick={this.signIn.bind(this)}> 登 录</Button>
                            </p>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}
;
// }

export default Login;