import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List=(props)=>{
    function Box(status){
        return status ? <FontAwesomeIcon icon={['far', 'check-square']} /> : <FontAwesomeIcon icon={['far', 'square']} />;
    }

    return(
        <div className="list_box">
            <ul className="list_ul">
                {props.todos.map((todo,i)=>{
                    return (<li key={i} className="list"><span className="form_btn checkbox" onClick={()=>props.Check(i)}>{Box(todo.status)}</span>
                    <span className="todo_title">{todo.title}</span><span className="form_btn trash" onClick={()=>props.RemoveTodo(i)}><FontAwesomeIcon icon={['fas', 'trash']} /></span></li>);
                })}
            </ul>
        </div>
    );
};
export default List;