// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_database_user',
  host: 'your_database_host',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432, // Default PostgreSQL port
});

router.post('/register', async (req, res) => {
  const { username, email, password, isStudent, isTeacher } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const query = `
      INSERT INTO users (username, email, password_hash, is_student, is_teacher)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING user_id, username, email, is_student, is_teacher
    `;

    const values = [username, email, hashedPassword, isStudent, isTeacher];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

module.exports = router;
