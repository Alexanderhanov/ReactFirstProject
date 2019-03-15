import React from 'react';


class Ticket extends React.Component{
    constructor(props){
        super(props)
        this.state={            
            selected: false,
        }
    }

    selectedStateChanged = () => {
        
        console.log("s1",JSON.stringify(this.state.selected));
        this.props.updateSelectedElement(this.props.keyItem, !this.state.selected);
        this.setState({selected: !this.state.selected});
       
    }

   
    render() {
        
        return (
                <div className="ticket " key={this.props.key}>
                    <div  className="wrap flex-row">
                        <input type="checkbox" onClick={this.selectedStateChanged} className="bd-highlight" ></input>
                        <span className={this.state.selected ? "bd-highlight text-dec" : "bd-highlight"}>
                            {this.props.text}
                        </span>
                    </div>
                </div>
        )
    }
  
}

export default Ticket;
