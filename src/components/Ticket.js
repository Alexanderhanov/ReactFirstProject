import React from 'react';


class Ticket extends React.Component{
    constructor(props){
        super(props)
        this.state={            
            selected: false,
        }
    }
    

    selectedStateChanged = () => {
        const s=!this.state.selected;

        this.setState({
            selected: s,
        });
        console.log('key',this.props);
        //this.props.updateSelectedElement(this.props.key, this.state.selected);
       
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
