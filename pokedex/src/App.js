
import './App.css';
import { GlobalState } from "./Contexts/GlobalState";
import { Router } from "./Router/Router"
import { createGlobalStyle } from "styled-components"
function App() {
  const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    
    }
    `;
  return (
    <GlobalState>
          <GlobalStyle/>
          <Router /> 
    </GlobalState>
  );
}

export default App;
