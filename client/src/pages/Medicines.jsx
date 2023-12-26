import React, {useEffect, useState} from "react";
import axios from "axios"
import {Link } from "react-router-dom"
const Medicines = () =>{
    const [meds, setMeds] = useState([])
    useEffect(()=>{
        const fetchall = async()=>{
            try{
                const res = await axios.get("http://localhost:3333/medicine")
                setMeds(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchall()
    },[]);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:3333/medicine/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <h4>Medicines in stock</h4>
            {/* <div>med in stock</div> */}
            <table>
            <tr>
                                <th>Medicine I'd</th>
                                <th>Medicine Name</th>
                                <th>Cost per item</th>
                                <th>Quantity Available</th>
                                <th>Delete the medicine</th>
            </tr>
            </table>
            <div className="meds">
                {meds.map((med)=>(
                    <div className="med" key = {med.med_id}>
                        <table>
                           <tr>
                                <td>{med.med_id}</td>
                                <td>{med.med_n}</td>
                                <td>{med.cost}</td>
                                <td>{med.qty}</td>
                                <td><button class="btn-del" onClick={()=>handleDelete(med.med_id)}>Delete</button></td>
                            </tr>
                            
                        </table>
                    </div>
                ))}
            </div>
            <button class="b"><Link to="/addmed">Add new medicine</Link></button>
            <button class="b"><Link to="/sale">Sale medicine</Link></button>
        </div>
    )
}
export default Medicines