import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState('morning'); // default theme

  // Theme logic
  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      setTime(now);

      const hour = now.getHours();
      if (hour >= 5 && hour < 12) setTheme('morning');
      else if (hour >= 12 && hour < 17) setTheme('afternoon');
      else if (hour >= 17 && hour < 21) setTheme('evening');
      else setTheme('midnight');
    };

    
    updateTheme();
    const timer = setInterval(updateTheme, 1000);
    return () => clearInterval(timer);
  }, []);

  


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);


  

  return (
    <div className="app-fade-in">
      <SpeedInsights/>
      <Header time={time} theme={theme} />

      <div className="top-left-corner">
        <h2>Daniel Noshadha</h2>
        <p>I’m a full-stack engineer passionate about crafting engaging and expressive user 
          interfaces as well as building robust backend solutions. I am creating animations 
          that bring digital experiences to life, while ensuring clean, maintainable code and 
          designs that are both visually appealing and easy to use.</p>
        <p>Clear communication and collaboration are essential to me, and I strive to bring 
          those values to every project I work on. This website reflects my attention to detail 
          and creativity by dynamically changing its colors based on the time of day, offering 
          visitors a unique and immersive experience.</p>
      </div>

      <Footer />
    </div>
  );
};

export default App;
