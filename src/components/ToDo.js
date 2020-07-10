import React from 'react';
import ToDoItem from './todoitem'

class ToDos extends React.Component {

    
        
    
    render(){
        
        return this.props.todos.map((todo)=> 
           <ToDoItem key={todo.id} todo={todo} markComplet={this.props.markComplet} thisdeltebt={this.props.thisdeltebt}/>
            
        ) 
           
    }      
        
}



export default ToDos;
