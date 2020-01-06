import React, { Component } from "react";

const Form = props => (
    <form className="form_field" onSubmit={props.AddTodo}>
        <label className="form_label form_color">todo </label>
        <input name="title" type="text" className="form_input" />
        <input type="submit" value="Add" className="form_btn title" />
    </form>
);
export default Form;
