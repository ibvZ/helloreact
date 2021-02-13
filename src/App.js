import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitleValue: '',
      todoList: [],
    }
  }

  onInputChange = (event) => {
    this.setState({ todoTitleValue: event.target.value })
  }

  handleButtonClick = () => {
    if (this.state.todoTitleValue.length > 0) {
      const tmpArray = this.state.todoList;
      const todoItem = { id: 'someId', title: this.state.todoTitleValue }
      tmpArray.push(todoItem)
      this.setState({todoList: tmpArray})
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React JS. From zero to hero
        </header>
        <main className="App-container">
          <h4 className="title">Todo App</h4>
          <div className="row">
            <input type="text" className="todo__add-input" placeholder="Todo title ..."
            onChange={this.onInputChange}
            />
            <button className="todo__add-button" onClick={this.handleButtonClick}>+</button>
          </div>
          <div className="todo-items-list">
            {this.state.todoList.map((item, index) => {
              return (
                <div className="todo__item" key={index}>{item.title}</div>
              )
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
