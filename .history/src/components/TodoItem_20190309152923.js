import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
   <div>
     <p>{this.props.todo.title}</p>
   </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.array.isRequired
}

export default TodoItem;

