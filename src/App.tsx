import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  MainInfo,
  About,
  Experience,
  Works,
  Contact,
  StarsCanvas,
} from './components';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <MainInfo />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative">
          <Contact />
          <StarsCanvas />
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;
