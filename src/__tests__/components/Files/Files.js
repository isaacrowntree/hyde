import React from 'react';
import renderer from 'react-test-renderer';
import Files from '../../../components/Files/Files';

test('Files renders correctly', () => {
  const tree = renderer
    .create(<Files />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
