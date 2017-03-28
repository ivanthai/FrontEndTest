import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Author.css';
import { SingleCommitComponent } from '../../components/SingleCommit/SingleCommit'

export const AuthorComponent = ( {commits} ) =>
  <div>
      <ol className="commits-list">
          {commits.map((commit) => <SingleCommitComponent key={commit.sha} commit={commit} />)}
      </ol>
  </div>;

export default withStyles(s)(AuthorComponent);
