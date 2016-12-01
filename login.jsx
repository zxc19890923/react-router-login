import React, {Component} from "react";
import {Lifecycle, hashHistory} from "react-router";
import {Row, Col, Icon, Button, Input, Form, message, Modal} from "antd";
// class Login extends Component {
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            visible: false
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
        if (this.state.name == "zhangxuchao" && this.state.password == "heping") {
            sessionStorage.setItem("name", this.state.name);
            message.success("登录成功!");
            hashHistory.push("/");
        }
        else {
            sessionStorage.clear();
            message.error("用户名和密码不匹配");
        }
    }

    // 单机显示注册窗口
    handleOk() {
        this.setState({
            visible: true
        })
    }

    // 单机隐藏注册窗口
    handleCancel() {
        this.setState({
            visible: false
        })
    }

    // 注册
    handleGo() {

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
                                       onChange={this.changeName.bind(this)} placeholder="请输入用户名"/>
                            </p>
                            <br/>
                            <p>
                                <Input type="password" name="password" value={this.state.password} className="password"
                                       onChange={this.changePassword.bind(this)} placeholder="请输入密码"/>
                            </p>
                            <br/>
                            <div style={{textAlign: "right"}}>
                                <Row>
                                    <Col span="12" style={{textAlign: "left"}}>
                                        <a onClick={this.handleOk.bind(this)}>注册 </a>
                                    </Col>
                                    <Col span="12" style={{textAlign: "right"}}>
                                        <Button type="primary" icon="user" onClick={this.signIn.bind(this)}> 登
                                            录</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </form>
                <Modal title="注册" visible={this.state.visible} closable={true} okText="注册"
                       onOk={this.handleGo.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    <form>
                        <p className="r_p">
                            <Input type="text" className="name" placeholder="请输入用户名"/>
                        </p>
                        <p className="r_p">
                            <Input type="text" className="email" placeholder="请输入邮箱地址"/>
                        </p>
                        <p className="r_p">
                            <Input type="password" className="password" placeholder="请输入密码"/>
                        </p>
                        <p className="r_p">
                            <Input type="password" className="secondPassword" placeholder="请确定密码"/>
                        </p>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Login;