import express from 'express'

const app = express();

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("How cool")
});

app.listen(PORT,()=>{
    console.log(`Listening on server "http://localhost/${PORT}"`);
})

