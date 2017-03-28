import React, { Component } from 'react';
import Author from '../../components/Author';

export class AuthorContainer extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    fetchData() {
        const user = this.props.author;
        const repo = 'nodejs/node';
        const count = 10;

        fetch(`https://api.github.com/repos/${repo}/commits?per_page=${count}&author=${user}`)
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
        return <Author commits={this.state.commits}/>;
    }
}
export default AuthorContainer;
