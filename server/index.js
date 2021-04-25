
const express =require('express');
const bodyParser =require('body-parser');
const app= express();
const mysql =require('mysql');
const cors=require('cors');

const db=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'dropit',
    database:'stressometerresults',
    insecureAuth : true
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/insert',(req,res)=>{
    const email=req.body.email;
    const score=req.body.score;
    console.log(email)
    console.log(score)
    const sqlInsert="INSERT INTO emails_and_score (email,score) VALUES (?,?)"
    db.query(sqlInsert,[email,score],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    });
});

app.get('/',(req,res)=>{
    res.send("Server Is Running")
})

app.listen(3001,()=>{
    console.log("server is Running")
})