import React, { Component } from 'react';

class InputField extends React.Component {
  state = {
      myValue: '',
      tasks: [],
  }
  handleKeyDown = (e) => {
    
    if (e.keyCode === 13) {
       
        const temp=this.state.tasks;

        temp.push({text: e.target.value, selected: false});
;       
    
        this.setState({ 
            myValue: e.target.value,
            tasks: temp,
        });
        this.props.updateData(this.state.tasks);
        e.target.value="";
        
    }
  }
  
  render() {
      return (
      <React.Fragment>
          {/* <div className="bd-highlight"> */}
          <input className='field' onKeyDown={this.handleKeyDown} placeholder='Your text' />
          {/* </div> */}
      </React.Fragment>
      )
  }
}
export default InputField;