import React, { Component } from 'react';

class Todo_app__input extends Component {
    constructor(props) {
        super(props);
        // this.state = {value: ''}; // lifting-state-up

        // this.handleInput = this.handleInput.bind(this);
        // this.handleEnter = this.handleEnter.bind(this);
    }

    handleInput = (event) => {
        // this.setState({value: event.target.value}); // lifting-state-up
        this.props.onInputChange(event.target.value);

    }

    handleEnter = (event) => {
        if (event.key === 'Enter'){
            this.props.onAddTodo(event.target.value);
            document.getElementsByClassName("todo-app__input")[0].value = null;
        }
    }

    render() {
        // const inputtext = this.state.value; // lifting-state-up
        return (
            <input  placeholder="What needs to be done" 
                    className="todo-app__input"
                    onChange={(e) => this.handleInput(e)}
                    onKeyDown={(e) => this.handleEnter(e)}>
            </input>
        );
    }
}

export default Todo_app__input;