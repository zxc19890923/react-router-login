import React, {Component} from "react";
import {Input, Button, Row, Col} from "antd";
import $ from "jquery";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName: "",
            visible: "none",
            data: []
        }
    }

    handleSearch(e) {
        this.setState({
            searchName: e.target.value,
            visible: "block"
        });
        if (e.target.value == "") {
            this.setState({
                visible: "none"
            })
        }

        // 通过e.target.value查找数据库,搜索数据。
        $.get(
            "data/data.json",
            function (result) {
                this.setState({
                    data: result
                })
            }.bind(this)
        )
    }

    render() {
        var query = this.state.data.map(function (item, i) {
            return (
                <li key={i}>{item.id} {item.name} {item.address}</li>
            )
        });
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <a style={{fontSize: 20}}>检索内容</a>
                <br/>
                <Row>
                    <Col span="20">
                        <Input type="text" className="searchInfo" value={this.state.searchName}
                               style={{borderRadius: 0, height: 40, lineHeight: 40}}
                               onChange={this.handleSearch.bind(this)}/>
                        {/* 查找结果 */}
                        <div
                            style={{width: "100%", height: 220, border: "1px solid #eee", display: this.state.visible}}>
                            <ul>
                                {query}
                            </ul>
                        </div>
                    </Col>
                    <Col span="4">
                        <Button type="primary" style={{borderRadius: 0, height: 40}}>开始检索</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Search;