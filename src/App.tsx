import React from 'react';
import PlayArea from "./components/PlayArea";
import './App.css';

function App() {
  return (
    <div className="App">
      <main style={MainContainer}>  
        <div style={PlayAreaContainer}>
          <PlayArea />
        </div>
      </main>
    </div>
  );
}

export default App;


const MainContainer: React.CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E9EAEE",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  padding: "20px",
  boxSizing: "border-box",
};

const PlayAreaContainer: React.CSSProperties = {
  paddingTop: "3vh",

  width: "100%",
  maxWidth: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  backgroundColor: "#FFFFFF",
};