import React from 'react';
import { css } from 'emotion';

const style = css({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '24px',
  width: '90vw'
});

const arrowStyle = css({ cursor: 'pointer', margin: '10px', marginTop: '0px' })

export default function MonthSwitcher({ month, year, changeMonth }) {
  return (
    <div className={style}>
      <div className={arrowStyle} onClick={() => changeMonth({ type: "back" })}>←</div>
      <div>{month} {year}</div>
      <div className={arrowStyle} onClick={() => changeMonth({ type: "forward"})}>→</div>
    </div>
  );
}