import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps={
        numBoxes:18,
        allcolors:["#FFC0CB","#00FF00","#FF00FF","#FF0000","#FFFF00","#7FFFD4","#FFA500","#00FFFF","#0000FF","#C0C0C0","#808000"]
    }
render(){
    const boxes=Array.from({length:this.props.numBoxes}).map(
        ()=>(<Box colors={this.props.allcolors}/>
         ) );
         return (
         <div>
            <h2 className='Head'>Colour Boxes!</h2>
            <p className='Note'>Click to Change the Colour</p>
         <div className='BoxContainer'>
            
            {boxes}
            </div>
            </div>
            )
}
}
export default BoxContainer;