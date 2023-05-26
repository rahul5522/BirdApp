const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const postsRouter = require('./routes/postsRouter');

dotenv.config({ path: './configure.env' });

const app = express();

//Middleware Stack

app.use(cors());
app.options('*', cors());

// app.use(helmet());
// app.use(helmet(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })));

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(morgan('dev'));

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//ROUTING
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', postsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
