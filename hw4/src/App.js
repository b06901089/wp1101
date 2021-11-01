import './App.css';
import { Component } from 'react';
import Todo_app__input from './Components/todo_app__input';
import Todo_app__list from './Components/todo-app__list';
import Todo_app__footer from './Components/todo_app__footer';

class Todolist extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '', 
      display_items: [],
      counter: 0,
      todo_count: 0,
      hide: true};
  }
  
  handleInputChange = (inputtext) => {
    this.setState({value: inputtext});
  }

  handleAddTodo = (input) => {
    this.setState(state => ({counter: state.counter+1}));
    this.setState(state => ({todo_count: state.todo_count+1}));
    this.setState(prevState => ({display_items: [...prevState.display_items, [this.state.counter, input]]}), () => {this.check_footer_hide()});
  }

  ckeck_todo_count = () => {
    var count = 0;
    var count_complete = 0;
    var items = document.getElementsByClassName("todo-app__item-detail");
    var checkboxs = document.getElementsByClassName("todo-app__checkbox");
    for (let i=0; i < items.length; i++) {
        if (!checkboxs[i].getElementsByTagName("input")[0].checked) count++;
        else count_complete++;
    }

    var total = document.querySelector(".todo-app__total");

    this.setState({todo_count: count}, () => {
      total.innerHTML = this.state.todo_count.toString() + " left";
      if (count_complete !== 0) document.querySelector(".todo-app__clean").style.visibility = "visible";
      else document.querySelector(".todo-app__clean").style.visibility = "hidden";
    });
  }

  check_footer_hide = () => {
    if(this.state.display_items.length !== 0) {
      this.setState(state => ({hide: false}), () => {this.ckeck_todo_count()});
    }
    else {
      this.setState(state => ({hide: true}), () => {this.ckeck_todo_count()});
    }
  }

  render() {

    return (
      <div id="root" className="todo-app__root">

        <header className="todo-app__header">
          <h1 className="todo-app__title">todos</h1>
        </header>

        <section className="todo-app__main">
          <Todo_app__input onInputChange={this.handleInputChange} onAddTodo={this.handleAddTodo}></Todo_app__input>
          <Todo_app__list display_items={this.state.display_items} ckeck_todo_count={this.ckeck_todo_count}></Todo_app__list>
        </section>

        <Todo_app__footer display_items={this.state.display_items} hide={this.state.hide}></Todo_app__footer>

      </div>
    )
  }
}

export default Todolist;
