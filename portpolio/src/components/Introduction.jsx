import "../styles/Introduction.scss";
import { useState, useEffect } from "react";
const Introduction = () => {
  const completeIntro = "안녕하세요 :)\n배움을 즐기는 개발자 정명기 입니다";
  const [intro, setIntro] = useState("");
  const [count, setCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const typingSpeed = isTyping ? 200 : 50;
    const introInterval = setInterval(() => {
      setIntro((prevIntro) => {
        if (isTyping) {
          if (count < completeIntro.length) {
            let result = prevIntro
              ? prevIntro + completeIntro[count]
              : completeIntro[0];
            setCount(count + 1);
            return result;
          } else {
            setIsTyping(false);
            return prevIntro;
          }
        } else {
          let result = prevIntro.slice(0, -1);
          if (prevIntro.length === 0) {
            setIsTyping(true);
            setCount(0);
          }
          return result;
        }
      });
    }, typingSpeed);
    return () => clearInterval(introInterval);
  }, [count, isTyping]);

  return (
    <div className="Intro">
      <header>
        <p className="Intro-intro" style={{ whiteSpace: "pre-line" }}>
          {intro}
        </p>
        <button>더 알아보기▼</button>
      </header>
    </div>
  );
};

export default Introduction;
