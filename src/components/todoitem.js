import React, { Component } from 'react'

export class ToDoItem extends Component {


// line through the item when they check it 
    
getStyle = () => {
    return{
        textDecoration : this.props.todo.completed ? 'line-through' : 'none' , 
        backgroundColor : '#f4f4f4' ,
        padding : '15px' , 
        borderBottom : '1px #ccc dotted'
    }
}
// butoon style with Variable 
buttonstyle = () => {
    return{
        backgroundColor: 'RED', /* Blue background */
        border: 'none', /* Remove borders */
        color: 'white' ,/* White text */
        padding: '5px 10px', /* Some padding */
        fontSize: '16px',/* Set a font size */
        cursor: 'pointer' /* Mouse pointer on hover */
        , float : 'right' ,


    }
}
 


    render() {
        
        const {  id , title } = this.props.todo ;
        return (
            <div style={this.getStyle()}>
                    <input 
                        type='checkbox' 
                        onChange={this.props.markComplet.bind(this , id )}
                        />
                    
                    <h1> {title} </h1>

                    <button 
                         style={this.buttonstyle()} 
                         onClick={this.props.thisdeltebt.bind(this , id)}
                     >x</button> 
                    
            </div>
        )
    }
}

export default ToDoItem
