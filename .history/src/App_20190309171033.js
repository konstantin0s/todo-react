import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = { 
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with Claudia',
        completed: false
      },
      {
        id: uuid.v4(),
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

 //delete todo
 delTodo = (id) => {
   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
 }

 //Add todo
 addTodo = (title) => {
   const newTodo = {
     id: uuid.v4(),
     title,
     completed: false
   }
   this.setState({ todos: [...this.state.todos, newTodo]});
 }

  render() {
    console.log(this.state.todos);
    return (
      <Router>
      <div className="App">
         <div className="container">
         <Header />
             <Route path="/" render={props => (
             <React.Fragment>
             <AddTodo addTodo={this.addTodo} />
             <Todos todos={this.state.todos} markComplete={this.markComplete} 
               delTodo={this.delTodo} />
            </React.Fragment>
         )} />      
         </div>
         <Route path="/about" component={About} />>
      </div>
      </Router>
    );
  }
}

export default App;
