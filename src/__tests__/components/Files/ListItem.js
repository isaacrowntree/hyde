import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../../../components/Files/ListItem';

test('ListItem renders correctly', () => {
  const tree = renderer
    .create(<ListItem value="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
