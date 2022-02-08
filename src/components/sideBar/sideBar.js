import React from 'react';
import SideBarButtons from '../sideBarButtons/sideBarButtons';
import "./sideBar.css";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className ="sidebar" key={1}>
            <SideBarButtons click = {this.click} text="All Genre" changeGenre={this.props.changeGenre} />
            <SideBarButtons click = {this.click} text="Action" changeGenre={this.props.changeGenre}/>
            <SideBarButtons click = {this.click} text="Comedy" changeGenre={this.props.changeGenre} />
            <SideBarButtons click = {this.click} text="Drama" changeGenre={this.props.changeGenre}/>
            <SideBarButtons click = {this.click} text="Horror" changeGenre={this.props.changeGenre} />
            <SideBarButtons click = {this.click} text="Romance"  changeGenre={this.props.changeGenre}/>
            <SideBarButtons click = {this.click} text="Thriller" changeGenre={this.props.changeGenre} />
            //

            
            </div>
        )
    }
}

export default SideBar;