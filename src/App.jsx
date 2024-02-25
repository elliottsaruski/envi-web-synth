import { FaPlusSquare, FaLock, FaMinusSquare } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <main>
      <heading className="header">
        <h1>ENVI BASS SYNTH</h1>
      </heading>
      <section className="top">
        <div className="XY-wrapper"></div>
        <div className="lock-note-wrapper">
          <FaPlusSquare />
          <FaLock />
          <FaMinusSquare />
        </div>
      </section>
      <section className="OSCs-wrapper">
        <div className="osc" id="OSC1">
          <h3 className="osc-title">OSC 1</h3>
          <button className="toggle"></button>
        </div>
        <div className="osc" id="OSC2">
          <h3 className="osc-title">OSC 2</h3>
          <button className="toggle"></button>
        </div>
      </section>
      <section className="env-and-effects-wrapper">
        <div className="env-and-effects-nav">
          <h4 className="env-title">Envelope</h4>
          <h4 className="effects-title">Effects</h4>
        </div>
        <div className="envelope-wrapper">
          <div>
            <p>A</p> <input type="range" className="adsr"></input>
          </div>
          <div>
            <p>D</p> <input type="range" className="adsr"></input>
          </div>
          <div>
            <p>S</p> <input type="range" className="adsr"></input>
          </div>
          <div>
            <p>R</p> <input type="range" className="adsr"></input>
          </div>
        </div>
        <div className="effects-nav-wrapper">
          <div className="effects-items">
            <div className="effect">
              <input type="checkbox" />
              <h5 className="effect-title">AM/FM</h5>
            </div>
            <div className="effect">
              <input type="checkbox" />
              <h5 className="effect-title">Filter</h5>
            </div>
            <div className="effect">
              <input type="checkbox" />
              <h5 className="effect-title">Distortion</h5>
            </div>
            <div className="effect">
              <input type="checkbox" />
              <h5 className="effect-title">Compressor</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
