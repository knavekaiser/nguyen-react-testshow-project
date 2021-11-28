import "./App.scss";
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
