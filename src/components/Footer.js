import React, { Component } from 'react';

class Footer extends React.Component{
    justActive = () => {
        console.log("prop", this.props);
        this.props.justActiveFilter();
    }
    justCompleted = () => {
        console.log("prop", this.props);
        this.props.justCompletedFilter();
    }
    all = () => {
        console.log("prop", this.props);
        this.props.all();
    }
    render() {
        return (
            <div className="align-items-center bd-highlight workspace">
                <div className="onTop">
                    <a className="count" onClick={this.props.count}> items left</a>
                    <a className="all count" onClick={this.all}>All</a>
                    <a className="active count" onClick={this.justActive}>Active</a>
                    <a className="completed count" onClick={this.justCompleted}>Completed</a>
                </div>
                <div className="inMiddle"></div>
                <div className="onBottom"></div>
            </div>
        )
    }
  
}


export default Footer