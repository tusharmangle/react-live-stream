import express from 'express'
// Cors
import cors from 'cors'
// Body Parser
import bodyParser from 'body-parser';
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

app.post("/api/hello",(req,res)=>{
    const {email, password} = req.body
    console.log(req.body);
    res.send(req.body);
})

// Listrening on port
app.listen(PORT,()=>{
    console.log(`Listening on server "http://localhost/${PORT}"`);
})

