import React, { Component } from 'react'

export class counter extends Component {
  render(){
    const[count,setcount] = useState(0);
    const CartAdd =()=>{setcount(num+1);}
  }
}