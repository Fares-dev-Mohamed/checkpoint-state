
import React from "react";

class Counter extends React.Component{
    constructor (props){
    super(props)
    this.state={
        timer:0,
        interval:null,
    }}
    componentDidMount(){
        this.setState({
        interval:setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)
        })
    }
render(){
    return(
        <div>
<button style={{height:"50px",width:"50px",backgroundColor:"rosyBrown",borderRadius:"10%"}}>{this.state.timer}</button>
        </div>
    )
}
}
export default Counter