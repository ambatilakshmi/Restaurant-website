import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import'../css/style.css'
const Product =()=>{
    const parameters=useParams()
    const product_id=parameters.id
    const [details,setDetails]=useState(null)
    useEffect(()=>{
        Getproduct()
    },[])
    const Getproduct=async()=>{
        const data=new FormData()
        data.append("product_id",product_id)
        const response=await axios.post("https://gist.manojkoravangi.com/get-product-details.php",data,{header:{"content-type":"multipart/form-data"}})
        console.log(response.data.data)
        setDetails(response.data.data)
    }
    return(
        <div>{details?
        <div className="d-flex">
            <div><img src={details.images}></img></div>
            <div className="pdetails col-6"><p>{details.name}</p>
            <p>price:₹{details.price}</p>
            <p>product_type:<q>{details.product_type}</q></p>
            <p>rating:<q>{details.rating}</q></p>
            <p>cutoff_price<q>{details.cutoff_price}</q></p></div>
        </div>:null
}</div>
    )
}
export default Product