import express from 'express'

import mongoose from 'mongoose';

// Cors
import cors from 'cors'
// Body Parser
import bodyParser from 'body-parser';

// Bcrypt
import bcrypt from 'bcrypt';

// import User Model
import User from './models/users'

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/tman-live',{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})


// App Instance
const app = express();
// Body Parser Enabled
app.use(bodyParser.json());
// Cors Enabled according to env
if(process.env.NODE_ENV !=='production'){
app.use(cors());
}
// Defined PORT
const PORT = process.env.PORT || 5000

// Routes
app.get('/',(req,res)=>{
    res.send("How cool")
});

app.post("/api/register",async(req,res)=>{
    const {email, password} = req.body

    try {
       const user = new User({
        email:email,
        password:bcrypt.hashSync(password,10),
    })
    
    await user.save();
    res.send(user)
    } catch (error) {
        res.status(400)
        res.send({
            error:"duplicate entry found"
        })
    }
})

app.post('/api/login',async(req,res)=>{
    const {email,password} = req.body;
    
    const user = await User.findOne({
        email,
        password:bcrypt.hashSync(password,10)
    });
    res.send(user);

})

// Listrening on port
app.listen(PORT,()=>{
    console.log(`Listening on server "http://localhost/${PORT}"`);
})

