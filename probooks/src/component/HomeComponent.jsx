import React, { Component } from 'react'
import BookComponent from './BookComponent';
import './HomeComponent.css'

export default class HomeComponent extends Component {
  
    render() {
        return (
            <>
                <div className="header">
                    ProBooks
                </div>
                <div className="box-container">
                    <BookComponent booksList={this.props.booksList}/> 
                </div>
            </>
        );
    }
}
