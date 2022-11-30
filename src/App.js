import './App.css';
import { useState } from 'react';

function App() {
  const [isReversed, setIsReversed] = useState(false);
  const [stars, setStars] = useState([]);

  const cahngeLength = ({target}) => {
    const { value } = target;
    const data = [];

    for(let i = +value; i > 0; i--) {
      const stars = new Array(i).fill("*").join(" ");
      data.push(stars);
    }

    setStars(data);
  }

  const reversStars = () => {
    setStars(stars.reverse());
    setIsReversed(!isReversed);
  }

  return (
    <div className="App">
      <div className="container">
        <input onChange={cahngeLength}/>
        <div className="stars-container">
          {stars.map((stars, id) => (
            <div
              key={id}
              className={`star-item ${isReversed ? 'reversed' : ''}`}
            >{stars}</div>))
          }
        </div>
        <button onClick={reversStars}>Revers</button>
      </div>
    </div>
  );
}

export default App;
