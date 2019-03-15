import React, { Component } from 'react';
import Ticket from './Ticket';
import Footer from './Footer'
class TodoList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let filterArray = []

    
    const array = this.props.data.map((item, index) => {
        
        return <Ticket updateSelectedElement={this.props.updateSelectedElement} text={item.text} selected={item.selected} keyItem={index}/>
        
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
