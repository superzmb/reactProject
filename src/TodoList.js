import React, { Component, Fragment } from 'react'

class TodoList extends Component{
    constructor (props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render () {
        return (
            <Fragment>
                <div>
                    <input
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}
                    />
                    <button onClick= {this.handleClick.bind(this)} >提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>

        )
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        // this.state.list = [...this.state.list, this.state.inputValue]
    }
    handleItemDelete (index) {
        const list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default TodoList