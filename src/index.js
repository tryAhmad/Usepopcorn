import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import { useState } from 'react';
// import './index.css';
// import App from './App';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="black" size="29" defaultRating={1} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
      defaultRating={0}
    />
    <Test />
  </React.StrictMode>
);

