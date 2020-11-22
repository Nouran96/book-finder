import BookCard from "../../components/BookCard/BookCard";

const BooksList = ({}) => {
  const books = [
    {
      id: 1,
      volumeInfo: {
        title: "Flowers",
        imageLinks: {
          small:
            "http://books.google.com/books/content?id=aIUMBAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE738ndXQJC_c3pP2j-u8ZibJaDZx3S2HDXXQTIUwmSGEy5tDUDxZX0ivBhlrdmjLnzNQOyGE0RHTUb5x5S3hYFhUHbZZ_yLIe9EeMeUVu4PxzDCkdxBgDJSuJbWjqDBw5XdRqvrP&source=gbs_api",
        },
      },
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      {books && books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book.volumeInfo} />)
      ) : (
        <p className="text-center">No Books Available</p>
      )}
    </div>
  );
};

export default BooksList;
