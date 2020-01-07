import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Remainder = props => {
    const num = props.num;

    function RemoveTodo(i) {
        const { todo } = props.this.state.list[num];
        todo.splice(i, 1);
        props.this.setState({ todo });
    }

    function Check(i) {
        const { todo } = props.this.state.list[num];
        todo[i].status = !todo[i].status;
        todo[i].edit ? (todo[i].edit = !todo[i].edit) : "";
        props.this.setState({ todo });
    }

    function Box(status) {
        return status ? (
            <FontAwesomeIcon icon={["far", "check-square"]} />
        ) : (
            <FontAwesomeIcon icon={["far", "square"]} />
        );
    }

    return (
        <>
            {props.this.state.list[num].todo.map((todo, i) => {
                return (
                    <div className="remainder_field">
                        <span className="memo_todo">
                            <span className="todo_todo">
                                {props.this.state.list[num].list_title}
                            </span>
                        </span>
                        <div className="Check_remainder">
                            <span
                                className="form_btn checkbox"
                                onClick={() => Check(i)}
                            >
                                {Box(todo.status)}
                            </span>
                            <span className="todo_title">{todo.title}</span>
                            <span
                                className="form_btn trash"
                                onClick={() => RemoveTodo(i)}
                            >
                                <FontAwesomeIcon icon={["fas", "trash"]} />
                            </span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default Remainder;
