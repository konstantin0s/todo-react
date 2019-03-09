import React, { Component } from 'react'

export class AddTodo extends Component {
 
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo({this.state.title});
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={{this.onSubmit}} style={{ display:'flex' }}>
        <input 
        style={{ flex: '10', padding: '5px' }}
        type="text" 
        name="title" 
        placeholder="Add ToDos ..." 
        value={this.state.title}
        onChange={this.onChange}/>
         <input type="submit" 
          value="Submit" className="btn"
          style={{flex: '1'}} />
      </form>
    )
  }
}

export default AddTodo


