const express = require('express');
const printer = require('pdf-to-printer');
const app = express();

printer.print("1.pdf").then(console.log);
// printer.getPrinters().then(console.log);


app.listen(3000)
