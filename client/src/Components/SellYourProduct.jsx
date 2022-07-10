
import React from "react";

class SellYourProduct extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        users_id:this.props.users_id
    };
    this.handleChangeCategorie = this.handleChangeCategorie.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleChangeQuantite = this.handleChangeQuantite.bind(this)
    this.handleChangeTelephone = this.handleChangeTelephone.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    }
  handleChangeTitle(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
  handleChangeImageUrl(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
  handleChangePrice(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
  handleChangeDescription(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
  handleChangeCategorie(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
  handleChangeQuantite(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
  handleChangeTelephone(event){
    this.setState({[event.target.id] : event.target.value});
  
  console.log(this.state)
  }
    render(){
       return( 
 <div>
      <form className="">
                <label className="text-form" >Title:
                <input type="text" name="name" id="title"  onChange={this.handleChangeTitle} placeholder="Title" required /><br></br>
                </label><br></br>
                <label className="text-form">Image:
                <input type="text" name='image_url'  id="image_url" onChange={this.handleChangeImageUrl} placeholder="Image URL" required /><br></br>
                </label><br></br>
                <label  className="text-form">Price:
                <input type="text" name="price" id="price" onChange={this.handleChangePrice} placeholder="Price"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Description:
                <input type="text" name="description" id="description" onChange={this.handleChangeDescription} placeholder="Description"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Categorie:
                <input type="text" name="categorie" id="categorie" onChange={this.handleChangeCategorie} placeholder="Categorie"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Quantite:
                <input type="number" name="quantite" id="quantite" onChange={this.handleChangeQuantite} placeholder="Qunatite"  required/><br></br>
                </label><br></br>
                <label  className="text-form">Telephone:
                <input type="text" name="telephone" id="telephone" onChange={this.handleChangeTelephone} placeholder="Telephone"  required/><br></br>
                </label><br></br>
                <button  className="btn-submit"  onClick={()=>{console.log(this.state);this.props.addYourProduct(this.state)}}>Add</button> 

            </form>
   </div>
      )
    }
   
}
export default SellYourProduct