import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            item: []
        }
    }

    onChange(event) {
        this.setState ({
            userInput: event.target.value
        });
    }

    addtodo(event) {
        event.preventDefault();
        this.setState ({
            item: [...this.state.item, this.state.userInput],
            userInput: ''
        });
    }

    deletetodo(event) {
        event.preventDefault();
        const array = this.state.item;
        const index = array.indexOf(event.target.value);
        array.splice(index);
        this.setState ({
            item: array
        });
    }

    renderTodo() {
        return this.state.item.map((item) => {
            return (
                <div align='right' className="list-group-item list-group-item-action" key={item}>
                    {item} <button className="btn btn-danger" onClick={this.deletetodo.bind(this)}>x</button>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <h1 align='center'>Todo List</h1>
                <form className="form-row align-items-center">
                    <input className="form-control mb-2"
                        value={this.state.userInput}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        placeholder='Renseigner un item'>
                    </input>
                    <button
                        align='center'
                        className="btn btn-primary mb-2"
                        onClick={this.addtodo.bind(this)}>
                        Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.renderTodo()}
                </div>
            </div>
        );
    }
}

export default TodoList;