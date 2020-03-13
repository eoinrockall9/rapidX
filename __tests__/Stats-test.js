import React from 'react';
import Stats from '../src/screens/Stats';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Stats />).toJSON();
    expect(tree).toMatchSnapshot();
})