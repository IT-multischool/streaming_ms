import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Stream from './pages/Stream'
import Cursos from './pages/Cursos'
import Profile from './pages/Profile'
import Meet from './pages/Meet'
import Chatbot from './pages/Chatbot'
import Podcasts from './pages/Podcasts'
import Livestream from './pages/Livestream'
import MenteSa from './pages/MenteSa'
import { VideoProvider } from './context/VideoContext'

function App() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page - HTML estático é usado na rota "/" */}
          {/* <Route path="/" element={<Landing />} /> */}
          
          {/* Páginas de Autenticação */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* App Principal - Acesso após login (Protegido) */}
          <Route path="/app" element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/stream/:id" element={
            <ProtectedRoute>
              <Layout>
                <Stream />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/cursos" element={
            <ProtectedRoute>
              <Layout>
                <Cursos />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/profile" element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/meet" element={
            <ProtectedRoute>
              <Layout>
                <Meet />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/chatbot" element={
            <ProtectedRoute>
              <Layout>
                <Chatbot />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/podcasts" element={
            <ProtectedRoute>
              <Layout>
                <Podcasts />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/livestream" element={
            <ProtectedRoute>
              <Layout>
                <Livestream />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/app/mentesa" element={
            <ProtectedRoute>
              <Layout>
                <MenteSa />
              </Layout>
            </ProtectedRoute>
          } />
          
          {/* Rotas antigas para compatibilidade */}
          <Route path="/stream/:id" element={
            <Layout>
              <Stream />
            </Layout>
          } />
          <Route path="/cursos" element={
            <Layout>
              <Cursos />
            </Layout>
          } />
          <Route path="/profile" element={
            <Layout>
              <Profile />
            </Layout>
          } />
          <Route path="/meet" element={
            <Layout>
              <Meet />
            </Layout>
          } />
          <Route path="/chatbot" element={
            <Layout>
              <Chatbot />
            </Layout>
          } />
          <Route path="/podcasts" element={
            <Layout>
              <Podcasts />
            </Layout>
          } />
          <Route path="/livestream" element={
            <Layout>
              <Livestream />
            </Layout>
          } />
          <Route path="/mentesa" element={
            <Layout>
              <MenteSa />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </VideoProvider>
  )
}

export default App

