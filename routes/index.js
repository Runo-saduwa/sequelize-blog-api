const { Router } = require('express');
const userRoutes = require('./users.js');
const postRoutes = require('./posts');
const commentRoutes = require('./comments');

const router = Router();

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes)

module.exports = router;