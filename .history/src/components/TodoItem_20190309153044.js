import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
   <div style={{ backgroundColor: '#f4f4f4'}}>
     <p>{this.props.todo.title}</p>
   </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;

