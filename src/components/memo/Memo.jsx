import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Memo=(props)=>{

    function Edit(i){
        const {todo}=props.this.state;
        todo[i].edit=!todo[i].edit;
        props.this.setState({todo});
    }

    function EditButton(edit){
        return edit ?  <FontAwesomeIcon icon={['fas', 'check']} /> : <FontAwesomeIcon icon={['fas', 'edit']} />;
    }

    function Contents(i){
        const {contents}=props.this.state.todo[i];
        const {todo}=props.this.state;
        return (
            <div className="edit">
                {props.this.state.todo[i].edit ? <span className="memo_contents">Edit now</span> :
                contents!=""? <span className="memo_contents">{contents}</span> : <span className="memo_contents none">None</span>}
                <span className="form_btn edit_btn" onClick={()=>Edit(i)}>{EditButton(todo[i].edit)}</span>
            </div>
        );
    }

    return(
        <div className="memo_field">
            {props.this.state.todo.map((todo,i)=>{
                return (todo.status ?
                    <div key={i} className="memo_flame">
                        <span className="memo_todo"><span className="todo_todo">todo</span><span className="memo_title">{todo.title}</span></span>
                        {Contents(i)}
                    </div> : "");
            })}
        </div>
    )
}
export default Memo;