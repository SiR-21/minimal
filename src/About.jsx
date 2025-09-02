import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const About = () => {
    const [time, setTime] = useState(new Date());
    const [theme, setTheme] = useState('morning'); // default theme
    const [isMobile, setIsMobile] = useState(false);
    
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

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    // Timeline data for easier management
    const timelineItems = [
        { label: "INTRODUCTION", marginTop: isMobile ? "0px" : "-5px" },
        { label: "MY JOURNEY BEGUN", marginTop: isMobile ? "20px" : "330px" },
        { label: "FIRST INTERNSHIPS", marginTop: isMobile ? "20px" : "210px" },
        { label: "BIG CHANGES", marginTop: isMobile ? "20px" : "590px" }
    ];

    // Content paragraphs with mobile-friendly spacing
    const paragraphs = [
        {
            text: "Hello, I'm Daniel Noshadha, an aspiring Full-Stack engineer and Designer based in Switzerland. I love creating expressive implementations, especially animations as well as strict minimalistic designs. I enjoy creating experiences that leave a lasting impression on users by emphasizing beautiful animations, color schemes and visual enjoyment.",
            spacing: isMobile ? "1.5rem" : "20px"
        },
        {
            text: "Beyond the code, I'm fascinated by how technology changes people's daily lives and always eager to experiment with new ways of making digital experiences more suitable for human. In my free time I love playing basketball and volleyball with my friends, as well as hiking and swimming.",
            spacing: isMobile ? "1.5rem" : "90px"
        },
        {
            text: "When I was 13 years old, I enjoyed creating with pencils on paper, Lego bricks, or even origami. One day in class, I noticed our teacher coding a website. At the time, I didn't fully understand what he was doing, but seeing how different elements came together to form a beautiful website left me fascinated. That was the moment I discovered my new passion: coding.",
            spacing: isMobile ? "1.5rem" : "90px"
        },
        {
            text: "After successfully completing several school projects, I realized I wanted more professional experience. That led me to discover a one-month internship for young professionals. With my parents' approval, I applied without hesitation. During this internship, I primarily focused on testing, identifying minor bugs, addressing UI inconsistencies, and providing feedback and suggestions for overall improvements.",
            spacing: isMobile ? "1.5rem" : "20px"
        },
        {
            text: "During that one-month period, I realized that I wanted more hands-on experience. After some research, I found an international company that was seeking interns. I spent two months there, updating content and backend systems, debugging backend services, and optimizing both UX and UI. Although the company is no longer in operation, the experience was highly valuable and provided significant professional growth during my time there.",
            spacing: isMobile ? "1.5rem" : "20px"
        },
        {
            text: "Although I initially thought I would not find an internship opportunity at this time, my father approached me with a proposal to join his company as an intern. I gladly accepted and began working shortly thereafter. I initially completed a three-month internship, after which I was offered an extended internship contract for one year. This experience proved to be truly transformative and invaluable for my professional growth.",
            spacing: isMobile ? "1.5rem" : "90px"
        },
        {
            text: "During my bachelor in Software Engineering in Ukraine, there happened an unfortunate situation, which forced me to move to different country. During my stay in Switzerland I didn't know French, German or Italian at all, but I never gave up, learned French up to conversational level in only 2 months, then applied to one university but I couldn't keep up with French language lectures. After some trials and errors I am admitted to 3rd year Bachelor in Informatics (USI) and hoping to successfully build my career here.",
            spacing: isMobile ? "1.5rem" : "90px"
        }
    ];
      
    return (
        <>
            <Header time={time} theme={theme} />
            
            <main className="about-container">
                {/* Timeline - only show on desktop */}
                {!isMobile && (
                    <div className="about-column timeline">
                        <div className="timeline-list">
                            {timelineItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className="timeline-item" 
                                    style={{ marginTop: item.marginTop }}
                                >
                                    <div className="timeline-content">
                                        <p>{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="about-column about-text">
                    {/* Optional: Show timeline as simple headers on mobile */}
                    {isMobile && (
                        <div style={{ marginBottom: "2rem" }}>
                            <h3 style={{ 
                                fontSize: "1.2rem", 
                                fontWeight: "300", 
                                marginBottom: "1rem",
                                marginTop: "10px",
                                color: "var(--accent)"
                            }}>
                                My Journey
                            </h3>
                        </div>
                    )}
                    
                    {paragraphs.map((paragraph, index) => (
                        <p 
                            key={index}
                            style={{
                                marginBottom: paragraph.spacing,
                                ...(isMobile && { textAlign: 'left', lineHeight: '1.6' })
                            }}
                        >
                            {paragraph.text}
                        </p>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default About;