import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "./center.css";

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
