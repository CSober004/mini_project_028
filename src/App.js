import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from './page/Search_Image';
import Account from './page/Account';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Style.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/profile/:id" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;