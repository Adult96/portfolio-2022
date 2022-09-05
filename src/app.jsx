import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import LoadingPage from './components/loading_page/loading_page';
import MainPage from './components/main_page/main_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
