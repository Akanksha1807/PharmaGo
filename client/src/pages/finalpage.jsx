import React, {useEffect, useState} from "react";
import axios from "axios"
import {Link, useLocation } from "react-router-dom"
const Final = () =>{
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [meds, setMeds] = useState([])
    useEffect(()=>{
        const fetchall = async()=>{
            try{
                const res = await axios.get("http://localhost:3333/total/"+id)
                setMeds(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchall()
    },[]);
    const handledel = async (id)=>{
        try{
            await axios.delete("http://localhost:3333/total/"+id)
            
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            <h4>the total cost to be paid by {id} </h4>
            {meds.map((med)=>(
                <div className="med" key= {med.tot_pr}>
                    <div className="bill">
                        <h4>{med.tot_pr}</h4>
                    </div>
                </div>
            ))}
            <button onClick={handledel(id)}><Link to="/">to home page</Link></button>
        </div>
    )
}
export default Final