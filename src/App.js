import React, { Component } from 'react';


class App extends Component {
  state = {
    table:[1,2,3,4,5]}

  showLength = () => {
    console.log(this.state.table.length)
  }

  analysis = () =>{
    if(this.state.table.length ===1){
      document.querySelector("body").style.backgroundColor = "orange"
    }
    else if(this.state.table.length === 0){
      document.querySelector("body").style.backgroundColor = "red"
    }
  }

  removeEl = () => {
    this.state.table.shift();
    // console.log(this.state.table.length);
    this.showLength()
    this.analysis()
  }
  
  render() {
    return (
      <div>
        <p>Test</p>
        <button onClick={() => this.showLength()}>Length</button>
        <button onClick={() => this.removeEl()}>Remove</button>
      </div>
    );
  }
}

export default App;
