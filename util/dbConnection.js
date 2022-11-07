const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

const username = process.env.NODEJS_APP_ATLAS_ID;
const password = process.env.NODEJS_APP_ATLAS_PW;

MongoClient.connect(
  `mongodb+srv:${username}:${password}@cluster-sdenet-dhkim.e7bvbwe.mongodb.net/?retryWrites=true&w=majority`
);
