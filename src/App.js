import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <HomePage />;
    </div>
  );
}

export default App;
