const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let list = []; // 用于保存文本的列表

// 设置静态文件夹
app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello world' });
});

app.get('/echo/:id', (req, res) => {
    const id = req.params.id; 
    res.json({ id: id });    
});

app.post('/sum', (req, res) => {
    const numbers = req.body.numbers; // 从请求体中获取 "numbers" 数组
    const sum = numbers.reduce((total, num) => total + num, 0); // 计算总和
    res.json({ sum: sum }); // 返回包含 "sum" 的 JSON 对象
});

app.post('/list', (req, res) => {
    const text = req.body.text; // 从请求体中获取文本
    list.push(text); // 将文本添加到列表中
    res.json({ list: list }); // 返回包含列表的 JSON 对象
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


