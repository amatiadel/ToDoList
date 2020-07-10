import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import ToDos from './components/ToDo'
import Header from './components/layout/header'
import AddTodo from './components/addtodo'
import About from './components/pages/about'


class App extends React.Component {
  state = {
    todos : [
      {
        id : 1 , 
        title : 'finish your home work' , 
        completed :false 
      },
      {
        id : 2 , 
        title : 'make the lunch' , 
        completed :false 
      },
      {
        id : 4 , 
        title : 'go for 20 min run' , 
        completed :false 
      }
    ]
  }


  //togle 
  markComplet = (id) => { 
    this.setState({
      todos : this.state.todos.map((todo) => {
        if(todo.id === id ) {
          todo.completed = !todo.completed
        }
        return todo ;
      })
    })
  }

  //delete todo item 
  thisdeltebt = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(karim=> 
        karim.id !== id )]
    })
  }


  //add a to do item

  AddTodo = (e) => {
    this.setState({
      todos : [...this.state.todos , {
        id : 12 ,
        title : e , 
        completed : false  ,
      }]
    })
   
    
  }
  

  render() {

   
      return (
         <div className="App">
            <Header />

            <Switch>
          <Route exact path="/">
         
           <AddTodo AddTodo={this.AddTodo} />
            <ToDos todos={this.state.todos}   markComplet={this.markComplet} thisdeltebt={this.thisdeltebt}/>
          </Route>
          <Route path="/about">
           <About />
           </Route>
    
        </Switch>
          </div>
             )
           }
        }


export default App;
