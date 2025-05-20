import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import VisionPage from './pages/VisionPage';
import EndpointPage from './pages/EndPointPage';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import FileListPage from './pages/FileListPage';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/vision" element={<VisionPage />} />
      <Route path="/endpoints" element={<EndpointPage />} />
      <Route path="/login" element={<LoginPage onLogin={setToken} />} />
      <Route path="/upload" element={<UploadPage token={token} />} />
      <Route path="/files" element={<FileListPage />} />
    </Routes>
  );
}

export default App;
