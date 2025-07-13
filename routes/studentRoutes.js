// // const express = require('express');
// // const router = express.Router();
// // // const Student = require('../models/Student');
// // const Student = require('../models/student');

// // // GET by RegNo
// // router.get('/:regNo', async (req, res) => {
// //   try {
// //     const regNo = req.params.regNo;
// //     const student = await Student.findOne({ regNo });
// //     if (!student) return res.status(404).json({ message: 'Student not found' });
// //     res.json(student);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // module.exports = router;


















// const express = require('express');
// const router = express.Router();
// const Student = require('../models/student'); // ✅ Correct relative path

// // ✅ Get student by Reg. No
// router.get('/students/:regNo', async (req, res) => {
//   try {
//     const student = await Student.findOne({ regNo: req.params.regNo });
//     if (student) {
//       res.json(student);
//     } else {
//       res.status(404).json({ error: 'Student not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching student' });
//   }
// });

// // ✅ Get distinct branches
// router.get('/branches', async (req, res) => {
//   try {
//     const branches = await Student.distinct("branch");
//     const formatted = branches.map((b) => ({
//       value: b.toLowerCase(),
//       label: b.charAt(0).toUpperCase() + b.slice(1)
//     }));
//     res.json(formatted);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch branches" });
//   }
// });

// module.exports = router;








































// const express = require('express');
// const router = express.Router();
// const Student = require('../models/student');

// // ✅ Create New Student
// router.post('/students', async (req, res) => {
//   try {
//     const newStudent = new Student(req.body);
//     await newStudent.save();
//     res.status(201).json({ message: "Student created successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create student" });
//   }
// });

// // ✅ Get Student by Reg. No
// router.get('/students/:regNo', async (req, res) => {
//   try {
//     const student = await Student.findOne({ regNo: req.params.regNo });
//     if (student) {
//       res.json(student);
//     } else {
//       res.status(404).json({ error: 'Student not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching student' });
//   }
// });

// // ✅ Update Student by Reg. No
// router.put('/students/:regNo', async (req, res) => {
//   try {
//     const updated = await Student.findOneAndUpdate(
//       { regNo: req.params.regNo },
//       req.body,
//       { new: true }
//     );
//     if (updated) {
//       res.json({ message: "Student updated successfully", data: updated });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Failed to update student" });
//   }
// });

// // ✅ Delete Student by Reg. No
// router.delete('/students/:regNo', async (req, res) => {
//   try {
//     const deleted = await Student.findOneAndDelete({ regNo: req.params.regNo });
//     if (deleted) {
//       res.json({ message: "Student deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete student" });
//   }
// });

// module.exports = router;
































// const multer = require('multer');
// const path = require('path');

// // Configure storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // make sure this folder exists
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   }
// });

// const upload = multer({ storage });


// // POST student with file
// router.post('/students', upload.single('file'), async (req, res) => {
//   try {
//     const studentData = req.body;
//     if (req.file) {
//       studentData.filePath = req.file.path; // store uploaded file path
//     }

//     const newStudent = new Student(studentData);
//     await newStudent.save();
//     res.status(201).json({ message: "Student created successfully", data: newStudent });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create student" });
//   }
// });

// // PUT student update with file
// router.put('/students/:regNo', upload.single('file'), async (req, res) => {
//   try {
//     const updateData = req.body;
//     if (req.file) {
//       updateData.filePath = req.file.path; // update file if uploaded
//     }

//     const updated = await Student.findOneAndUpdate(
//       { regNo: req.params.regNo },
//       updateData,
//       { new: true }
//     );

//     if (updated) {
//       res.json({ message: "Student updated successfully", data: updated });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update student" });
//   }
// });






// const express = require('express');
// const router = express.Router();
// const Student = require('../models/student');
// // const upload = require('../middleware/upload'); // path correct ah irukkanum
// const upload = require('../uploads/middleware/upload'); // path correct ah irukkanum
// const multer = require('multer');
// const path = require('path');

// // Storage config for uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // folder to store uploaded files
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext); // example: 1718889992322.png
//   },
// });

// // const upload = multer({ storage });


// // ✅ Create New Student with file
// router.post('/students', upload.single('file'), async (req, res) => {
//   try {
//     const studentData = req.body;

//     if (req.file) {
//       studentData.filePath = req.file.path; // store path of uploaded file
//     }

//     const newStudent = new Student(studentData);
//     await newStudent.save();

