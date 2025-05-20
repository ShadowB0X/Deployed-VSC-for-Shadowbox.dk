import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import VisionPage from './pages/VisionPage';
import EndpointPage from './pages/EndPointPage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import FileListPage from './pages/FileListPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/vision" element={<VisionPage />} />
      <Route path="/endpoints" element={<EndpointPage />} />
      <Route path="/login" element={<LoginPage onLogin={setToken} />} />
      <Route
        path="/upload"
        element={
          <ProtectedRoute token={token}>
            <UploadPage token={token} />
          </ProtectedRoute>
        }
      />
      <Route path="/files" element={<FileListPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
