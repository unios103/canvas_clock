import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state={
            num:[]
        }
        this.Check=this.Check.bind(this);
        this.Box=this.Box.bind(this);
    }

    Check(e){
        e.preventDefault();
        change_box(!checkbox);
    };

    Box(checkbox){
        return checkbox ? <FontAwesomeIcon icon={['far', 'check-square']} /> : <FontAwesomeIcon icon={['far', 'square']} />;
    }
}