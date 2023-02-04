import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = "Russ";
  let auth = false;
  let seasons = ["Spring", "Summer", "Fall", "Winter"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="name">Name</label>
          <input id="name" type="Name" />
          <h1>{name}</h1>
          <h1>{auth ? "Logged In" : "Logged Out"}</h1>
          <p>
            Simple react <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            {seasons.map((season, index) => (
              <li key={index}>{season}</li>
            ))}
          </ul>
          <p>{2 + 1}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Test
          </a>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
