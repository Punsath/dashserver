import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import multer from "multer";
import path from "path";

const router = express.Router();


router.post("/adminlogin", (req, res) => {
    const sql = "SELECT * from admin Where email = ? and password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
      if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        const email = result[0].email;
        const token = jwt.sign(
          { role: "admin", email: email, id: result[0].id },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.cookie('token', token)
        return res.json({ loginStatus: true });
      } else {
          return res.json({ loginStatus: false, Error:"wrong email or password" });
      }
    });
  });

// Image upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Add a new news item
router.post('/add_news', upload.single('image'), (req, res) => {
  const { title, description, date } = req.body;
  if (!title || !description || !date) {
    return res.json({ Status: false, Error: "Title, Description, and Date are required" });
  }

  const sql = `INSERT INTO news (title, description, date, image) VALUES (?)`;
  const values = [title, description, date, req.file.filename];

  con.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: err.sqlMessage || err });
    return res.json({ Status: true });
  });
});

// Get all news items
router.get('/news', (req, res) => {
  const sql = "SELECT * FROM news";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

// Get a specific news item by ID
router.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM news WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.put('/edit_news/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const { title, description, date } = req.body;
  
    // Check if there is a new image to upload
    let sql;
    let values;
    if (req.file) {
      // If a new image is uploaded
      sql = "UPDATE news SET title = ?, description = ?, date = ?, image = ? WHERE id = ?";
      values = [title, description, date, req.file.filename, id];
    } else {
      // If no new image is uploaded
      sql = "UPDATE news SET title = ?, description = ?, date = ? WHERE id = ?";
      values = [title, description, date, id];
    }
  
    con.query(sql, values, (err, result) => {
      if (err) return res.json({ Status: false, Error: err.sqlMessage || err });
      return res.json({ Status: true });
    });
  });
  
  

// Delete a news item
router.delete('/delete_news/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM news WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({Status: true})
})

export { router as adminRouter };
