import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Suspense fallback={<div>....loading</div>}><Login /></Suspense>} />
     
      <Route exact path="/login" element={<Suspense fallback={<div>....loading</div>}><Login /></Suspense>} />
      <Route exact path="/Home" element={<Suspense fallback={<div>....loading</div>}><Home /></Suspense>} />

      </Routes>
    </Router>
  );
}

export default App;
