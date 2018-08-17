import React, { Component } from 'react';

export default class Buttons extends Component {
  state = {
   text1: 'Add Data',
   triggered: 0,
   features: [],
 }

 onClickButton1 = () => {
   if(this.state.text1 === 'Add Data'){
     this.setState({
       text1: 'Remove Data',
       triggered: 1,
     });
   }
  }
  onClickButton2 = () => {
    if(this.state.text1 === 'Remove Data'){
      this.setState({
        text1: 'Add Data',
      });
    }
   }
   onClickButton3 = () => {
     if(this.state.triggered === 0){
       fetch("https://bikewise.org:443/api/v2/locations?proximity_square=100").then(r => r.json()).then(json => {
         this.setState({features: json.features})
         console.log(this.state.features)
       })
     }
    }
    render() {
      return (
        <div>
            <button className="button" type="button" onClick={(event) => { this.onClickButton1(); this.onClickButton2(); this.onClickButton3();}} name="dataButton">{this.state.text1}</button>
        </div>
      )
    }
  }
