import React, { Component } from 'react'
import './BookComponent.css'

export default class BookComponent extends Component {
  render() {
    return (
      this.props.booksList.map(item =>
        <div key={item.title} className="book-box">   
                <img  src={item.imageLinks.smallThumbnail} alt={item.title}/>      
                <p className="book-title">{item.title}</p> 
                <p className="book-author">{item.authors}</p>
        </div>
    )  
    )
  }
}
