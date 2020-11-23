import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
