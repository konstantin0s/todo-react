import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = { 
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Claudia',
        completed: false
      },
      {
        id: 3,
        title: 'Kiss her',
        completed: false
      }
    ]
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
            todo.completed = !todo.completed
      }
      return todo;
    }) } );
 }

 delTodo = () => {
   console.log(id);
 }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
