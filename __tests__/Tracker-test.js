import React from 'react';
import Tracker from '../src/screens/Tracker';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Tracker />).toJSON();
    expect(tree).toMatchSnapshot();
})