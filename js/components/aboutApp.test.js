import React from 'react';
import {shallow, mount, render} from 'enzyme';

import AboutApp from './aboutApp';

describe('<AboutApp />', () => {
    it('Renders without crashing', () => {
        shallow(<AboutApp />);
                });
    });
