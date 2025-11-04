import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { WelcomeCard } from './components/WelcomeCard';
import { Hero } from './components/Hero';
import { Articles } from './components/Articles';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <Sidebar />
      <WelcomeCard />
      <main>
        <Hero />
        <Articles />
        <Achievements />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
