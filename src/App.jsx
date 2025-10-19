import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CareerSelectionPage from './pages/CareerSelectionPage';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import ExamplePage from './pages/ExamplePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/career-selection" element={<CareerSelectionPage />} />
        <Route path="/create-portfolio" element={<FormPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </Router>
  );
}

export default App;
