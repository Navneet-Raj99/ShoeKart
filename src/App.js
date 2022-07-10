import Mainpage from "./Container/Mainpage";
import Cards from "./Components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          {/* <Route path="/navneet" exact element={<Cards />} /> */}
          <Route path="/card/:id" exact element={<CardDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
