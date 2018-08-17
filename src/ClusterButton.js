import React, { Component } from 'react';

export default class Buttons extends Component {
  state = {
   text1: 'Cluster Data',
 }

 onClickButton1 = () => {
   if(this.state.text1 === 'Cluster Data'){
     this.setState({
       text1: 'Scatter Data',
     });
   }
  }
  onClickButton2 = () => {
    if(this.state.text1 === 'Scatter Data'){
      this.setState({
        text1: 'Cluster Data',
      });
    }
   }

    render() {
      return (
        <div>
            <button className="button" type="button" onClick={(event) => { this.onClickButton1(); this.onClickButton2();}} name="dataButton">{this.state.text1}</button>
        </div>
      )
    }
  }
