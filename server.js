const app=require('./src/app/app')
const dotenv=require('dotenv')
const mongoConnect = require('./mongodb/mongodb');
dotenv.config()

const port = 5000;
mongoConnect();

app.listen(port,
    () => console.log("port is runing on", port)
)
