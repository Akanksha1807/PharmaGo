import React, { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
var cost =0;
const Bill = ()=>{
    const [bill, setBill] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchall = async()=>{
            try{
                const res = await axios.get("http://localhost:3333/sample")
                setBill(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchall()
    },[]);
    // console.log(med)
    return(
        <div className="bill-table">
            <div className="bills">
                <h4>List of meds in bill</h4>
                {bill.map((bill)=>(
                    <div className="bill">
                        <table>
                            <tr>
                                <td>{bill.cid}</td>
                                <td>{bill.med_id}</td>
                                <td>{bill.med_name}</td>
                                <td>{bill.qty}</td>
                                <td>{bill.cost}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
            <button class="b"><Link to="/genbill">Genrate bill</Link></button>
        </div>
    )
}
export default Bill