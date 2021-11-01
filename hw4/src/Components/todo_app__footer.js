import React, { Component } from "react";

const footer_style = {
    visibility: 'hidden'
};
  
const footer_style_show = {
    visibility: 'visible'
};

const clean_style = {
    visibility: 'hidden'
};

const clean_style_show = {
    visibility: 'visible'
};


class Todo_app__footer extends Component {

    render() {
        return (
            <footer className="todo-app__footer" id="todo-footer" style={(this.props.hide) ? footer_style : footer_style_show}>
                <div className="todo-app__total">
                </div>
                <ul className="todo-app__view-buttons">
                    <button>ALL</button>
                    <button>ACTIVE</button>
                    <button>COMPLETE</button>
                </ul>
                <div className="todo-app__clean" style={(this.props.hide) ? clean_style : clean_style_show}>
                    <button>Clear completed</button>
                </div>
            </footer>
        )
    }
}

export default Todo_app__footer;