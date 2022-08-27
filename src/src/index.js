import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import useWindowSize from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default () => {
// const { width, height } = useWindowSize();
// return <Confetti width={width} height={height} />;
// };
