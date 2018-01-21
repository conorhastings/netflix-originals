import React from 'react';
import renderer from 'react-test-renderer';
import { Day, EmptyDay, DayHeader } from '../src/components/day.js';


test('Day component renders without error', () => {
  const tree = renderer.create(
  	<Day 
  	  day={1}
  	  launches={undefined}
  	  height={77}
  	/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('EmptyDay component renders without error', () => {
  const tree = renderer.create(
  	<EmptyDay />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DayHeader component renders without error', () => {
  const tree = renderer.create(
  	<DayHeader />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});