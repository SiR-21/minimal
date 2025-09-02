import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const About = () => {
    const [time, setTime] = useState(new Date());
    const [theme, setTheme] = useState('morning'); // default theme
    
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
        document.documentElement.className = theme;  // <-- here
    }, [theme]);
      
    return (
        <>
        <Header time={time} theme={theme} /> {/* stays on top always */}
        

        <main className="about-container">
            {/* Left column – Timeline */}
            <div className="about-column timeline">
                <div className="timeline-list">
                    <div className="timeline-item" style={{ 
                        marginTop: "-5px"
                        }}>
                        <div className="timeline-content">
                            <p>INTRODUCTION</p>
                        </div>
                    </div>

                    <div className="timeline-item" style={{ 
                        marginTop: "330px"
                        }}>
                        <div className="timeline-content">
                            <p>MY JOURNEY BEGUN</p>
                        </div>
                    </div>

                    <div className="timeline-item" style={{ 
                        marginTop: "210px"
                        }}>
                        <div className="timeline-content">
                            <p>FIRST INTERNSHIPS</p>
                        </div>
                    </div>

                    <div className="timeline-item" style={{ 
                        marginTop: "590px"
                        }}>
                        <div className="timeline-content">
                            <p>BIG CHANGES</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <p></p>
                        </div>
                    </div>

                    
                </div>
            </div>


            {/* Main column – About text */}
            <div className="about-column about-text">
                <p style={{
                    marginBottom: "20px"
                }}>
                    Hello, I'm Daniel Noshadha, an aspiring Full-Stack engineer and Designer based in Switzerland. 
                    I love creating expressive implementations, especially animations as well as strict minimalistic designs. 
                    I enjoy creating experiences that leave a lasting impression on users by emphasizing beautiful animations, 
                    color schemes and visual enjoyment.
                </p>
                <p style={{
                    marginBottom: "90px"
                }}>
                    Beyond the code, I’m fascinated by how technology changes people’s daily lives and always eager to 
                    experiment with new ways of making digital experiences more suitble for human. In my free time I 
                    love playing basketball and volleyball with my friends, as well as hiking and swimming.
                </p>
                <p style={{
                    marginBottom: "90px"
                }}>
                    When I was 13 years old, I enjoyed creating with pencils on paper, Lego bricks, or even origami. 
                    One day in class, I noticed our teacher coding a website. At the time, I didn’t fully understand 
                    what he was doing, but seeing how different elements came together to form a beautiful website left 
                    me fascinated. That was the moment I discovered my new passion: coding.
                </p>
                <p style={{
                    marginBottom: "20px"
                }}>
                    After successfully completing several school projects, I realized I wanted more professional experience. 
                    That led me to discover a one-month internship for young professionals. With my parents’ approval, I 
                    applied without hesitation. During this internship, I primarily focused on testing, identifying minor bugs, 
                    addressing UI inconsistencies, and providing feedback and suggestions for overall improvements.
                </p>

                <p style={{
                    marginBottom: "20px"
                }}>
                    During that one-month period, I realized that I wanted more hands-on experience. After some research, I found 
                    an international company that was seeking interns. I spent two months there, updating content and backend systems, 
                    debugging backend services, and optimizing both UX and UI. Although the company is no longer in operation, the 
                    experience was highly valuable and provided significant professional growth during my time there.
                </p>

                <p style={{
                    marginBottom: "90px"
                }}>
                    Although I initially thought I would not find an internship opportunity at this time, my father approached me with a 
                    proposal to join his company as an intern. I gladly accepted and began working shortly thereafter. I initially 
                    completed a three-month internship, after which I was offered an extended internship contract for one year. This 
                    experience proved to be truly transformative and invaluable for my professional growth.
                </p>
                <p style={{
                    marginBottom: "90px"
                }}>
                    During my bachelor in Software Engineering in Ukraine, there happend an unfotunate situation, which forced me to
                    move to different country. During my stay in Switzerland I didnt know French, German or Italian at all, but I never
                    gave up, learned french up to conversational level in only 2 months, then applied to one university but I couldnt keep 
                    up with french language lectures. After some trials and errors I am addmited to 3ed year Bachelor in Informatics (USI).
                    and hopimg to successfuly build my career here.
                </p>
            </div>


        </main>

        <Footer />
        </>
    );
};

export default About;
