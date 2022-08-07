const router = require('express').Router()
const { index, searchEngine, searchData } = require('../controllers/searchEngine')

router.get('/', index)
router.post('/', searchEngine)
router.get('/search', searchData)
router.post('/search', searchEngine)

module.exports = router