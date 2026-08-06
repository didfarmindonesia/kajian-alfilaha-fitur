import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClassDetails from './components/ClassDetails'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col relative islamic-pattern">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Hero />
        <ClassDetails />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}

export default App