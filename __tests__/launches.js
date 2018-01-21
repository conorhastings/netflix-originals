import React from 'react';
import renderer from 'react-test-renderer';
import Launches, { Launch, ShowAll, AllLaunches } from '../src/components/launches.js';


test('Launches component renders without error', () => {
  const tree = renderer.create(
  	<Launches 
  	  launches={[{ id: 1, title: 'coool' }]}
  	  dayHeight={77}
      day={1}
  	/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Launch component renders without error', () => {
  const tree = renderer.create(
  	<Launch title="coool" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ShowAll component renders without error', () => {
  const tree = renderer.create(
  	<ShowAll remainingMovies={3} onClick={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('AllLaunches component renders without error', () => {
  const tree = renderer.create(
    <AllLaunches launches={[{ id: 1, title: 'coool' }]} day={1} onClickX={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});