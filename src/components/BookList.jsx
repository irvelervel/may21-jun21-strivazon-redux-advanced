import Book from "./Book";
import Form from 'react-bootstrap/Form'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fillBooksAction } from "../actions";

// const mapStateToProps = state => state
// useSelector can take the place of mapStateToProps

// const mapDispatchToProps = dispatch => ({
//   fetchBooksWithSearch: (search) => dispatch(fillBooksAction(search))
// })
// useDispatch can replace the classical mapDispatchToProps

const BookList = ({ books, changeBook, bookSelected, fetchBooksWithSearch }) => {


  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            onChange={e => {
              // here I'm going to dispatch fillBooksAction with the value I have in the search variable
              fetchBooksWithSearch(e.target.value)
            }}
            placeholder="Search for a book..."
          />
        </Form.Group>
      </Form>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          changeBook={changeBook}
          bookSelected={bookSelected}
        />
      ))}
    </div>
  )
}

export default BookList;
