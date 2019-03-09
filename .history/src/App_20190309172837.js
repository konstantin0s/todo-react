import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = { 
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Dinner with Claudia',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Kiss her',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?+_limit=10')
    .then(res => this.setState( { todos: res.data}) )
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
             <Route exact path="/" render={props => (
             <React.Fragment>
             <AddTodo addTodo={this.addTodo} />
             <Todos todos={this.state.todos} markComplete={this.markComplete} 
               delTodo={this.delTodo} />
            </React.Fragment>
           )} />    
           <Route path="/about" component={About} /> 
         </div>
      </div>
      </Router>
    );
  }
}

export default App;
