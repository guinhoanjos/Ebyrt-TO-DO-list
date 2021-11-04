import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import EditPage from './pages/editPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/edit" element={<EditPage />} />
      </Routes>
    </Router>

  );
}

export default App;
