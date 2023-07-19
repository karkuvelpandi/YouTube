import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Videos from "./components/Videos";

import "./assets/css/Common/Common.css";

function App() {
  const [isAppOnline, setIsAppOnline] = useState(true);
  const [isOnlineActive, setIsOnlineActive] = useState();
  let notifications = 48;
  useEffect(() => {
    document.title = `(${notifications}) YouTube`;
  }, [notifications]);
  // useEffect(() => {
  //   if (navigator.onLine) {
  //     setIsAppOnline(true);
  //   } else {
  //     setIsAppOnline(false);
  //   }
  // }, [isAppOnline]);
  window.addEventListener(
    "online",
    function (e) {
      setIsAppOnline(true);
      this.setTimeout(() => {
        setIsOnlineActive(false);
      }, 4000);
    },
    false
  );

  window.addEventListener(
    "offline",
    function (e) {
      setIsAppOnline(false);
      setIsOnlineActive(true);
    },
    false
  );
  return (
    <div className="main-wrapper">
      {isOnlineActive && (
        <div
          className={`fixed right-0 mr-10 bottom-10 w-fit h-fit p-4 rounded-lg text-white 
          ${isAppOnline ? "toastOut bg-green-500" : "toastIn bg-red-500"}`}
        >
          {" "}
          App is {isAppOnline ? "Online" : "Offline"}
        </div>
      )}

      <Header />
      <div className="content-flex">
        <Navigation />
        <Videos />
      </div>
    </div>
  );
}

export default App;
