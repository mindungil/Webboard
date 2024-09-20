const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/main', (req,res) => {
    res.sendFile(path.join(__dirname, '..','html','index.html'));
});

router.get('/board', (req,res) => {
    res.sendFile(path.join(__dirname, '..','html','board.html'));
});

router.get('/inform', (req,res) => {
    res.sendFile(path.join(__dirname, '..','html','inform.html'));
});

router.get('/myPage', (req,res) => {
    res.sendFile(path.join(__dirname, '..','html','myPage.html'));
});

module.exports = router;
