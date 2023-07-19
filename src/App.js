import { useEffect } from "react";
import Header from "./Application/Header";
import Navigation from "./Application/Navigation";
import Videos from "./Application/Videos";

import "./Assets/css/Common/Common.css";

function App() {
  let notifications = 48;
  useEffect(() => {
    document.title = `(${notifications}) YouTube`;
  }, [notifications]);

  return (
    <div className="main-wrapper">
      <Header />
      <div className="content-flex">
        <Navigation />
        <Videos />
      </div>
    </div>
  );
}

export default App;
