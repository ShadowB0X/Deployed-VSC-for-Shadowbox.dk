import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import VisionPage from './pages/VisionPage';
import EndpointPage from './pages/EndPointPage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import FileListPage from './pages/FileListPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar'; // ✅ if Navbar is global

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('username');
    if (storedToken) setToken(storedToken);
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleLogin = (newToken, userEmail) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', userEmail);
    setToken(newToken);
    setUsername(userEmail);
  };

  return (
    <>
      <Navbar username={username} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/endpoints" element={<EndpointPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/upload"
          element={
            <ProtectedRoute token={token}>
              <UploadPage token={token} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/filelist"
          element={
            <ProtectedRoute token={token}>
              <FileListPage token={token} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;