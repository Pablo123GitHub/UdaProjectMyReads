import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {

    // const { books } = this.props


  render () {

console.log('Props', this.props)

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
                  <div className="book-shelf-changer">
                      <select key={book.id}>
                          <option value="none" disabled>Move to...</option>
                          <option value={book.shelf}>{book.shelf}</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                  </div>
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
