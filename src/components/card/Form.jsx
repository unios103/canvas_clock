import React, { Component } from "react";

const Form = props => (
    <form className="form_field" onSubmit={props.AddTodo}>
        <div className="form_label">{props.list_title}</div>
        <input name="title" type="text" className="form_input" maxlength="10" />
        <input type="submit" value="Add" className="form_btn title" />
    </form>
);
export default Form;
