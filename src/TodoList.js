import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import Text from './Text'
import './TodoList.css'

class TodoList extends Component{
  constructor (props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render () {
    // 当state或者props的值发生改变时，render重新执行
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>后面是input</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick= {this.handleClick.bind(this)} >提交</button>
          <Text
            text={this.state.inputValue}
          />
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                // <div>
                <TodoItem
                  content={item}
                  key={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                />
                // </div>
                )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleChange(e) {
    const value = e.target.value
    this.setState(() =>(
      {
        inputValue: value
      }
    ))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleClick() {
    this.setState((prevState) => (
      {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    ))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    // this.state.list = [...this.state.list, this.state.inputValue]
  }
  handleItemDelete (index) {
    // const list = this.state.list
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
    // this.setState({
    //   list: list
    // })
  }
}

export default TodoList