import express from 'express'
import mysql from "mysql"
import cors from 'cors'
const app = express()
app.use(express.json())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"pharmacy"
})
app.use(cors())
app.get("/", (req, res)=>{
    res.json("from backend")
})

app.get("/medicine", (req, res)=>{
    const q = "SELECT * from medicine"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/customer", (req, res)=>{
    const q = "SELECT * from customer"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/bill", (req, res)=>{
    const q = "SELECT * from bill"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/sale", (req, res)=>{
    const q = "SELECT * from sale"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/sample", (req, res)=>{
    const q = "SELECT * from sample"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
// app.get("/sample", (req, res)=>{
//     const q = "SELECT (med_id, qty, cost) from sample"
//     db.query(q, (err, data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

app.delete("/medicine/:id", (req, res)=>{
    const medId = req.params.id;
    const q = "delete from medicine where med_id = ?"
    db.query(q,[medId], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/medicine", (req,res)=>{
    const q = "insert into medicine values (?)";
    const medicine = [
        req.body.med_id,
        req.body.med_n,
        req.body.cost,
        req.body.qty
    ];
    db.query(q,[medicine], (err,data)=>
    {
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.post("/sale", (req,res)=>{
    const q = "call insertsample(?)";
    const medicine = [
        req.body.med_id,
        req.body.qty,
        req.body.cid        
    ];
    db.query(q,[medicine], (err,data)=>
    {
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/custbill/:cid", (req, res)=>{
    const cid = req.params.cid;
    const q = "select * from sample where cid = ?"
    db.query(q, [cid], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    } )
})
app.get("/total/:cid", (req, res)=>{
    const cid = req.params.cid;
    const q = "select * from bill where cust_id = ?"
    db.query(q, [cid], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    } )
})
app.post("/total/:cid", (req, res)=>{
    const cid = req.params.cid;
    const q = "call Genbill(?)"
    db.query(q, [cid], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/final/:cid", (req, res)=>{
    const cid = req.params.cid;
    const q = "call p(?)"
    db.query(q, [cid], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.delete("/total/:cid", (req, res)=>{
    const custId = req.params.cid;
    const q = "call del(?)"
    db.query(q, [custId], (err, data)=>
    {
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.listen(3333, ()=>{
    console.log("connected to backend")
})