import React, { Component } from 'react';

class Content extends Component {
    
sadsad=(e)=>{

    let a=10+30
    alert ("><")
    return a
}
    render(){
    console.log(this.sadsad())
        return(
         <div>
             <input onChange={this.sadsad}/>
             <button />
             {this.sadsad()}
         </div>
        )
}
}

export default Content;