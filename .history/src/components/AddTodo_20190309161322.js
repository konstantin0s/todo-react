import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form>
        <input type="text" name="title" placeholder="Add ToDo" />
      </form>
    )
  }
}

export default AddTodo


