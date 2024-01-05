import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import Works from '../works/Works';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddWork from '../addWork/AddWork';
import Work from '../work/Work';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Works/>} />
          <Route path="/addWork" element={<AddWork/>} />
          <Route path="/update-work/:id" element={<AddWork/>} />
          <Route path="/delete-work/:id" element={<Work/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;