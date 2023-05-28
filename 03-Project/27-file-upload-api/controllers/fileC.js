const File = require('../models/File');
const path = require('path');
const sendEmail = require('../utils/sendEmail');
const cloudinary = require('cloudinary').v2;

// @desc     Get All Files
// @route    GET /api/v1/fileupload/getallfiles
// @access   Public
exports.getAllFiles = async (req, res, next) => {
  try {
    const files = await File.find({});

    res.status(200).json({
      success: true,
      count: files.length,
      data: files,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc     Add a image on server
// @route    POST /api/v1/fileupload/localimageupload
// @access   Public
exports.localImageUpload = async (req, res, next) => {
  const { name, email } = req.body;
  const tags = req.body.tags.split(', ');

  // validation
  if (!(name && email && req.files && req.files.file)) {
    return res.status(400).json({ success: false, error: 'Some Fields are missing...' });
  }

  const file = req.files.file;

  if (file.size > process.env.MAX_IMG_SIZE) {
    return res.status(400).json({ success: false, error: `Please upload a image less than ${process.env.MAX_IMG_SIZE / 1024} KB` });
  }

  if (!file.mimetype.startsWith('image')) {
    return res.status(400).json({ success: false, error: `Please upload a image file` });
  }

  const allowedFileType = ['jpeg', 'jpg'];
  const fileType = file.mimetype.split('/')[1];

  if (!allowedFileType.includes(fileType)) {
    return res.status(400).json({ success: false, error: 'Please upload a valid image file' });
  }

  let fileDetail = await File.create({ name, email, tags });
  file.name = `img_${fileDetail._id}_${Date.now()}`;
  const filePath = path.join(__dirname, '../', process.env.UPLOAD_IMG_PATH, `${file.name}.${fileType}`);

  file.mv(filePath, async (err) => {
    if (err) {
      await File.findByIdAndDelete(fileDetail._id);
      return res.status(500).json({ success: false, error: 'Error in file uploading' });
    }

    fileDetail = await File.findByIdAndUpdate(fileDetail._id, { fileUrl: filePath }, { new: true });

    // send email to uploader
    const options2 = {
      email: fileDetail.email,
      subject: 'New file upload on fileUpload',
      fileUrl: fileDetail.fileUrl,
    };
    await sendEmail(options2);

    return res.status(200).json({
      success: true,
      data: fileDetail,
    });
  });
};

// @desc     Add Single Image on Media server
// @route    POST /api/v1/fileupload/imageupload
// @access   Public
exports.imageUpload = async (req, res, next) => {
  const { name, email } = req.body;
  const tags = req.body.tags.split(', ');

  // validation
  if (!(name && email && req.files && req.files.file)) {
    return res.status(400).json({ success: false, error: 'Some Fields are missing...' });
  }

  const file = req.files.file;

  if (file.size > process.env.MAX_IMG_SIZE) {
    return res.status(400).json({ success: false, error: `Please upload a image less than ${process.env.MAX_IMG_SIZE / 1024} KB` });
  }

  if (!file.mimetype.startsWith('image')) {
    return res.status(400).json({ success: false, error: `Please upload a image file` });
  }

  const allowedFileType = ['jpeg', 'jpg'];
  const fileType = file.mimetype.split('/')[1];

  if (!allowedFileType.includes(fileType)) {
    return res.status(400).json({ success: false, error: 'Please upload a valid image file' });
  }

  let fileDetail = await File.create({ name, email, tags });
  file.name = `img_${fileDetail._id}_${Date.now()}`;
  return await fileUploader(res, fileDetail, file, 'fileUpload/image');
};

// @desc     Add Single Video on Media server
// @route    POST /api/v1/fileupload/videoupload
// @access   Public
exports.videoUpload = async (req, res, next) => {
  const { name, email } = req.body;
  const tags = req.body.tags.split(', ');

  // validation
  if (!(name && email && req.files && req.files.file)) {
    return res.status(400).json({ success: false, error: 'Some Fields are missing...' });
  }

  const file = req.files.file;

  if (file.size > process.env.MAX_VIDEO_SIZE) {
    return res.status(400).json({ success: false, error: `Please upload a video less than ${process.env.MAX_VIDEO_SIZE / (1024 * 1024)} MB` });
  }

  if (!file.mimetype.startsWith('video')) {
    return res.status(400).json({ success: false, error: `Please upload a video file` });
  }

  const allowedFileType = ['mp4', 'mkv'];
  const fileType = file.mimetype.split('/')[1];

  if (!allowedFileType.includes(fileType)) {
    return res.status(400).json({ success: false, error: 'Please upload a valid video file' });
  }

  let fileDetail = await File.create({ name, email, tags });
  file.name = `vid_${fileDetail._id}_${Date.now()}`;
  return await fileUploader(res, fileDetail, file, 'fileUpload/video');
};

// @desc     Add Single Compressed Image on Media server
// @route    POST /api/v1/fileupload/imagecompressedupload
// @access   Public
exports.imageCompressedUpload = async (req, res, next) => {
  const { name, email } = req.body;
  const tags = req.body.tags.split(', ');

  // validation
  if (!(name && email && req.files && req.files.file)) {
    return res.status(400).json({ success: false, error: 'Some Fields are missing...' });
  }

  const file = req.files.file;

  if (file.size > process.env.MAX_COMP_IMG_SIZE) {
    return res.status(400).json({ success: false, error: `Please upload a image less than ${process.env.MAX_COMP_IMG_SIZE / (1024 * 1024)} MB` });
  }

  if (!file.mimetype.startsWith('image')) {
    return res.status(400).json({ success: false, error: `Please upload a image file` });
  }

  const allowedFileType = ['jpeg', 'jpg'];
  const fileType = file.mimetype.split('/')[1];

  if (!allowedFileType.includes(fileType)) {
    return res.status(400).json({ success: false, error: 'Please upload a valid image file' });
  }

  let fileDetail = await File.create({ name, email, tags });
  file.name = `comp_img_${fileDetail._id}_${Date.now()}`;
  return await fileUploader(res, fileDetail, file, 'fileUpload/compImage', 50);
};

// @desc     Add Any Single File on Media server
// @route    POST /api/v1/fileupload/docupload
// @access   Public
exports.docUpload = async (req, res, next) => {
  const { name, email } = req.body;
  const tags = req.body.tags.split(', ');

  // validation
  if (!(name && email && req.files && req.files.file)) {
    return res.status(400).json({ success: false, error: 'Some Fields are missing...' });
  }

  const file = req.files.file;

  if (file.size > process.env.MAX_DOC_SIZE) {
    return res.status(400).json({ success: false, error: `Please upload a document less than ${process.env.MAX_DOC_SIZE / (1024 * 1024)} MB` });
  }

  if (!file.mimetype.startsWith('application/pdf')) {
    return res.status(400).json({ success: false, error: `Please upload a document file` });
  }

  const allowedFileType = ['pdf', 'docx'];
  const fileType = file.mimetype.split('/')[1];

  if (!allowedFileType.includes(fileType)) {
    return res.status(400).json({ success: false, error: 'Please upload a valid document file' });
  }

  let fileDetail = await File.create({ name, email, tags });
  file.name = `doc_${fileDetail._id}_${Date.now()}`;
  return await fileUploader(res, fileDetail, file, 'fileUpload/document', 80);
};

// function to upload file on cloudinary
const fileUploader = async (res, fileDetail, file, folder, quality) => {
  const options = {
    folder,
    public_id: `${file.name}`,
    resource_type: 'auto',
  };

  if (quality) options.quality = quality;

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);

    fileDetail = await File.findByIdAndUpdate(fileDetail._id, { fileUrl: result.secure_url }, { new: true });

    // send email to uploader
    const options2 = {
      email: fileDetail.email,
      subject: 'New file upload on fileUpload',
      fileUrl: fileDetail.fileUrl,
    };
    await sendEmail(options2);

    res.status(200).json({
      success: true,
      data: fileDetail,
    });
  } catch (err) {
    await File.findByIdAndUpdate(fileDetail._id, { fileUrl: res.secure_url });

    return res.status(200).json({
      success: false,
      err: err.message,
    });
  }
};
