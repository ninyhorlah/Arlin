import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Story from './components/story'
import Important from './components/important';
import Portfolio from './components/portfolio';
import Guest from './components/guest' ;
import Registry from './components/registry'
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
  const[loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  }, [])
  
  AOS.init();
  return (
    <div>
      {loader === false ? (
      <div className="App">
      <Home/>
      
      <Nav/>

      <About/>
      <Story/>
      <Important/>
      <Portfolio/>
      <Guest/>
      <Registry/>
      <Footer/>
    </div>
    ) : (<div className="loader"><div><img src="/assets/img/loader.svg" alt=""/></div></div>)
    }
    </div>
  );
}

export default App;
