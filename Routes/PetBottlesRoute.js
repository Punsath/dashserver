import express from "express";
import con from "../utils/db.js";
import multer from "multer";

// Set up Multer storage configuration (for file uploads if needed)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const petbottlesRouter = express.Router();

petbottlesRouter.get("/", (req, res) => {
  res.json({ message: "Pet bottles route" });
});

// Add a new Pet Bottle record
petbottlesRouter.post("/add_pet_bottle", (req, res) => {
  const { collection_point, weight, date_collected, description, contact_person, contact_email, address, collection_method } = req.body;

  if (!collection_point || !weight || !date_collected || !description || !contact_person || !contact_email || !address || !collection_method) {
    return res.json({ Status: false, Error: "All fields are required." });
  }

  const sql = `INSERT INTO pet_bottles (collection_point, weight, date_collected, description, contact_person, contact_email, address, collection_method) VALUES (?)`;
  const values = [collection_point, weight, date_collected, description, contact_person, contact_email, address, collection_method];

  con.query(sql, [values], (err, result) => {
    if (err) return res.json({ Status: false, Error: err.sqlMessage || err });
    return res.json({ Status: true });
  });
});

// Get all Pet Bottles
petbottlesRouter.get("/pet_bottles", (req, res) => {
  const sql = "SELECT * FROM pet_bottles";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

// Get a specific Pet Bottle record by ID
petbottlesRouter.get("/pet_bottle/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM pet_bottles WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

// Edit a specific Pet Bottle record by ID
petbottlesRouter.put("/edit_pet_bottle/:id", (req, res) => {
  const id = req.params.id;
  const { collection_point, weight, date_collected, description, contact_person, contact_email, address, collection_method } = req.body;

  const sql = "UPDATE pet_bottles SET collection_point = ?, weight = ?, date_collected = ?, description = ?, contact_person = ?, contact_email = ?, address = ?, collection_method = ? WHERE id = ?";
  const values = [collection_point, weight, date_collected, description, contact_person, contact_email, address, collection_method, id];

  con.query(sql, values, (err, result) => {
    if (err) return res.json({ Status: false, Error: err.sqlMessage || err });
    return res.json({ Status: true });
  });
});

// Delete a specific Pet Bottle record by ID
petbottlesRouter.delete("/delete_pet_bottle/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM pet_bottles WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

export { petbottlesRouter };
