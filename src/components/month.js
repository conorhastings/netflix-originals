import React from 'react';
import { css } from 'emotion';
import { DayHeader } from './day';
import Week from './week';

const PERCENTAGE_OF_VIEW_HEIGHT = 0.8
const VIEW_HEIGHT_FOR_WEEKS = PERCENTAGE_OF_VIEW_HEIGHT * 100;

const month = (weeks = 5) => css({
  display:'grid',
  gridTemplateRows: `repeat(${weeks}, 1fr)`
});

function getWeekHeight({ weekRows }) {
  const totalWeeks = weekRows.length;
  const individualWeekVH = VIEW_HEIGHT_FOR_WEEKS / totalWeeks;
  const weekHeightInPx = (window.innerHeight * PERCENTAGE_OF_VIEW_HEIGHT) / totalWeeks;
  return { individualWeekVH, weekHeightInPx, totalWeeks }
}

export default class Month extends React.Component {
  constructor(props) {
    super(props)
    this.state = getWeekHeight({ weekRows: props.weekRows });
    this.setStateOnResize = this.setStateOnResize.bind(this);
  }

  setStateOnResize() {
    this.setState(getWeekHeight({ weekRows: this.props.weekRows }));
  } 

  componentDidMount() {
    window.addEventListener('resize', this.setStateOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setStateOnResize);
  }

  render() {
    return (
      <React.Fragment>
        <DayHeader />
        <div className={month(this.state.totalWeeks)}>         
          {
            this.props.weekRows.map((days, i) => (
              <Week 
                key={i}
                days={days}
                viewHeight={this.state.individualWeekVH}
                heightinPx={this.state.weekHeightInPx}
                launches={this.props.launches}
              />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}