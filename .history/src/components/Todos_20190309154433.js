import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  
  markComplete = (e) => {
    console.log(this.props)
 }

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} />
    ));
  }
}
//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
