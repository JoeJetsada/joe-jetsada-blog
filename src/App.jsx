import NavigationBar from "./component/Navbar.jsx";
import HeroSection from "./component/HeroSection.jsx";

function App() {
  return (
  <>
    <div className="min-h-screen bg-brown-100">
      <NavigationBar />
      <main>
        <HeroSection />
      </main>
    </div>
  </>
  )
}

export default App

