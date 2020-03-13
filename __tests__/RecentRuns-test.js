import React from 'react';
import RecentRuns from '../src/screens/RecentRuns';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<RecentRuns />).toJSON();
    expect(tree).toMatchSnapshot();
})