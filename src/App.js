import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home.jsx';
import History from './Pages/History.jsx';
import References from './Pages/References.jsx';
import Footer from './Pages/Footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Home/>
      <History/>
      <References/>
      <Footer/>
    </div>
  );
}

export default App;
