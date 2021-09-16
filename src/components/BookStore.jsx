import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { connect } from 'react-redux'
import { fillBooksAction } from "../actions";

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fillBooksAction())
})

class BookStore extends Component {
  state = {
    // books: [],
    bookSelected: null,
  };

  componentDidMount = () => {
    this.props.fetchBooks()
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <Row>
        {
          this.props.book.error ? (
            <Alert variant="danger">
              SOMETHING WENT WRONG!
            </Alert>
          ) : this.props.book.loading ? (
            <Spinner animation="border" variant="success" />
          ) :
            (
              <>
                <Col md={4}>
                  <BookList
                    bookSelected={this.state.bookSelected}
                    changeBook={this.changeBook}
                    books={this.props.book.stock}
                  />
                </Col>
                <Col md={8}>
                  <BookDetail
                    bookSelected={this.state.bookSelected}
                  />
                </Col>
              </>
            )
        }
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
