
import React from "react";
import OneProduct from "./OneProduct";
class Products extends React.Component{
    constructor(props){
        super(props)
    this.state = {
  
    };

    
    }
   
    render(){
       return( 
 <div>
{
      this.props.data.map(element=>{
         let key=element.id
      return(  
          
      <OneProduct data={element} key={key}/>
      )
       })
}
   </div>
      )
    }
   
}
export default Products