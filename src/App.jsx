import "./App.css";
import Page from "./Pages/Page";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Page />

      </BrowserRouter>
    </div>
  );
}

export default App;
