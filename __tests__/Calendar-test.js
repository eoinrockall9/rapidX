import React from 'react';
import CalendarScreen from '../src/screens/CalendarScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<CalendarScreen />).toJSON();
    expect(tree).toMatchSnapshot();
})