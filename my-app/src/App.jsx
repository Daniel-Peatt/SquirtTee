import { useRef, useEffect, useState } from "react";
import "./App.css";
import trophy from "./assets/trophy3.png";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Plaque from "./components/plaque/plaque.jsx";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard.jsx";
import Photos from "./components/Photos/Photos.jsx";

import palmShelby from "./assets/PalmCoast/Shelby.jpg";
import palmGroup from "./assets/PalmCoast/group.jpg";
import palmCig from "./assets/PalmCoast/cig.jpg";

function App() {

    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const palmRef = useRef(null);
  const ncRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 2025 Info
  const palmCoast = [
    {
      player: "Shelby Watford",
      score: [8, 4, 6, 5, 4, 6, 7, 4, 6, 6, 5, 5, 6, 5, 5, 6, 5, 6],
    },
    {
      player: "Tanner Gunderson",
      score: [6, 4, 8, 6, 6, 6, 8, 3, 6, 5, 4, 6, 6, 8, 6, 5, 3, 6],
    },
    {
      player: "Austin Fontana",
      score: [5, 6, 9, 7, 4, 7, 7, 5, 4, 6, 4, 7, 7, 5, 6, 7, 7, 6],
    },
    {
      player: "Zenan Sutton",
      score: [10, 4, 8, 7, 5, 6, 6, 5, 8, 9, 5, 6, 5, 7, 7, 6, 5, 7],
    },
    {
      player: "Daniel Peatt",
      score: [7, 4, 7, 7, 6, 10, 5, 7, 7, 6, 4, 9, 10, 6, 9, 16, 4, 6],
    },
  ];

  return (
    <>
      <div className={`section1-container app-container ${loaded ? "animate" : ""}`}>
        <div className="section1-trophy">
          <img src={trophy} alt="" />
        </div>
        <div className="section1-bartop">
          <div className="plaques">
            {/* 2025 Winner */}
            <Plaque
              onClick={() => scrollToSection(palmRef)}
              winner="2025 - Shelby Watford"
            />
            <Plaque
              onClick={() => scrollToSection(ncRef)}
              winner="2026 - Coming Soon "
            />
            <Plaque winner=" " />
            <Plaque winner=" " />
          </div>
        </div>
        {/* 2025 - Palm Coast */}
        <div ref={palmRef} className="palm-container">
          <div className="palm-title">PALM HARBOR GOLF CLUB</div>
          <div className="con">
            <div className="palm-score">
              <ScoreBoard players={palmCoast} />
            </div>
            <div className="palm-stats">
              <ul>
                <li>Quote of the week : Shelby - "Whos pissed my bed"</li>
                <li>
                  Shot of the trip : Zenans chip into the hole to save par
                </li>
                <li>Rounds of golf played : 4</li>
              </ul>
            </div>
          </div>

          <div className="palm-photo">
            <Photos photo1={palmShelby} photo2={palmGroup} photo3={palmCig} />
          </div>
        </div>
        <div className="divider"></div>
        {/* 2026 */}
        <div ref={ncRef} className="nc-container">
          <div className="palm-title">SQUIRTEE CUP 2026 - COMING SOON</div>
        </div>
      </div>
    </>
  );
}

export default App;
