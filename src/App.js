import React, { Component } from 'react';
import './App.css'; // подключение файла стилей
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Footer from './components/Footer'

class App extends Component {
    state = {
      
        tasks: [],
        buff: [],
        currentTab: 1
    }

    updateData = (value) => {
        this.setState({ tasks: value })
     }
    

    updateSelectedElement = (key, checked) => {
       
        let a = this.state.tasks;
        
        a[key].selected=checked;
        this.setState({
          tasks: a,
        })
        if (checked){

        }
    }

    justActiveFilter=() =>{
      let temp=[];
        this.state.tasks.forEach(element => {
          
          if (element.selected){temp.push(element)}
        });

        this.setState({
          currentTab: 2,
          buff: temp
        })
        console.log(temp);
    }

    justCompletedFilter=() =>{
      let temp=[];
      this.state.tasks.forEach(element => {
        
        if (!element.selected){temp.push(element)}
      });

      this.setState({
        currentTab: 3,
        buff: temp
      })
      console.log(temp);
    }

    all=() =>{
      this.setState({
        currentTab: 1,
        
      })
    }

    render() {
            console.log("buff", this.state.buff);
            
            return (
                
                <div className="smallContainer">
                  <InputField updateData={this.updateData}/>
                  <TodoList data={this.state.currentTab===1 ? this.state.tasks : this.state.buff} updateSelectedElement={this.updateSelectedElement}/>
                  {this.state.tasks.length!==0 && <Footer count={this.state.tasks.length} className="bd-highlight" justActiveFilter={this.justActiveFilter} justCompletedFilter={this.justCompletedFilter} all={this.all}/>}
                </div>
              );
        
    
  }
}

export default App;
