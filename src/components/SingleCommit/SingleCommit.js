import React from 'react';
import s from './SingleCommit.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'universal-router';

export const SingleCommitComponent = ( {commit} ) =>
    <li
        style={commit.sha && isNaN(parseInt(commit.sha.substr(commit.sha.length - 1), 10)) ? {} : { background: '#E6F1F6' }}
        key={commit.sha}>
            <a href={commit.author.login}>{commit.author.login}</a>
            <span> {commit.sha}</span>
        <br />
            <span>{commit.commit.message}</span>
    </li>;

export default withStyles(s)(SingleCommitComponent);
