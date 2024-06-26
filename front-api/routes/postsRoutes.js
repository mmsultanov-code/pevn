const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')

router.get('/', postsController.all)
router.get('/:slug', postsController.findBySlug)

module.exports = router
