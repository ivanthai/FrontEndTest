import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Main.css';

export const MainComponent = () =>
  <main id="MainPanel" className={s.root}>
    <h1>Hello!</h1>
      <a href="/commits">Click here for the latest commits</a>
  </main>;

export default withStyles(s)(MainComponent);
