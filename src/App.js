import React, { Component } from 'react';
import './App.css'; // подключение файла стилей
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Footer from './components/Footer'

class App extends Component {
    state = {
        tasks: [],
    }

    updateData = (value) => {
        
        
        this.setState({ tasks: value })
     }

    render() {
        console.log(this.state.tasks.length);
        
            return (
                
                <div className="App">
                  <InputField updateData={this.updateData}/>
                  <TodoList data={this.state.tasks}/>
                  {this.state.tasks.length!==0 && <Footer/>}
                </div>
              );
        
    
  }
}

export default App;
