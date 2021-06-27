import "./App.css";
import CatPic from "./Components/CatPic";
import MotivationQuotes from "./Components/MotivationQuotes";
import Weather from "./Components/SingaporeWeather";

import background from "./pexels-photo.jpeg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1>Start your day!</h1>
      <MotivationQuotes />
      <Weather />
      <CatPic />
    </div>
  );
}

export default App;
