import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage/ContactPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
