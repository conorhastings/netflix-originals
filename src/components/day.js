import React from 'react';
import { css } from 'emotion';
import Launches from './launches';

const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];

const dayStyle = css({ 
  padding: '5%',
  borderLeft: '1px solid black',
  overflow: 'hidden'
});

const dayNumberStyle = css({
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '16px'
});

const emptyDayStyle = css(dayStyle, { backgroundColor: 'lightgray' });


const daysHeader = css({ 
  display:'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  borderRight: '1px solid black',
  height: '8vh', 
  fontWeight: 700
});

export function Day({ day, launches, height }) {
  return (
    <div className={dayStyle}>
      <div className={dayNumberStyle}>{day}</div>
      {
        launches
        ?
        <Launches day={day} launches={launches} dayHeight={height} />
        :
        null
      }
    </div>
  );  
}

export function EmptyDay() {
 return <div className={emptyDayStyle} />; 
}

export class DayHeader extends React.PureComponent {
  render() {
    return (
      <div className={daysHeader}>
      {
        WEEK_DAYS.map(day => <div key={day} className={dayStyle}>{day}</div>)
      }
      </div>
    );
  }
}
