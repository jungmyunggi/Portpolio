import { useState, useEffect, useRef } from "react";
import "../styles/navigator.scss";

const DETAIL_NAV = [
  { idx: 0, name: "Introduction" },
  { idx: 1, name: "AboutMe" },
  { idx: 2, name: "Skills" },
  { idx: 3, name: "Project" },
  { idx: 4, name: "Achievement" },
  { idx: 5, name: "Contract" },
];

const Navigator = ({ scrollRef }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    if (navIndex !== null) {
      scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });
      setNavIndex(null);
    }
  }, [navIndex, scrollRef]);

  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((ref) => {
            ref.className = ref.className.replace(" active", "");
          });
          navRef.current[idx].className += " active";
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);

    return () => {
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [scrollRef]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMobileNavClick = (idx) => {
    setMenuOpen(false);
    setNavIndex(idx);
  };

  return (
    <header className="header">
      <nav className={isMobile ? "mobile-Nav" : "desktop-Nav"}>
        <div className="Nav-Title">JMK</div>
        {isMobile ? (
          <div className="Nav-hamburger" onClick={handleMenuToggle}>
            ☰
          </div>
        ) : (
          <ul className="desktop-menu">
            {DETAIL_NAV.map(({ idx, name }) => (
              <li
                key={idx}
                ref={(ref) => (navRef.current[idx] = ref)}
                onClick={() => {
                  setNavIndex(idx);
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </nav>
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {DETAIL_NAV.map(({ idx, name }) => (
              <li key={idx} onClick={() => handleMobileNavClick(idx)}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigator;
