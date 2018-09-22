import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function AboutApp(props) {
    return (
        <div className="column-1">
            <div className="about-app">
                <h1>Expensify</h1>
                <h3>Split expenses with friends</h3>
                <h5>The app maintains a running total</h5>
                <h5>so that you can pay each other at once!</h5>
            </div>
        </div>
    )
}
