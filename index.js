const express =  require('express');
// const cors = require('cors');
const port = 3000;

const app = express();

// 👇️ configure CORS
// app.use(cors());

const bodyparser = require('body-parser');

require('./db');
require('./models/User');

const authRoutes = require('./routes/authRoutes');
app.use(bodyparser.json());
app.use(authRoutes);
app.get('/',(req,res)=> {
    res.send("This is home page")
})


app.listen(port,()=>{
    console.log(`Server running on this ${port}`);
})