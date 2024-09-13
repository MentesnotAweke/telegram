// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Task from "./pages/Task";
import LoadingPage from "./components/LoadingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
