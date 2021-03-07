import "./App.css";
import Comic from "./components/Comic";
import { useState } from "react";

function App() {
  const latestComicUrl = "https://xkcd.now.sh/?comic=latest";
  const [comicUrl, setComicUrl] = useState(latestComicUrl);
  const [comicID, setComicID] = useState("");

  const handleChange = (e) => {
    setComicID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComicUrl(`https://xkcd.now.sh/?comic=${comicID}`);
  };

  return (
    <div className="App">
      <h1>XKCD SPA</h1>
      <form onSubmit={handleSubmit} data-testid="form">
        <label>
          Find a comic by ID:{" "}
          <input
            type="number"
            name="name"
            data-testid="input"
            value={comicID}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" data-testid="submit" />
      </form>
      <Comic url={comicUrl} />
    </div>
  );
}

export default App;
