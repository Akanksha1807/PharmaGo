import axios from 'axios'
import React, { useEffect, useState } from "react";
import {useLocation, Link} from "react-router-dom"
 
const Custbill = () =>{
    const [meds, setMeds] = useState([])
    const [cust, setCust] = useState([])
    const [t, setT] = useState(0);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    useEffect(()=>{
        const fetchall = async()=>{
            try{
                const res = await axios.get("http://localhost:3333/custbill/"+id)
                setMeds(res.data)
                const totalCost = res.data.reduce((acc, med) => acc + med.cost, 0);
        setT(totalCost);
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
        try{
            await axios.delete("http://localhost:3333/total/"+id)
            
        }catch(err){
            console.log(err);
        } 
        
    }
    return (
        <div>
            <br /><br />
           <div className="billmed">
            <table>
                <tr>
                    <th>Medicine I'd</th>
                    <th>Medicine Name</th>
                    <th>Medicine Quantity</th>
                    <th>Cost</th>
                </tr>
            </table>
            {meds.map((med)=>(
                <div className="medi" >
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
           <br />
               <h3>total = {t}</h3>
           <br />
           <button class="b" onClick={handleClick}><Link to={"/"}>To Home Page</Link></button>
        </div>
    )
}
export default Custbill