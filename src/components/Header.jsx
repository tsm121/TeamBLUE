import React from 'react';
import { Button } from 'antd';


export default class Header extends React.Component {
  render() {
    return (

      <div className={"header"}>

        <div className={"header-left"}>
          <Button style={{marginRight:"1em"}}>Home</Button>
          <Button style={{marginRight:"1em"}}>About Us</Button>
          <Button style={{backgroundColor: "white", color:"#198fff"}}>Play the game</Button>
        </div>

        <div className={"header-center"}>
          <h1>Share With Care</h1>
        </div>

      </div>
    );
  }
}
