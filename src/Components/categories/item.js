import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
const Item =(props)=>{
    console.log(props.product.idCategories)
        const [success, setSuccess]=useState();
        const pr=props.pr;
       const deleteProduct=()=>{
        var flag=false;
   
        for(let i=0;i<pr.length;i++){
            if(pr[i].idCategories==props.product.idCategories)
            {
            
                flag=true
            }
        }
        if(flag){
            alert('Không thể xóa  khi còn sản phẩm')
        }
      else{
            API.deleteCategories(props.product.idCategories).then((res)=>{
                if(res.data.success){
                
                        alert(res.data.message)
                        setSuccess(res.data.message);
                    }
                }
            )  
        }
        
       }    
        return(<>
           
    <tr>
      <th scope="row">{props.product.idCategories}</th>
      <td>{props.product.nameCategories}</td>
     
      <td>
          <Link to={`/updateCategories${props.product.idCategories}`} className="icon"><span class="mdi mdi-lead-pencil"></span></Link>
          <a href="/categories"  onClick={() => {if(window.confirm('Bạn muốn xóa thể loại ?')){deleteProduct()};}}><span class="mdi mdi-window-close"></span></a>
      </td>
    </tr>
        </>)
    }

export default Item;