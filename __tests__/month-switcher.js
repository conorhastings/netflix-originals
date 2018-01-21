import React from 'react';
import renderer from 'react-test-renderer';
import MonthSwitcher from '../src/components/month-switcher.js';


test('MonthSwitcher component renders without error', () => {
  const tree = renderer.create(
  	<MonthSwitcher 
  	  month={"August"}
  	  year={"2017"}
  	  changeMonth={() => {}}
  	/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});