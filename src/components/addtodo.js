import React, { Component } from 'react'




export class AddTodo extends Component {
    state = { 
        title : ''
    }
 
    // update tittle
    updateTitle = (e) => { this.setState({ title : e.target.value});
    
    }

    // submit buuton 
    submiting = (e) =>  {
        e.preventDefault(); 
        this.props.AddTodo(this.state.title)
        this.setState({title : ''})
    }

   

    render() {
        return (
            <form 
                onSubmit={this.submiting} style={{display : 'flex' }}>
                    <input 
                        style={{flex: '10'}}
                        type='text' 
                        name='title' 
                        placeholder='Add Todo ...' value={this.state.title}
                        onChange={this.updateTitle}/>
                    <input
                        type="submit"
                        value='add new'
                        className='btn'
                        style={{flex : '1' , background :'black' , color : 'white'}}
                        />
            </form>
        )
    }
}

export default AddTodo
