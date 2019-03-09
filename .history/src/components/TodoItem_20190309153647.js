import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
 
  getStyle = () => {
   if (this.props.todo.completed) {
     return {
       textDecoration: 'line-through'
     }
   } else {
     return {
       textDecoration: 'none'
     }
   }
  }

  render() {
    return (
   <div style={this.getStyle()}>
     <p>{this.props.todo.title}</p>
   </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

export default TodoItem;

