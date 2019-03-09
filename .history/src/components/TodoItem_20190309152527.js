import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
   <div>
     <p>{this.props.todo.title}</p>
   </div>
    )
  }
}

export default TodoItem;

