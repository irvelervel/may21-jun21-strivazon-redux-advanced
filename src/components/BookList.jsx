import Book from "./Book";

const BookList = ({ books, changeBook, bookSelected }) => (
  <div>
    {books.map((book) => (
      <Book
        key={book.id}
        book={book}
        changeBook={changeBook}
        bookSelected={bookSelected}
      />
    ))}
  </div>
);

export default BookList;
