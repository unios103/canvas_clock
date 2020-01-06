import React from "react";
import ReactDOM from "react-dom";
//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);
//jsx file
import Flame from "./components/card/Flame.jsx";
import Memo from "./components/memo/Memo.jsx";
import Plus from "./components/card/Plus.jsx";
//css file
import "./css/Font.css";
import "./css/rCss.css";
import "./css/Tag.css";
import "./css/Main.css";
import "./css/Form_List.css";
import "./css/Memo.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ todo: [], list_title: "todo" }]
        };
    }

    render() {
        return (
            <div className="day">
                <div className="remainder title"></div>
                <div className="page title">
                    <div className="memo title">
                        {this.state.list.map((list, i) => {
                            return <Memo key={i} this={this} num={i} />;
                        })}
                        <p className="space">@</p>{" "}
                        {/* スペースを作るための最終手段 */}
                    </div>
                    <div className="card title">
                        {this.state.list.map((list, i) => {
                            return <Flame key={i} this={this} num={i} />;
                        })}
                        <Plus this={this} />
                        <p className="space">@</p>
                    </div>
                    <div className="page_title title"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
