import React, { Component } from 'react';
import fetch from '../../core/fetch'
import Commits from '../../components/Commits';

export class CommitsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    fetchData() {
        const repo = 'nodejs/node';
        const count = 30;

        fetch(`https://api.github.com/repos/${repo}/commits?per_page=${count}`)
            .then((response) => response.json())
            .then((json) => this.setState({commits: json}));
    }

    getInitialState() {
        return {
            commits: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return <Commits commits={this.state.commits}/>;
    }
}

export default CommitsComponent;



