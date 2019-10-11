const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM posts ORDER BY id DESC;`)
      .then(data => {
        const posts = data.rows;
        res.render('posts', { posts: posts })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    let des = req.body.description;
    if (des.length <= 3 || des.length > 1000) {
      res.json('Description too short or too long');
    } else {
      db.query(`INSERT INTO posts (email, title, description) VALUES ($1, $2, $3)`, [req.body.email, req.body.title, req.body.description], error => {
        if (error) {
          throw error;
        }
        res.redirect('posts');
      });
    }
  });

  return router;
};
