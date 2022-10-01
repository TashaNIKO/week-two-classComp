
import {Component} from "react";

export class Likes extends Component {
 constructor() {
    super();
    this.state = {
        likes: 300
    }
 }

updateLikes() {
    this.setState({likes:this.state.likes-1})
}
render() {
    return(
    <div>
<h1>{this.state.likes} LIKES</h1>
<button onClick={() => this.updateLikes()}>LIKE</button>
    </div>
    )
    }
}
