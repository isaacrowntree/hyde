import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';
import { Provider } from 'react-redux';
import { Store } from '../Redux';

test('Login renders correctly', () => {
  const tree = renderer
    .create(<Provider store={Store}><Login /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
