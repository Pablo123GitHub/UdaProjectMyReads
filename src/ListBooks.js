import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'


class SelectShelf extends Component {
  state = {

  }




render() {

  return (
    <div className="book-shelf-changer">
          <select value={this.props.shelf} onChange={this.props.handleChangeField} >
          <option value="none" disabled>Move to...</option>
            <option value="none">None</option>
          <option value="currentlyReading"> Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
            <option value="none">None</option>

            </select>


    </div>
  )

}
}

class ListBooks extends Component {

  constructor(props) {
     super(props)
     this.handleChange = this.handleChange.bind(this)

   }


    state = {

 shelf: ''

    }
    handleChange(event) {

         this.setState({shelf: event.target.value})
         event.preventDefault()
      console.log(event.target)
      console.log(this)



    }

  render () {




    return (
      <div >
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
  <ol className="books-grid">
{this.props.books.filter((book)=> book.shelf === this.props.shelf).map((book)=>
          <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
     <SelectShelf books={this.props.books} keyBook = {book} shelf={this.state.shelf}
     handleChangeField={this.handleChange} /> 

                </div>
                <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>

)

}
</ol>
</div>
</div>
    </div>

    )
  }

}

export default ListBooks
