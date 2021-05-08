import React from 'react';
import {TextInput} from 'react-native';
import renderer from 'react-test-renderer';

// jest.setTimeout(15000);

test('renders the TextInput component', () => {
  const tree = renderer
    .create(<TextInput autoCorrect={false} value="apple" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
