import React from 'react';
import { css } from 'emotion';
import getMoviesThatCanFit from '../utils/get-movies-that-can-fit';
import getMoviesToShow from '../utils/get-movies-to-show';

const launchStyle = css({ 
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '16px',
  background: 'linear-gradient(to right, rgba(219,77,109,0.4), rgba(219,77,109,1))',
  border: '1px solid #DB4D6D',
  borderRadius: '2px',
  color: '#0F2540',
  marginBottom: 4,
  paddingLeft: 1,
  paddingBottom: 1,
  paddingTop: 1
});

const showAllStyle = css(launchStyle, { 
  background: '#0F2540',
  borderColor: '#0F2540',
  color: '#fff',
  cursor: 'pointer'
});

const allLaunchesStyle = css({
  position: 'absolute',
  padding: '10px',
  height: '30vh',
  width: '20vw',
  overflow: 'auto',
  boxShadow: '0px 3px 15px rgba(15, 37, 64, 0.4)',
  fontSize: '24px',
  fontWeight: '300',
  backgroundColor: '#fff'
});

const allLaunchesHeader = css({
  display: 'flex',
  justifyContent: 'space-between'
});

const allLaunchListStyle = css({
  padding: '20px',
  paddingTop: '5px'
});

export function Launch({ title }) {
  return <div className={launchStyle}>{title}</div>
}

export function ShowAll({ onClick, remainingMovies }) {
  return (
    <div className={showAllStyle} onClick={onClick}>
      Show All ({remainingMovies} remaining)
    </div>
  );
}

export function AllLaunches({ launches, day, onClickX }) {
  return (
    <div className={css({ position: 'absolute'})}>
      <div className={allLaunchesStyle}>
        <div className={allLaunchesHeader}>
          <div>{day}</div>
          <div 
            className={css({ cursor: 'pointer'})}
            onClick={onClickX}
          >
            ×
          </div>
        </div>
        <div className={allLaunchListStyle}>
          { launches.map(({ title, id }) => <Launch key={id} title={title} />) }
        </div>
      </div>
    </div>
  );
}

export default class Launches extends React.Component {
  constructor() {
    super();
    this.state = { showAllLaunches: false };
  }

  render() {
    const { launches, dayHeight, day } = this.props;
    const moviesThatCanFit = getMoviesThatCanFit({ launches, dayHeight });
    const moviesToShow = getMoviesToShow({ launches, moviesThatCanFit });
    const showShowAll = launches.length > moviesThatCanFit;
    return (
      <div>
        { 
          this.state.showAllLaunches 
          ? 
          <AllLaunches 
            launches={launches}
            day={day}
            onClickX={() => this.setState({ showAllLaunches: false })}
          /> 
          : 
          null 
        }
        {
          moviesToShow.map(({ title, id }) => <Launch key={id} title={title} />)
        }
        { 
          showShowAll 
          ?
          <ShowAll 
            onClick={() => this.setState({ showAllLaunches: !this.state.showAllLaunches })} 
            remainingMovies={launches.length - moviesThatCanFit}
          /> 
          : 
          null
        }
      </div>
    );
  }
}