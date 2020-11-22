import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value.trim());

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

export default Search;
