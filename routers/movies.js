const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const upload = require('../middlewares/multer');

router.get('/', moviesController.index);
router.get('/:id', moviesController.show);
router.post('/:id/reviews', moviesController.storeReview);
router.post('/', upload.single('image'), moviesController.store)

module.exports = router;
