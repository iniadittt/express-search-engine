const googleIt = require('google-it')

let dataSearch;

module.exports.index = (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        console.log(error)
    }
}

module.exports.searchEngine = async(req, res) => {
    try {
        const myQuery = req.body.textSearch
        await googleIt({ 'query': `${myQuery}`, limit: 12 }).then(results => {
            dataSearch = results
            res.redirect('/search')
        }).catch(error => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.searchData = (req, res) => {
    try {
        res.render('display', { dataSearch })
    } catch (error) {
        console.log(error)
    }
}