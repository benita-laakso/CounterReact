import React, {
  Component
} from 'react';
import './Main.css';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
     counter:0
   };
   this.increseCount=this.increseCount.bind(this);
  }

increseCount(){
  this.setState({
    counter: this.state.counter + 1
  })
}


  render() {
    return (
    <div className = "Main" >
      <div className = {this.state.counter % 2 === 0 ? "circle even" : "circle odd" } onClick={this.increseCount}> {this.state.counter}< /div>
     </div>
    );
  }
}

export default Main;
