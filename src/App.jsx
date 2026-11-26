import NavigationBar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Footer from "@/components/Footer.jsx";
import ArticleSection from "@/components/ArticleSection.jsx";

function App() {
  return (
  <>
    <div className="min-h-screen bg-brown-100">
      <NavigationBar />
      <main>
        <HeroSection />
        <ArticleSection />
      </main>
      <Footer />
    </div>
  </>
  )
}

export default App

