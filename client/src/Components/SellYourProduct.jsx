
import React from "react";

class SellYourProduct extends React.Component{
    constructor(props){
        super(props)
    this.state = {};
    }
  
    render(){
       return( 
 <div>
      <form className="" onSubmit={""}>
                <label className="text-form" >Title:
                <input type="text" name="name" value={""} onChange={""} placeholder="Title" required /><br></br>
                </label><br></br>
                <label className="text-form">Image:
                <input type="text" name='image' value={""} onChange={""} placeholder="Image URL" required /><br></br>
                </label><br></br>
                <label  className="text-form">Price:
                <input type="url" name="price" value={""} onChange={""} placeholder="Price"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Description:
                <input type="url" name="description" value={""} onChange={""} placeholder="Description"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Categorie:
                <input type="url" name="categorie" value={""} onChange={""} placeholder="Categorie"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Quantite:
                <input type="url" name="quantite" value={""} onChange={""} placeholder="Qunatite"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Telephone:
                <input type="url" name="telephone" value={""} onChange={""} placeholder="Telephone"  required/><br></br>
                </label><br></br>
                <input type="submit" className="btn-submit" value='Submit'/> 

            </form>
   </div>
      )
    }
   
}
export default SellYourProduct