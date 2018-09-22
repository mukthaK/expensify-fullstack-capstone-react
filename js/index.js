import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import YouOwe from '../js/components/youOwe';
import Footer from '../js/components/footer';
import AboutApp from '../js/components/aboutApp';



document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Header />,
                                                  document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<YouOwe />,
                                                  document.getElementById('reactYouOwe'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Footer />,
                                                  document.getElementById('reactFooter'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<AboutApp />,
                                                  document.getElementById('reactAboutApp'));} );
