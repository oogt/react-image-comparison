import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";

import "./App.css";

import bottleBase from "./images/bottle-base.png";
import bottleBlue from "./images/bottle-blue.png";
import bottleGreen from "./images/bottle-green.png";
import bottlePink from "./images/bottle-pink.png";
import bottleYellow from "./images/bottle-yellow.png";

const Color = ({ color, onClick }) => (
  <div className="color" onClick={onClick} style={{ backgroundColor: color }} />
);

function App() {
  const [selectedBottle, setSelectedBottle] = useState('green');
  return (
    <div className="App">
      <div className="compare-container">
        {selectedBottle === 'blue' && (
          <ReactCompareImage
            leftImage={bottleBlue}
            rightImage={bottleBase}
            sliderLineWidth={0}
            handleSize={40}
          />
        )}
        {selectedBottle === 'green' && (
          <ReactCompareImage
            leftImage={bottleGreen}
            rightImage={bottleBase}
            sliderLineWidth={0}
            handleSize={40}
          />
        )}
        {selectedBottle === 'yellow' && (
          <ReactCompareImage
            leftImage={bottleYellow}
            rightImage={bottleBase}
            sliderLineWidth={0}
            handleSize={40}
          />
        )}
        {selectedBottle === 'pink' && (
          <ReactCompareImage
            leftImage={bottlePink}
            rightImage={bottleBase}
            sliderLineWidth={0}
            handleSize={40}
          />
        )}
        <div className="colors-container">
          <Color color="#2e46e0" onClick={() => setSelectedBottle('blue')} />
          <Color color="#e1c400" onClick={() => setSelectedBottle('yellow')} />
          <Color color="#e200bb" onClick={() => setSelectedBottle('pink')} />
          <Color color="#009900" onClick={() => setSelectedBottle('green')} />
        </div>
      </div>
    </div>
  );
}

export default App;
