import React from 'react';
import renderer from 'react-test-renderer';
import Editor from '../../../components/Editor/Editor';

test('Editors renders correctly', () => {
  const tree = renderer
    .create(<Editor />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
