import React, { Component } from 'react';

import Form from './Form.jsx';
import List from './List.jsx';

export default class Flame extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:[]
        };
        this.AddTodo=this.AddTodo.bind(this);
        this.RemoveTodo=this.RemoveTodo.bind(this);
    }

    AddTodo(e){
        e.preventDefault();
        const {todo}=this.state;
        todo.push({title:e.target.title.value});
        this.setState({todo});
        e.target.title.value='';
    }

    RemoveTodo(i){
        const {todo}=this.state;
        todo.splice(i,1);
        this.setState({todo});
    }

    render(){
        return(
            <div className="flame title">
                <Form AddTodo={this.AddTodo} />
                <List todos={this.state.todo} RemoveTodo={this.RemoveTodo} />
            </div>
        )
    }
}