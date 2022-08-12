const  express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app= express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "booking",
});

app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({extended:true}));

app.get("/BookingSeat/api/get", (req,res) => {
    const sqlSelect = "SELECT * FROM information";

    db.query(sqlSelect, (err,result) => {
        res.send(result)


    });

})

app.post("/BookingSeat/api/insert", (req,res) => {

    const email = req.body.email;
    const name = req.body.name;
    const location = req.body.location;
    const dis = req.body.dis;

    const sqlInsert = "INSERT INTO information (email,name,location,dis) VALUES (?,?,?,?)";

    db.query(sqlInsert, [email,name,location,dis],(err,result) => {
        console.log(err);


    });

});
app.delete("/BookingSeat/api/delete/:email",(req,res) =>{
    const name=req.params.email;
    const sqlDelete = 
    "DELETE FROM  information WHERE email=?";

    db.query(sqlDelete,name,(err,result)=>{
       if(err) console.log(err);
    });
});

app.post("/AdviceLocation/api/insert", (req,res) => {

    const eaddress = req.body.eaddress;
    
    const slocation = req.body.slocation;
    const disc = req.body.disc;

    const sqlInsert = "INSERT INTO advice (eaddress,slocation,disc) VALUES (?,?,?)";

    db.query(sqlInsert, [eaddress,slocation,disc],(err,result) => {
        console.log(err);


    });

});


app.listen(3001, () => {
    console.log("running on port :3001");
});



