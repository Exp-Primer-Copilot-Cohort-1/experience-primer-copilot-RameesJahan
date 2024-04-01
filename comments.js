// Create web server
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const comments = JSON.parse(data);
    const newComment = {
      id: Date.now(),