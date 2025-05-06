import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./list-page/ListPage";
import DetailPage from "./details-page/DetailPage";

function App() {

  return (
    <>
      <div className="page1">
        <Router>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
