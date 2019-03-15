import React, { Component } from 'react';

class Footer extends React.Component{
    render() {
        return (
            <div className="align-items-center bd-highlight workspace">
                <div className="onTop">
                    <a className="count">{this.props.count} items left</a>
                </div>
                <div className="inMiddle"></div>
                <div className="onBottom"></div>
            </div>
        )
    }
  
}


export default Footer