import React from 'react';
import ReactDom from "react-dom";
import {Router, Route, Link, browserHistory, hashHistory, IndexRoute, Lifecycle} from 'react-router';

import Home from "./home";
import Login from "./login";
import About from "./About";
import Contact from "./Contact";
import Init from "./Init";

class ReactRouter extends React.Component {
    // onEnter 调用这个方法, 如果没有session那么就返回到登录界面
    goLogin() {
        if(sessionStorage.getItem("name") == undefined) {
            hashHistory.push("/login");
        }
    }
    // 退出的时候清除session
    clearSession() {
        sessionStorage.clear();
    }
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    {/* 登录的路由应该在所有界面的外面的*/}
                    <Route path="/login" component={Login} onEnter={this.clearSession.bind(this)} />
                    <Route path="/" component={Home} onEnter={this.goLogin.bind(this)}>
                        {/* 使用IndexRoute设定默认首页, 因为路由加载完成,还没有渲染界面, 所以{this.props.children}是空 undefind */}
                        <IndexRoute component={Init} />
                        <Route path="/about" component={About} />
                        <Route path="/about/:id" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </Route>
                </Router>
            </div>
        )
    }
}
export default ReactRouter;