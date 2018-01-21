import React from 'react';
import { render } from 'react-dom';
import { css } from 'emotion';
import createHistory from 'history/createBrowserHistory';
import Month from './components/month';
import MonthSwitcher from './components/month-switcher';
import getStateFromPath from './utils/get-state-from-path';

const history = createHistory();

const wrapper = css({
  height: '90vh',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '20px',
  fontFamily: 'Arial, Helvetica, sans-serif'
});


class Calendar extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
    this.changeMonth = this.changeMonth.bind(this);
  }

  componentDidMount() {
    this.unlistenHistory = history.listen(location => {
      getStateFromPath(history).then(state => this.setState(() => state));
    });
    getStateFromPath(history).then(state => this.setState(() => state));
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  changeMonth({ type }) {
    const options = {
      forward: () => {
        const year = this.state.month !== 12 ? this.state.year : this.state.year + 1;
        const month = this.state.month !== 12 ? this.state.month + 1 : 1;
        return history.push(`/calendar/${year}/${month}`);
      },
      back: () => {
        const year = this.state.month !== 1 ? this.state.year : this.state.year - 1;
        const month = this.state.month !== 1 ? this.state.month - 1 : 12;
        return history.push(`/calendar/${year}/${month}`);
      }
    };
    return options[type] && options[type]();
  }

  render() {
    return (
      this.state.loading
      ?
      null
      :
      <div className={wrapper}>
        <MonthSwitcher 
          month={this.state.monthName}
          year={this.state.year}
          changeMonth={this.changeMonth}
        />
        <Month 
          weekRows={this.state.weekRows} 
          launches={this.state.launches} 
        />
      </div>
    );
  }
}


render(<Calendar />, document.getElementById('app'));