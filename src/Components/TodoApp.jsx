import React, { Component } from 'react';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      completed: [],
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTodo = () => {
    if (this.state.inputValue) {
      this.setState((prevState) => ({
        todos: [...prevState.todos, prevState.inputValue],
        completed: [...prevState.completed, false],
        inputValue: '',
      }));
    }
  };

  completeTask = (index) => {
    this.setState((prevState) => {
      const completed = [...prevState.completed];
      completed[index] = !completed[index];
      return { completed };
    });
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
      completed: prevState.completed.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <section className="vh-100" style={styles.section}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-9 col-xl-7">
                <div className="card rounded-3">
                  <div className="card-body p-4">
                    <h4 className="text-center my-3 pb-3">To Do App</h4>
                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                      <div className="col-12">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form1" className="form-control" placeholder='Enter a task here'value={this.state.inputValue} onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary"
                          onClick={this.addTodo}>Add Task</button>
                      </div>
                    </form>
                    <table className="table mb-4">
                      <thead>
                        <tr>
                          <th scope='col'>No</th>
                          <th scope="col">Todo item</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.todos.map((todo, index) => (
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td style={{ textDecoration: this.state.completed[index] ? 'line-through' : 'none' }}>
                              {todo}
                            </td>
                            <td>
                              <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-danger"
                                onClick={() => this.removeTask(index)}>Delete</button>
                              <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-success ms-1"
                                onClick={() => this.completeTask(index)}>Finished</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )}}
 const styles = {
  section: {
    backgroundColor: '#eee',
  }};
