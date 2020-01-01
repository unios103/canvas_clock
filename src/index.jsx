import React from 'react';
import ReactDOM from 'react-dom';
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);
//jsx file
import Flame from './components/Flame.jsx'
//css file
import './css/Font.css';
import './css/rCss.css';
import './css/Tag.css'
import './css/Main.css';
import './css/Form_List.css';

class App extends React.Component {

  render() {
    return (
      <div className="day">
        <div className="remainder title"></div>
        <div className="page title">
        <div className="memo title"></div>
        <div className="card title">
          <Flame />
        </div>
          <div className="page_title title"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));