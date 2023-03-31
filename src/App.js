import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Container } from './pages/container/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
