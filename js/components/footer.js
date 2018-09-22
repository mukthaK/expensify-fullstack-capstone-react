import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer role="contentinfo" className="footer-container" id="footer">
            <p>&copy; 2018 Muktha Krishnaswamy</p>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/muktha-krishnaswamy/" target="_blank" aria-label="linkedin profile link"><i className="fab fa-linkedin"></i></a>&nbsp;
                <a href="mailto:muktha.1689@gmail.com" aria-label="email link"><i className="fas fa-envelope"></i></a>&nbsp;
                <a href="https://github.com/mukthaK/expensify-fullstack-capstone" target="_blank" aria-label="github repo link"><i className="fab fa-github"></i></a>
            </div>
        </footer>
    )
}
