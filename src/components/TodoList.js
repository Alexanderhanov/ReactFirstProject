import React, { Component } from 'react';
import Ticket from './Ticket';
import Footer from './Footer'
class TodoList extends Component {

  render() {
    const array = this.props.data.map(function(item, index) {
        return <Ticket text={item} key={index}/>
        
      })
    
        return (
            <React.Fragment>
                <div className="todoList">
                {array}
                </div>
                
            </React.Fragment>  
            )
    }
    
}  

export default TodoList;
