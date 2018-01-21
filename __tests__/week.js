import React from 'react';
import renderer from 'react-test-renderer';
import Week from '../src/components/week.js';


test('Week component renders without error', () => {
  const tree = renderer.create(
    <Week days={[1,2,3,4,5,6,7]} viewHeight={12} heightInPx={77} launches={{}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});