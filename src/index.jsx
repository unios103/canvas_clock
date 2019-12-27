import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.css';
import './css/rCss.css';

class App extends React.Component {
  render() {
    return (
      <div className="day">
        <div className="remainder"></div>
          <div className="page">
            <div className="memo"></div>
            <div className="card"></div>
            <div className="page_title"></div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));