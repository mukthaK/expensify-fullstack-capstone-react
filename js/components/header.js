import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <nav role="navigation" className="topnav" id="navbar">
            <div className="nav-left">
                <a href="#home" id="">Expensify</a>
            </div>
            <div className="dropdown nav-right">
                <button className="dropbtn">Menu</button>
                <div className="dropdown-content">
                    <a href="#" id="friends-js">Friends</a>
                    <a href="#" id="bill-js">Bill</a>
                    <a href="#" id="youOwe-js">Bill settlement</a>
                    <a href="#" id="chgPswd-js">Change password</a>
                    <a href="#" id="logout-js">Log Out</a>
                </div>
            </div>
        </nav>
    )
}
