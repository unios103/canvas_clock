import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function List(){
    const [checkbox,change_box]=React.useState(false);

    function Check(e){
        e.preventDefault();
        change_box(!checkbox);
    };

    function Box(checkbox){
        return checkbox ? <FontAwesomeIcon icon={['far', 'check-square']} /> : <FontAwesomeIcon icon={['far', 'square']} />;
    }

    return(
        <div className="list_box">
            <ul>
                <li className="list"><span className="form_btn checkbox" onClick={Check}>{Box(checkbox)}</span>
                    Item 1<span className="form_btn trash"><FontAwesomeIcon icon={['fas', 'trash']} /></span></li>
                <li className="list"><span className="form_btn checkbox" onClick={Check}>{Box(checkbox)}</span>
                    Item 2<span className="form_btn trash"><FontAwesomeIcon icon={['fas', 'trash']} /></span></li>
                <li className="list"><span className="form_btn checkbox" onClick={Check}>{Box(checkbox)}</span>
                    Item 3<span className="form_btn trash"><FontAwesomeIcon icon={['fas', 'trash']} /></span></li>
            </ul>
        </div>
    );
};
export default List;