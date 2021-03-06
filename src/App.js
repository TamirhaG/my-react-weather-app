import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/in/tamirha/"
            target="_blank"
            rel="noreferrer"
          >
            Tamirha Giraldo
          </a>
          {""} and is {""}
          <a
            href="https://github.com/TamirhaG/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
