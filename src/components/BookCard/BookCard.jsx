import "./BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className="book-card m-3 d-flex flex-column">
      <img className="book-thumbnail img-fluid" src={book.imageLinks.small} />

      <span className="book-title my-2 text-center">{book.title}</span>
    </div>
  );
};

export default BookCard;
