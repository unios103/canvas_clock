import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Plus = props => {
    const [title, decideTitle] = React.useState(false);

    function d_Title(e) {
        !title ? decideTitle(!title) : "";
    }

    function MakeTodoState(e) {
        e.preventDefault();
        const { list } = props.this.state;
        list.push({ todo: [], list_title: e.target.title.value });
        props.this.setState({ list });
        title ? decideTitle(!title) : "";
    }

    function MakeCard(e) {
        return (
            <>
                {title ? (
                    <div className="flame title p_div">
                        <span className="p_span">Please enter a title</span>
                        <div>
                            <FontAwesomeIcon icon={["fas", "caret-down"]} />
                        </div>
                        <form onSubmit={MakeTodoState}>
                            <input
                                type="text"
                                name="title"
                                className="form_input p_title"
                                maxlength="8"
                            />
                            <input
                                type="submit"
                                value="Add"
                                className="form_btn　p_title"
                            />
                        </form>
                    </div>
                ) : (
                    ""
                )}
            </>
        );
    }

    return (
        <>
            {MakeCard()}
            <div className="Plus" onClick={d_Title}>
                <FontAwesomeIcon icon={["fas", "plus-square"]} />
            </div>
        </>
    );
};

export default Plus;
