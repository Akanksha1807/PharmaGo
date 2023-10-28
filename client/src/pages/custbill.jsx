import axios from 'axios'
import React, { useEffect, useState } from "react";
import {useLocation, Link} from "react-router-dom"
const Custbill = () =>{
    const [meds, setMeds] = useState([])
    const [cust, setCust] = useState([])
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    useEffect(()=>{
        const fetchall = async()=>{
            try{
                const res = await axios.get("http://localhost:3333/custbill/"+id)
                setMeds(res.data)
                // const ress = await axios.get("http//localhost:3333/total/"+id)
                // setCust(ress.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchall()
    },[]);
    const handleClick = async e =>
    {
        e.preventDefault()
        try{
            await axios.post("http://localhost:3333/total/"+id) 
        }
        catch(err){
            console.log(err)
        }  
    }
    return (
        <div>
           <div className="billmed">
            {meds.map((med)=>(
                <div className="medi">
                    <table>
                        <tr>
                            <td>{med.med_id}</td>
                            <td>{med.med_name}</td>
                            <td>{med.qty}</td>
                            <td>{med.cost}</td>
                        </tr>
                    </table>
                </div>
            ))}
           </div> 
           <button onClick={handleClick}><Link to={`/total/${id}`}>show total cost</Link></button>
        </div>
    )
}
export default Custbill