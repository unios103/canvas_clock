import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Plus = props => {
    const [title, decideTitle] = React.useState(false);
    function MakeCard(e) {
        return <>{title ? <div className="flame title"></div> : ""}</>;
    }
    function MakeTodoState(e) {
        !title ? decideTitle(!title) : "";
        const { list } = props.this.state;
        list.push({ todo: [] });
        props.this.setState({ list });
        console.log(list);
    }
    return (
        <>
            {MakeCard()}
            <div className="Plus" onClick={MakeTodoState}>
                <FontAwesomeIcon icon={["fas", "plus-square"]} />
            </div>
        </>
    );
};

export default Plus;
