var axios = require('axios');

module.exports = {show};

function show(req, res) {
    const count = req.query.count || 25;
    const repo = req.query.repo || 'nodejs/node';
    const author = req.query.author ? `&author=${req.query.author}` : '';

    return axios.get(`https://api.github.com/repos/${repo}/commits?per_page=${count}${author}`)
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            res.status(error.response.status).send(error.response.statusText);
        });
}
