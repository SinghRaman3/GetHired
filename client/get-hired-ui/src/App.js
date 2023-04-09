import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Searchbar from "./components/Searchbar";
import Jobmenu from "./components/Jobmenu";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="container my-3">
          <div className="row justify-content-evenly">
            <div className="col-4 card text-start"><Filters/></div>
            <div className="col-7 ">
              <Searchbar/>
              <Jobmenu/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
