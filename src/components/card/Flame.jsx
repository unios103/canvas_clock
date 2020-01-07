import React, { Component } from "react";

import Form from "./Form.jsx";
import List from "./List.jsx";

const Flame = props => {
    const num = props.num;
    function AddTodo(e) {
        e.preventDefault();
        const { todo } = props.this.state.list[num];
        todo.push({
            title: e.target.title.value,
            status: false,
            edit: false,
            contents: ""
        });
        props.this.setState({ todo });
        e.target.title.value = "";
    }

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

    function delateCard(i) {
        const { list } = props.this.state;
        list.splice(i, 1);
        props.this.setState({ list });
    }

    return (
        <>
            <div className="flame title">
                <Form
                    num={num}
                    AddTodo={AddTodo}
                    delateCard={delateCard}
                    list_title={props.this.state.list[num].list_title}
                />
                <div className="todoBox">
                    <List
                        todo={props.this.state.list[num].todo}
                        RemoveTodo={RemoveTodo}
                        Check={Check}
                    />
                </div>
            </div>
        </>
    );
};

export default Flame;
