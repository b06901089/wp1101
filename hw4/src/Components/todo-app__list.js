import React, { Component } from "react";

class Todo_app__list extends Component {

    change_style = () => {
        var items = document.getElementsByClassName("todo-app__item-detail");
        var checkboxs = document.getElementsByClassName("todo-app__checkbox");
        for (let i=0; i < items.length; i++) {
            if (checkboxs[i].getElementsByTagName("input")[0].checked) {
                items[i].style = "text-decoration: line-through; opacity: 0.5;"
            }
            else {
                items[i].style = "text-decoration: none; opacity: 1;"
            }
        }
    }

    render() {
        return (
            <ul className="todo-app__list" id="todo-list">
                {this.props.display_items.map( e => 
                    <li className="todo-app__item" key={e[0]} onClick={this.change_style}>
                        <div className="todo-app__checkbox">
                            <input className="checkbox" type="checkbox" id={e[0]}></input>
                            <label htmlFor={e[0]}></label>
                        </div>
                        <h1 className="todo-app__item-detail">{e[1]}</h1>
                        <img className="todo-app__item-x" src="./../../img/x.png" alt="x"></img>
                    </li>                   
                )}    
            </ul>
        )
    }
}

export default Todo_app__list;