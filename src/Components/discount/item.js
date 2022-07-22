import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
const Item =(props)=>{
    console.log(props.product.idDiscount)
        const [success, setSuccess]=useState();
  
       const deleteProduct=()=>{
        API.deleteDiscount(props.product.idDiscount).then((res)=>{
            if(res.data.success){
            
                    alert(res.data.message)
                    setSuccess(res.data.message);
                }
            }
        )  
       }    
        return(<>
           
    <tr>
      <th scope="row">{props.product.idDiscount}</th>
      <td>{props.product.nameDiscount}</td>
     
      <td>
          <Link to={`/updateDiscount${props.product.idDiscount}`} className="icon"><span class="mdi mdi-lead-pencil"></span></Link>
          <a href="/discount"  onClick={() => {if(window.confirm('Do you want delete Discount ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    }

export default Item;