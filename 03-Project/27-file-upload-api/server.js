const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/database');
const fileUpload = require('express-fileupload');
const cloudinaryConn = require('./config/cloudinary');

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();

// connect to database and cloudinary
connectDB();
cloudinaryConn.cloudinaryConnect();

// body parser
app.use(express.json());

// file upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

// activate CORS functionality
app.use(cors({ origin: '*' }));

// morgan
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

// Route files and mount
const fileR = require('./routes/fileR');
app.use('/api/v1/fileupload', fileR);

app.get('/', (req, res, next) => {
  res.status(200).send('<h1>Hello Ji, Namaskar (App running at /api/v1/fileupload/getallfiles)</h1>');
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow.bold);
  }
});
