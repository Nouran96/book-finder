import { useState, useEffect } from "react";
import { createFetchBooksAction } from "../../store/actions/books";
import { connect } from "react-redux";

const Search = ({ onFetchingBooks, onEmptyingBooks }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const urlQuery = query.split(" ").join("+");
    onFetchingBooks(urlQuery);
  }, [query]);

  return (
    <div className="form-group py-2 d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        value={query}
        placeholder="Search Books..."
        onChange={handleChange}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFetchingBooks: (query) => dispatch(createFetchBooksAction(query)),
});

export default connect(null, mapDispatchToProps)(Search);
