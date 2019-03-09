import React, { Component } from 'react'

export class AddTodo extends Component {
 
  state = {
    title: ''
  }

  render() {
    return (
      <form style={{ display:'flex' }}>
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


