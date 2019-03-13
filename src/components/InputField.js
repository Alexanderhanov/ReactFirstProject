import React, { Component } from 'react';

class InputField extends React.Component {
  state = {
      myValue: '',
      tasks: [],
  }
  handleKeyDown = (e) => {
    
    if (e.keyCode === 13) {
        const temp=this.state.tasks;
        temp[temp.length]=e.target.value;
        this.setState({ 
            myValue: e.target.value,
            tasks: temp,
        });
        this.props.updateData(this.state.tasks);
        e.target.value="";
        
    }
  }
  onBtnClickHandler = (e) => {
      alert(this.state.myValue);
  }
  render() {
      return (
      <React.Fragment>
          <input
            className='field'
            onKeyDown={this.handleKeyDown}
            placeholder='Your text' />
      </React.Fragment>
      )
  }
}
export default InputField;