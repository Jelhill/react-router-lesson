import './App.css';
import Header from './component/Header/Header';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Transaction from './pages/Transaction';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/transaction/:id" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
