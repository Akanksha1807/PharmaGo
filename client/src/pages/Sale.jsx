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
            <h1>add medicines to bill</h1>
            <input type="number" placeholder="Customer id" onChange={handleChange} name="cid"/><br />
            <input type="number" placeholder="med id" onChange={handleChange} name="med_id"/><br />
            <input type="number" placeholder="Quantity" onChange={handleChange} name="qty"/><br />
            <button class="b" onClick={handleClick} >Add another med</button>
            <br />
            <button class="b"><Link to="/bill">show bill</Link></button>
        </div>
    )
}
export default Sale