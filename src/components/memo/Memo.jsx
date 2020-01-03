import React, { Component } from 'react';

const Memo=(props)=>{

    const [check,state_check]=React.useState(false);

    // function Check(e){
    //     e.preventDefault();
    //     const {todo}=props.this.state;
    //     todo[0].status=!todo[0].status;
    //     props.this.setState({todo});
    //     console.log(todo[0].status);
    // }

    return(
        <div className="memo_field" onClick={e=>{state_check(!check)}}>
            {props.this.state.todo.map((todo,i)=>{
                return (todo.status ? <div key={i} className="memo_flame"><span className="memo_todo"><span className="todo_todo">todo</span><span className="memo_title">{todo.title}</span></span></div> : "");
            })}
        </div>
    )
}
export default Memo;