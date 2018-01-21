import React from 'react';
import { css } from 'emotion';
import { Day, EmptyDay } from './day';


const week = viewHeight => css({
  display:'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  height: `${viewHeight}vh`,
  borderBottom: '1px solid black',
  borderRight: '1px solid black'
});

export default function Week({ days, viewHeight, heightinPx, launches }) {
  return (
    <div className={week(viewHeight)}>
      {
        days.map((day, i) => (
          day !== undefined
          ?
          <Day 
            key={i} 
            day={day}
            launches={launches[day]}
            height={heightinPx}
          />
          :
          <EmptyDay key={i} />
        ))
      }
    </div>
  );
}