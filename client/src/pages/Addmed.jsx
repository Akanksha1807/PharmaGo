import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Addmed = ()=>{
    const [med, setMed] = useState({
        med_id:null,
        med_n:"",
        cost:null,
        qty:null
    });
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setMed(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3333/medicine", med)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(med)
    return(
        <div className="form">
            <h1>add new book</h1>
            <input type="text" placeholder="Med name"  onChange={handleChange} name="med_n"/><br />
            <input type="number" placeholder="Med id" onChange={handleChange} name="med_id"/><br />
            <input type="number" placeholder="Med cost" onChange={handleChange} name="cost"/><br />
            <input type="text" placeholder="Med quantity" onChange={handleChange} name="qty" /><br />
            <button class="b" onClick={handleClick}>Add</button>
        </div>
    )
}
export default Addmed