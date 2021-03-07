import "./App.css";
import Comic from "./components/Comic";

function App() {
  const latestComicUrl = "https://xkcd.now.sh/?comic=latest";

  return (
    <div className="App">
      <h1>XKCD SPA</h1>
      <Comic url={latestComicUrl} />
    </div>
  );
}

export default App;
