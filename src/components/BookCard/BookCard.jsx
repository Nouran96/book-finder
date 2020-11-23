import "./BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className="card book-card m-3">
      {book.imageLinks && book.imageLinks.thumbnail ? (
        <img
          className="card-img-top book-thumbnail"
          src={book.imageLinks.thumbnail}
          alt={book.title}
        />
      ) : (
        <span className="text-center image-fallback d-flex align-items-center justify-content-center">
          No Image
        </span>
      )}
      <div className="card-body">
        <p className="card-title book-title text-center">{book.title}</p>
      </div>
    </div>
  );
};

export default BookCard;
