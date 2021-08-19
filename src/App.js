import React from "react";
import Counter from "./counter";
import "./App.css";

class App extends React.Component{
  constructor(){
    super ();
    this.state ={
       Student :{
        fullName : "FARES Mohamed",
        imgSrc: "./fares.jpg",
        bio : "HELLO THAT IS ME",
        profession : "Student"
      },
      show : false
      
    };
  }
  showFunction(){
    this.setState({show : !this.state.show,});
  }
  
  render(){
    return(
      <div className="App">
        <button style= {{marginTop:"10px",marginBottom:"10px",backgroundColor:"yellowgreen",borderRadius:"10%",height:"50px",width:"100px"}}onClick={()=>
          {this.showFunction();}}>{this.state.show===true? "hide":"show"}</button>
           <div>
          {this.state.show === true ? (
            <div>
              <img style = {{height:"200px",width:"200px",borderRadius:"50%"}}src={this.state.Student.imgSrc} alt="default"/>
                <h1>{this.state.Student.fullName}</h1>
                <h2>{this.state.Student.bio}</h2>
                <h3>{this.state.Student.profession}</h3>
                <Counter/>
            </div>
            
          ) : null}
        </div>
        
      </div> 
      

    );
  }
}
export default App;