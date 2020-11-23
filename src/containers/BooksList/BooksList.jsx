import BookCard from "../../components/BookCard/BookCard";
import { connect } from "react-redux";

const BooksList = ({ books }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books && books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book.volumeInfo} />)
      ) : (
        <p className="text-center">No Books Available</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
