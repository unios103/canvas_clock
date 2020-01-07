import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = props => (
    <form className="form_field" onSubmit={props.AddTodo}>
        <div className="form_minus">
            <span className="minus" onClick={() => props.delateCard(props.num)}>
                <FontAwesomeIcon icon={["fas", "minus-square"]} />
            </span>
            <span className="form_label">{props.list_title}</span>
        </div>
        <input name="title" type="text" className="form_input" maxlength="10" />
        <input type="submit" value="Add" className="form_btn title" />
    </form>
);
export default Form;
