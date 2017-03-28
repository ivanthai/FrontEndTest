import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

export const HeaderComponent = () =>
  <header className={s.root} id="header">
    <h3>Hello Voyajoy!</h3>
  </header>;

export default withStyles(s)(HeaderComponent);
