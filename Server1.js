// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // const studentRoutes = require('./routes/studentRoutes');


// //last updates//
// const router = require("express").Router();
// const Student = require("../models/student"); // adjust path if needed
// //last updates//

// const studentRoutes = require('./routes/student');
// app.use('/api', studentRoutes); // ✅ This makes `/api/branches` route work


// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/studentDB')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.log('❌ MongoDB connection error:', err));

// // Routes
// app.use('/api/students', studentRoutes);



// // Get distinct branches
// router.get('/branches', async (req, res) => {
//   try {
//     const branches = await Student.distinct("branch");
//     // convert to label/value format if needed
//     const formatted = branches.map((b) => ({
//       value: b.toLowerCase(),
//       label: b.charAt(0).toUpperCase() + b.slice(1)
//     }));
//     res.json(formatted);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch branches" });
//   }
// });


// // Server Start
// app.listen(PORT, () => {
//   console.log(`   Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/studentDB')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.log('❌ MongoDB connection error:', err));

// // Routes
// const studentRoutes = require('./routes/student');
// app.use('/api', studentRoutes);  // ✅ handles /students and /branches

// // Server Start
// app.listen(PORT, () => {
//   console.log(`   Server running on http://localhost:${PORT}`);
// });



















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/studentDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.log('❌ MongoDB connection error:', err));

// // Routes
// const studentRoutes = require('./routes/studentRoutes'); // ✅ Correct path
// app.use('/api', studentRoutes); // Now /api/students and /api/branches will work

// // Server Start
// app.listen(PORT, () => {
//   console.log(`   Server running at http://localhost:${PORT}`);
// });
















// backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// const studentRoutes = require('./routes/studentRoutes');
// app.use('/api', studentRoutes);

// // DB connection
// mongoose.connect('mongodb://localhost:27017/studentDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB error:", err));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/StudentRoutescopy');
const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // serve uploaded files
// app.use('/api', studentRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/students', require('./routes/StudentRoutescopy'));
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Example Express Route


