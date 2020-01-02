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
        this.Check=this.Check.bind(this);
    }

    AddTodo(e){
        e.preventDefault();
        const {todo}=this.state;
        todo.push({title:e.target.title.value,status:false,contents:""});
        this.setState({todo});
        console.log(this.state.todo);//
        e.target.title.value='';
    }

    RemoveTodo(i){
        const {todo}=this.state;
        todo.splice(i,1);
        this.setState({todo});
    }

    Check(i){
        const {todo}=this.state;
        todo[i].status=!todo[i].status;
        this.setState({todo});
        console.log(this.state.todo[i].status);
    }

    render(){
        return(
            <div className="flame title">
                <Form AddTodo={this.AddTodo} />
                <div className="todoBox">
                    <List todos={this.state.todo} RemoveTodo={this.RemoveTodo} Check={this.Check} />
                </div>
            </div>
        )
    }
}