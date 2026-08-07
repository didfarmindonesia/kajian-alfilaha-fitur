import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClassDetails from './components/ClassDetails'
import RegistrationPage from './pages/RegistrationPage'
import Divider from './components/Divider'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col relative islamic-pattern">
        <Navbar />
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ClassDetails />
                <Divider />
              </>
            } />
            <Route path="/daftar" element={<RegistrationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App