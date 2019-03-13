import React, { Component } from 'react';


class Ticket extends React.Component{
    render() {
        return (
                <div className="ticket" key={this.props.key}>
                    {this.props.text}
                </div>
        )
    }
  
}

export default Ticket;
