import React, { useState } from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

const Sale = ()=>{
    const [sample, setSample] = useState({
        cid:null,
        med_id:null,
        cost:null,
        qty:null
    });
    
    const handleChange = (e) =>{
        setSample(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3333/sale", sample)
            window.location.reload(false);
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="form">
            <h1>add meds to bill</h1>
            <input type="number" placeholder="Customer id" onChange={handleChange} name="cid"/>
            <input type="number" placeholder="med id" onChange={handleChange} name="med_id"/>
            <input type="number" placeholder="Quantity" onChange={handleChange} name="qty"/>
            <button onClick={handleClick} >Add another med</button>
            <button><Link to="/bill">show bill</Link></button>
        </div>
    )
}
export default Sale