import React from 'react';
import renderer from 'react-test-renderer';
import Month from '../src/components/month.js';


test('Month component renders without error', () => {
  const tree = renderer.create(
    <Month weekRows={[[1,2,3,4,5]]} launches={{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});