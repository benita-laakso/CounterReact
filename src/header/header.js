import React, { Component } from 'react';
import './header.css';


class Header extends Component {
constructor(props){
    super(props);
    this.state = {
      person:[
        {name:'Sofie', age:15},
        {name:'Harold', age:20},
        {name:'Andrew', age:30},
      ]
}
}

changeState = () => {
  console.log('Tada');
  this.setState({
      person:[
        {name:'Anne', age:15},
        {name:'David', age:20},
        {name:'Marrie', age:30},
      ]
}

)

}

  render() {
    return (
      <div className="header">
<h1> My name is Benita. I am
{Math.floor(Math.random() *25)} years
 </h1>
 <h2> {this.state.person[0].name} </h2>

<button onClick={this.changeState}>Look at this! </button>
      </div>
    );
  }
}

export default Header;
