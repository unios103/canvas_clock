import React, { Component } from 'react';

import Form from './Form.jsx';
import List from './List.jsx';

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