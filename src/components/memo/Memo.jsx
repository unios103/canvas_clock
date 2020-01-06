import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Memo = props => {
    const num = props.num;

    function Edit(i) {
        const { todo } = props.this.state.list[num];
        todo[i].edit = !todo[i].edit;
        props.this.setState({ todo });
    }

    function EditButton(edit) {
        return edit ? (
            <FontAwesomeIcon icon={["fas", "check"]} />
        ) : (
            <FontAwesomeIcon icon={["fas", "edit"]} />
        );
    }

    function EditContents(i, e) {
        const { todo } = props.this.state.list[num];
        todo[i].contents = e.target.value;
        props.this.setState({ todo });
    }

    function Contents(i) {
        const { contents } = props.this.state.list[num].todo[i];
        const { todo } = props.this.state.list[num];
        return (
            <div className="edit">
                {props.this.state.list[num].todo[i].edit ? (
                    <textarea
                        className="edit_now"
                        defaultValue={contents}
                        onChange={e => EditContents(i, e)}
                        rows="10"
                        cols="26"
                        placeholder="Write a note here"
                    />
                ) : contents != "" ? (
                    <span
                        className="memo_contents"
                        style={{ whiteSpace: "pre-line" }}
                    >
                        {contents}
                    </span>
                ) : (
                    <span className="memo_contents none">None</span>
                )}
                <span className="form_btn edit_btn" onClick={() => Edit(i)}>
                    {EditButton(todo[i].edit)}
                </span>
            </div>
        );
    }

    return (
        <div className="memo_field">
            {props.this.state.list[num].todo.map((todo, i) => {
                return todo.status ? (
                    <div key={i} className="memo_flame">
                        <span className="memo_todo">
                            <span className="todo_todo">todo</span>
                            <span className="memo_title">{todo.title}</span>
                        </span>
                        {Contents(i)}
                    </div>
                ) : (
                    ""
                );
            })}
        </div>
    );
};
export default Memo;
