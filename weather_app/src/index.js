import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DailyWeather from './components/DailyWeather';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/dailyWeather/:id' component={DailyWeather} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

