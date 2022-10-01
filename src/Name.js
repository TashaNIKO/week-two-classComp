 import { Component } from "react";
export class Name extends Component {
    constructor(){
        super();
        this.state= {
            name: "Jack",
            age: 30
        }
    }
updateName() {
    this.setState ({name: "Maria", age: 40})
}
    render(){
        return(
           <div>
            <h1>Hello {this.state.name}</h1>
            <h2>You are {this.state.age} years old</h2>
            <button onClick={() => this.updateName()}>Click me</button>
           </div> 
        )
    }
}