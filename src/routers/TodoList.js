/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: mingbo.zhang@hand-china.com
 * @Date: 2019-09-19 15:55:49
 * @LastEditors:  
 * @LastEditTime: 2020-04-23 11:00:23
 */
import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";
// import Text from './Text'
import store from "../store";
import {
  changeInputValue,
  changeList,
  deleteTodoItem,
} from "../store/actionCreators";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handeChangeState = this.handeChangeState.bind(this);
    // this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handeChangeState);
  }
  componentDidMount() {
    axios
      .get("http://localhost.charlesproxy.com:3000/list.json")
      .then((res) => {
        console.log("res", res);
        const data = res.data;
        this.setState(
          {
            list: data,
          },
          () => {
            console.log("this.state", this.state);
          }
        );
      });
  }
  render() {
    // 当state或者props的值发生改变时，render重新执行
    return ( <
      Fragment >
      <
      div >
      <
      label htmlFor = "insertArea" > 后面是input < /label>{" "} <
      Input value = { this.state.inputValue } placeholder = "Basic usage"
      style = { { width: "300px" } } onChange = { this.handleInputChange }
      />{" "} <
      Button type = "primary"
      onClick = { this.handleSubmit } >
      提交 { " " } <
      /Button>{" "} <
      List size = "small"
      bordered dataSource = { this.state.list } renderItem = {
        (item, index) => ( <
          List.Item onClick = { this.handleItemDelete.bind(this, index) } > { " " } { item } { " " } <
          /List.Item>
        )
      }
      />{" "} < /
      div > { " " } <
      /Fragment>
    );
  }
  handleInputChange(e) {
    const action = changeInputValue(e.target.value);
    store.dispatch(action);
  }
  handleSubmit() {
    const newList = [...this.state.list, this.state.inputValue];
    const action = changeList(newList);
    store.dispatch(action);
  }
  handeChangeState() {
    this.setState(store.getState());
  }
  handleItemDelete(index) {
    const action = deleteTodoItem(index);
    store.dispatch(action);
  }
}

export default TodoList;