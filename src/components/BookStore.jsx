import { useState, useEffect } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { fillBooksAction } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const BookStore = () => {

  const [bookSelected, setBookSelected] = useState(null)

  const dispatch = useDispatch()

  const book = useSelector(state => state.book)

  useEffect(() => {
    dispatch(fillBooksAction())
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row>
      {
        book.error ? (
          <Alert variant="danger">
            SOMETHING WENT WRONG!
          </Alert>
        ) : book.loading ? (
          <Spinner animation="border" variant="success" />
        ) :
          (
            <>
              <Col md={4}>
                <BookList
                  bookSelected={bookSelected}
                  changeBook={changeBook}
                  books={book.stock}
                />
              </Col>
              <Col md={8}>
                <BookDetail
                  bookSelected={bookSelected}
                />
              </Col>
            </>
          )
      }
    </Row>
  );
}
export default BookStore
