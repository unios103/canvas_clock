import React, { Component } from 'react';

import Form from './Form.jsx';
import List from './List.jsx';

import './../css/rCss.css';
import './../css/main.css';

export default class Flame extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:[]
        };
        this.handleAdd=this.handleAdd.bind(this);
    }

    handleAdd(e){
        e.preventDefault();
        console.log(e.target.title.value);
    }

    render(){
        return(
            <div className="flame title">
                <Form handleAdd={this.handleAdd} />
                <List />
            </div>
        )
    }
}