import React, { Component } from 'react';
import './App.css'; // подключение файла стилей
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Footer from './components/Footer'

class App extends Component {
    state = {
        tasks: []
    }

    updateData = (value) => {
        this.setState({ tasks: value })
     }
    

     updateSelectedElement = (key, checked) => {
       
        const a = this.state.tasks;
        console.log('a',key);
        a[key].selected=checked;
        this.setState({
          tasks: a,
      }
      )
   }

    render() {
        
        
            return (
                
                <div className="smallContainer">
                  <InputField updateData={this.updateData}/>
                  <TodoList data={this.state.tasks} updateSelectedElement={this.updateSelectedElement}/>
                  {this.state.tasks.length!==0 && <Footer count={this.state.tasks.length} className="bd-highlight"/>}
                </div>
              );
        
    
  }
}

export default App;