//     res.status(201).json({ message: "Student created successfully", data: newStudent });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create student" });
//   }
// });


// // ✅ Get Student by Reg No
// router.get('/students/:regNo', async (req, res) => {
//   try {
//     const student = await Student.findOne({ regNo: req.params.regNo });

//     if (student) {
//       res.json(student);
//     } else {
//       res.status(404).json({ error: 'Student not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Error fetching student' });
//   }
// });


// // ✅ Update Student by Reg No with file
// router.put('/students/:regNo', upload.single('file'), async (req, res) => {
//   try {
//     const updateData = req.body;

//     if (req.file) {
//       updateData.filePath = req.file.path;
//     }

//     const updated = await Student.findOneAndUpdate(
//       { regNo: req.params.regNo },
//       updateData,
//       { new: true }
//     );

//     if (updated) {
//       res.json({ message: "Student updated successfully", data: updated });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update student" });
//   }
// });













// const express = require('express');
// const router = express.Router();
// const upload = require('../middleware/upload'); // path correct ah irukkanum
// const Student = require('../models/Student'); // adjust your model import

// router.put('/students/:regNo', upload.single('file'), async (req, res) => {
//   try {
//     const updateData = req.body;

//     if (req.file) {
//       updateData.filePath = req.file.path; // Save file path to DB
//     }

//     const updated = await Student.findOneAndUpdate(
//       { regNo: req.params.regNo },
//       updateData,
//       { new: true }
//     );

//     if (updated) {
//       res.json({ message: "✅ Student updated successfully", data: updated });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "❌ Failed to update student" });
//   }
// });

// module.exports = router;













// // ✅ Delete Student by Reg No
// router.delete('/students/:regNo', async (req, res) => {
//   try {
//     const deleted = await Student.findOneAndDelete({ regNo: req.params.regNo });

//     if (deleted) {
//       res.json({ message: "Student deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to delete student" });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const Student = require('../models/student');
// const multer = require('multer');

// // Storage config
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // ✅ Update Student with file upload support
// router.put('/students/:regNo', upload.single('file'), async (req, res) => {
//   try {
//     const updateData = { ...req.body };

//     if (req.file) {
//       updateData.file = {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//         originalName: req.file.originalname
//       };
//     }

//     const updated = await Student.findOneAndUpdate(
//       { regNo: req.params.regNo },
//       updateData,
//       { new: true }
//     );

//     if (updated) {
//       res.json({ message: "Student updated successfully", data: updated });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (err) {
//     console.error("Update Error:", err);
//     res.status(500).json({ error: "Failed to update student" });
//   }
// });
// module.exports = router;












const express = require('express');
const router = express.Router();
const upload = require('../uploads/middleware/upload');
const Student = require('../models/student1');

// CREATE student
router.post('/students', upload.single('file'), async (req, res) => {
  try {
    const newStudent = new Student({
      ...req.body,
      file: req.file ? req.file.filename : null
    });

    await newStudent.save();
    res.json({ message: 'Student created successfully', data: newStudent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ (GET by Reg No)
// router.get('/students/:regNo', async (req, res) => {
//   try {
//     const student = await Student.findOne({ regNo: req.params.regNo });
//     if (!student) return res.status(404).json({ message: 'Student not found' });
//     res.json(student);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });












router.get('/students/:regNo', async (req, res) => {
  try {
    const student = await Student.findOne({ regNo: req.params.regNo });
    if (!student) return res.status(404).json({ message: 'Student not found' });

    // Change 'file' to 'filePath' to match frontend
    const modifiedStudent = {
      ...student._doc,
      filePath: student.file
    };

    res.json(modifiedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});








// UPDATE student
router.put('/students/:regNo', upload.single('file'), async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.file) {
      updateData.file = req.file.filename;
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { regNo: req.params.regNo },
      updateData,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully', data: updatedStudent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE student
router.delete('/students/:regNo', async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({ regNo: req.params.regNo });

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// <-----------last update------------------>

router.put('/api/students/:regNo', upload.single('photo'), async (req, res) => {
  const updatedData = {
    fullName: req.body.fullName,
    // ... other fields ...
    image: req.file ? req.file.filename : req.body.existingImage
  };

  // Update in MongoDB
  const result = await Student.updateOne(
    { regNo: req.params.regNo },
    { $set: updatedData }
  );

  res.json({
    message: 'Student updated',
    image: updatedData.image // ⬅️ important for frontend preview
  });
});
// <-----------last update------------------>




module.exports = router;
