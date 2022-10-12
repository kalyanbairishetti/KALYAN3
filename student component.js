import React, { Component } from "react";
 class StudentComponent extends Component{
     constructor(props){
        super(props)
        this.State={ firstName:""
      

        }
       this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
     }
       
    changeFirstNameHandler=(event)=>{
      this.setState({firstName: event.target.value});
    }
     render(){
        return(
            <div>

            <center>
                <form >
                    <label >First Name:</label><br></br>
                    <input type="text" id="fName" name="fName" className="" value={this.state.firstName} onChange={this.changeFirstNameHandler}/><br/>

                    {/* <label htmlFor="lName">Last Name:</label><br></br>
                    <input type="text" id="lname" name="lname" ></input><br></br>

                    <label htmlFor="Email">Email:</label><br></br>
                    <input type="text" id="email" name="email"></input><br></br>

                    <label htmlFor="Address">Address:</label><br></br>
                    <input type="text" id="address" name="address" ></input><br></br>

                    <label htmlFor="Country">country:</label><br></br>
                    <input type="text" id="country" name="country" ></input><br></br>

                    <label htmlFor="zipCode">zipcoce:</label><br></br>
                    <input type="text" id="zipcode" name="zipcode" /><br/>
                 */}
                    <button className="btn btn-green" >Save</button>
                    <button className="btn btn-red" >Cancel</button>


                </form> 
                </center>
            </div>
            
        )
     }
 }

export default StudentComponent;