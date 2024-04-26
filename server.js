const express = require('express');
// const app = require('./src/route/route')
const app=require('./src/app/app')
const mongoConnect = require('./mongodb/mongodb')

const port = 5000;
mongoConnect();

app.listen(port,
    () => console.log("port is runing on", port)
)
