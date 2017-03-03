import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import css from './commitList.css';

import Commit from './commit/commit.jsx';

class CommitList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commits: [],
            user: '',
            loading: true

        };
    }

    componentDidMount() {
        axios.get(`/commits`)
            .then(res => {
                const commits = res.data;
                this.setState({commits, loading: false});
            });
    }

    getUserCommits(user) {
        this.setState({loading: true});
        axios.get(`/commits?author=${user}`)
            .then(res => {
                const commits = res.data;
                this.setState({commits, user, loading: false});
            });

    }

    render() {
        return (
            <div className="commit-list">
                <h1>Commits</h1>
                {this.state.user
                    ? <div>
                        <h2>for user:{this.state.user}</h2>
                        <button onClick={this.resetUser.bind(this)}>Reset User</button>
                    </div>
                    : ''}
                {this.state.loading
                    ? 'Loading ...'
                    : <ul>
                        {this.state.commits.map(commit =>
                            <Commit key={commit.sha} body={commit}
                                    getUserCommits={this.getUserCommits.bind(this)}></Commit>
                        )}

                    </ul>}
            </div>
        );
    }

    resetUser() {
        this.setState({loading: true});
        axios.get(`/commits`)
            .then(res => {
                const commits = res.data;
                this.setState({commits, user: null, loading: false});
            });
    }

}

ReactDOM.render(<CommitList/>, document.getElementById('CommitList'));