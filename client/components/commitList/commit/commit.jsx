import React from 'react';
import ReactDOM from 'react-dom';
import css from './commit.css';


export default class Commit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commit: this.props.body
        };
    }


    getUserCommits() {
        this.props.getUserCommits(this.state.commit.commit.author.email);
    }


    render() {
        return (
            <li className={"commit" + (isLastCharNumber(this.state.commit.sha) ? ' lightblue' : '')}>
                <div>
                    <b>Sha:</b> {this.state.commit.sha}
                </div>
                <div>
                    <b>Message:</b> {this.state.commit.commit.message}
                </div>
                {
                    this.state.commit.author
                        ? <div>
                            <b>Author:</b>
                            <a href="javascript:void(0)" onClick={this.getUserCommits.bind(this)}>
                                {this.state.commit.commit.author.email}, {this.state.commit.commit.author.name}
                            </a>
                        </div>
                        : ''
                }
                <a href={this.state.commit.commit.url}>{this.state.commit.commit.url}</a>

            </li>
        );
    }
}


function isLastCharNumber(string) {
    if (!string) return;
    return !isNaN(string[string.length - 1]);
}
