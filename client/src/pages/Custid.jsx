import axios from 'axios';
import React, {useState} from 'react'
import {Link} from "react-router-dom"
const Custid = () =>{
    const [cust_id, setid] = useState({
        cid:null
    });
    const handleChange = (e) =>{
        setid(prev=>({...prev, [e.target.name]: e.target.value}))
    }
   const handleClick = async e =>{
    e.preventDefault()
    try{
        await axios.post("http://localhost:3333/total/"+cust_id.cid)
    }
    catch(err){
        console.log(err)
    }
   }
    return(<div>
        <h3>Enter customer id to generate the bill</h3>
        <input type="number" onChange={handleChange} placeholder='Customer id' name='cid'/><br />
        <button className='b' onClick={handleClick}><Link to={`/custbill/${cust_id.cid}`}>Genrate and show</Link></button>
        {/* on clicking this button it should show the content of sample table then calculate the total and then delete the rows from sample for that customer */}
    </div>
        
    )
}
export default Custid