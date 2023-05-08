const express = require('express');
const router = express.Router();
const { getAllFiles, localImageUpload, imageUpload, videoUpload, imageCompressedUpload, docUpload } = require('../controllers/fileC');

router.get('/getallfiles', getAllFiles);
router.post('/localimageupload', localImageUpload);
router.post('/imageupload', imageUpload);
router.post('/videoupload', videoUpload);
router.post('/imagecompressedupload', imageCompressedUpload);
router.post('/docupload', docUpload);

module.exports = router;
