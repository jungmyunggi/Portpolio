import { useState, useEffect } from "react";
import "../styles/navigator.scss";

export default function Navigator() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className={isMobile ? "moblie-Nav" : "desktop-Nav"}>
        <div className="Nav-Title">JMK</div>
        {isMobile ? (
          <div className="Nav-hamberger" onClick={handleMenuToggle}>
            ☰
          </div>
        ) : (
          <ul className="desktop-menu">
            <li>Introduction</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Achievement</li>
            <li>Contract</li>
          </ul>
        )}
      </nav>
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>Introduction</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Achievement</li>
            <li>Contract</li>
          </ul>
        </div>
      )}
    </header>
  );
}
