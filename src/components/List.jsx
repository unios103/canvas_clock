import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List=(props)=>{
    const [checkbox,change_box]=React.useState(false);

    function Check(e){
        e.preventDefault();
        change_box(!checkbox);
    };

    function Box(checkbox){
        return checkbox ? <FontAwesomeIcon icon={['far', 'check-square']} /> : <FontAwesomeIcon icon={['far', 'square']} />;
    }

    return(
        <div className="list_box">
            <ul>
                {props.todos.map((todo,i)=>{
                    return (<li key={i} className="list"><span className="form_btn checkbox" onClick={Check}>{Box(checkbox)}</span>
                    {todo.title}<span className="form_btn trash" onClick={()=>props.RemoveTodo(i)}><FontAwesomeIcon icon={['fas', 'trash']} /></span></li>);
                })}
            </ul>
        </div>
    );
};
export default List;