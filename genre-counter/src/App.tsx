import { useState } from "react";
import Genre from "./components/genre";

function App() {
  const [count, setCount] = useState(0); // resultaat van de functie useState >> return [waarde, updateWaarde() {}]

  const [genres, setGenres] = useState(["comedie", "action", "triller"]);

  const addCount = () => {
    // ik ga mijn count opnieuw instellen
    setCount((count) => count + 1); // in de functie setCount( CB(count) )
  };

  return (
    <>
      <h1>Welkom - {count}</h1>
      <button onClick={addCount}>Add count</button>

      {genres.map((genre) => (
        <Genre title={genre} startLikes={2} />
      ))}
    </>
  );
}

export default App;
