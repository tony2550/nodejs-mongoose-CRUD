const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:8091',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./models');

db.mongoose
  .connect(process.env.NODEJS_APP_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Cannot connect to the db', err);
    process.exit();
  });

// test code
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Rule Book Nodejs' });
});

require('./router/routes.js')(app);

// 서버 포트 설정 및 request 응답 대기
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
