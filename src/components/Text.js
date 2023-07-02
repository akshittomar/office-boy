import React, { useState, useEffect } from "react";

const AnimatedText = () => {
  const [texts, setTexts] = useState(["Streamline projects, collaborate effortlessly, with our all-in-one professional app.", "Manage tasks, communicate with clients, and stay organized with ease.", "Join now and experience the future of project management!"]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div style={{ }}>
      {texts.map((text, index) => (
        <span
          key={text}
          style={{
            // position: "absolute",
            left: 0,
            opacity: index === currentTextIndex ? 1 : 0,
            transform: `translateX(${index === currentTextIndex ? 0 : "100%"})`,
            transition: "opacity 1s, transform 1s",
            
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;

