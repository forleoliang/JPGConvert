const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static('.'));

// URL重写规则 - 根据vercel.json配置
app.get('/jpg2webp', (req, res) => {
    res.sendFile(path.join(__dirname, 'jpg2webp.html'));
});

app.get('/jpg2avif', (req, res) => {
    res.sendFile(path.join(__dirname, 'jpg2avif.html'));
});

app.get('/jpg2png', (req, res) => {
    res.sendFile(path.join(__dirname, 'jpg2png.html'));
});

app.get('/jpg2tiff', (req, res) => {
    res.sendFile(path.join(__dirname, 'jpg2tiff.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('URL重写规则已启用，可以访问:');
    console.log('- http://localhost:3000/jpg2webp');
    console.log('- http://localhost:3000/jpg2avif');
    console.log('- http://localhost:3000/jpg2png');
    console.log('- http://localhost:3000/jpg2tiff');
    console.log('- http://localhost:3000/about');
});