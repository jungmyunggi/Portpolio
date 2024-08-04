import "../styles/Home.scss";
import Navigator from "../components/Navigator";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { useRef } from "react";
export default function Home() {
  const scrollRef = useRef([]);
  return (
    <>
      <div className="nav">
        <Navigator scrollRef={scrollRef} />
      </div>
      <div className="content">
        <Introduction ref={scrollRef} />
        <AboutMe ref={scrollRef} />
        <Skills />
      </div>
    </>
  );
}
