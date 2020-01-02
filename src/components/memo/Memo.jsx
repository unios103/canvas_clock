import React, { Component } from 'react';

const Memo=(props)=>{
    function Check(e){
        e.preventDefault();
        const {todo}=props.this.state;
        todo[0].status=!todo[0].status;
        props.this.setState({todo});
        console.log(todo[0].status);
    }

    return(
        <div className="memo_box" onClick={Check}>@</div>
    )
}
export default Memo;