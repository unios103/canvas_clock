import React, { Component } from 'react';

import Form from './Form.jsx';
import List from './List.jsx';

export default class Flame extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:[],
            check:[]
        };
        this.AddTodo=this.AddTodo.bind(this);
        this.RemoveTodo=this.RemoveTodo.bind(this);
        this.Check=this.Check.bind(this);
    }

    AddTodo(e){
        e.preventDefault();
        const {todo,check}=this.state;
        todo.push({title:e.target.title.value});
        check.push({status:false});
        this.setState({todo,check});
        e.target.title.value='';
    }

    RemoveTodo(i){
        const {todo,check}=this.state;
        todo.splice(i,1);
        check.splice(i,1);
        this.setState({todo,check});
    }

    Check(i){
        const {check}=this.state;
        check[i].status=!check[i].status;
        this.setState({check});
    }

    render(){
        return(
            <div className="flame title">
                <Form AddTodo={this.AddTodo} />
                <div className="todoBox">
                    <List todos={this.state.todo} sta={this.state.check} RemoveTodo={this.RemoveTodo} Check={this.Check} />
                </div>
            </div>
        )
    }
}