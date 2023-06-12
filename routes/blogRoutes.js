const express  = require('express');
const BlogController = require('../controllers/blogController')
const router = express.Router();

router.get('/api/v1/blog', BlogController.getAllBlogs)
router.post('/api/v1/blog', BlogController.addBlog)
router.patch('/api/v1/update/:id', BlogController.updateBlog)
router.get('/api/v1/blog/:id', BlogController.getBlogById)
router.delete('/api/v1/blog/:id', BlogController.deleteBlog)
router.get('/api/v1/user/:id', BlogController.getByUserId)

module.exports = router