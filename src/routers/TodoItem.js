import React, { Component } from 'react'
import propTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    // 当父组件的render执行时，子组件的render也会跟着重新执行
    // return <div onClick={this.handleClick}>{this.props.text}-{this.props.content}</div>
    return React.createElement('div', {}, React.createElement('span',{}, 'item'))
  }
  handleClick() {
    // alert(this.props.index)
    this.props.deleteItem(this.props.index)
  };
}
TodoItem.propTypes = {
  content: propTypes.string,
  deleteItem: propTypes.func,
  index: propTypes.number,
}
TodoItem.defaultProps = {
  text: 'hello world'
}

export default TodoItem

// import React, { Component } from 'react'

// class TodoItem extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>item</div>
//     )
//   }
// }
// export default TodoItem