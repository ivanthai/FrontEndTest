import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Commits.css';
import { SingleCommitComponent } from '../SingleCommit/SingleCommit'

export const CommitsComponent = ( {commits} ) =>
  <main className={s.root}>
      <header>Commits from Nodejs</header>
      <ol className="commits-list">
          {commits.map((commit) => <SingleCommitComponent key={commit.sha} commit={commit} />)}
      </ol>
  </main>;

export default withStyles(s)(CommitsComponent);
