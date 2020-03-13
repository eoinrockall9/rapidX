import React from 'react';
import ListItems from '../src/screens/ListItems';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ListItems />).toJSON();
    expect(tree).toMatchSnapshot();
})