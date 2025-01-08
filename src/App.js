import './App.css';

import Home from './Pages/Home.jsx';
import History from './Pages/History.jsx';
import References from './Pages/References.jsx';
import Footer from './Pages/Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/sspcanada">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
