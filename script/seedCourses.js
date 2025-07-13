const mongoose = require('mongoose');
const Course = require('../models/course');

mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const courses = [
  { name: 'Java' },
  { name: 'JavaScript' },
  { name: 'Java Developer' },
  { name: 'ReactJS' },
  { name: 'NodeJS' }
];

async function insertCourses() {
  await Course.deleteMany({});
  await Course.insertMany(courses);
  console.log("✅ Courses inserted successfully!");
  mongoose.disconnect();
}

insertCourses();
