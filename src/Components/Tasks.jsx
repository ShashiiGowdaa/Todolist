import React, { Component } from 'react'

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        
        // Initial state with todos list and input value
        this.state = {
          todos: [],
          inputValue: '',
        };
      }
    
      // Handle input value change
      handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
      };
    
      // Add new todo to the list
      addTodo = () => {
        if (this.state.inputValue) {
          this.setState((prevState) => ({
            todos: [...prevState.todos, prevState.inputValue],
            inputValue: '', // Clear input after adding
          }));
        }
      };
    
      // Remove a todo from the list
      removeTodo = (indexToRemove) => {
        const newTodos = this.state.todos.filter((_, index) => index !== indexToRemove);
        this.setState({ todos: newTodos });
      };
    
      render() {
        return (
          <div>
            <h1>To-Do List</h1>
            
            {/* Input Field for adding todo */}
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder="Enter a new task..."/>
            <button onClick={this.addTodo}>Add</button>
            
            {/* To-do List Display */}
            <ul>
              {this.state.todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <button onClick={() => this.removeTodo(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    }
