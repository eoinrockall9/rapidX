import React from 'react';
import Exercise from '../src/screens/Exercises';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Exercise />).toJSON();
    expect(tree).toMatchSnapshot();
})