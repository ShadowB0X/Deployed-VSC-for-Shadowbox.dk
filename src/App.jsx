import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import VisionPage from './pages/VisionPage'
import EndpointPage from './pages/EndPointPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/vision" element={<VisionPage />} />
      <Route path="/endpoints" element={<EndpointPage />} />
    </Routes>
  )
}

export default App