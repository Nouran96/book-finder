import Search from "../../components/Search/Search";
import BooksList from "../BooksList/BooksList";

const Home = () => {
  return (
    <div className="container">
      <Search />
      <BooksList />
    </div>
  );
};

export default Home;
