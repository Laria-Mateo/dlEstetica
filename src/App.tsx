import MainLayout from './layouts/MainLayout';
import Home from './views/Home';
import Promos from './views/Promos';
import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Promos />
      <Services />
      <Contact />
    </MainLayout>
  );
}

export default App;
