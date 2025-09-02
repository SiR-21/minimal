import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState('morning'); // default theme
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  // Loader effect
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setFadeOutLoader(true); // start fade-out
            setTimeout(() => setLoading(false), 500); // wait for fade-out
            return 100;
          }
          return prev + 2;
        });
      }, 20);
    }
    return () => clearInterval(interval);
  }, [loading]);

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

  if (loading) {
    return (
      <div className={`loader-container ${fadeOutLoader ? 'fade-out' : ''}`}>
        <div className="loader-text">{progress}%</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-fade-in">
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
