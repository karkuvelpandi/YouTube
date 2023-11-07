import React, { useState } from "react";
import "./_app.scss";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleSidebarHandler = () =>
    setToggleSidebar((prevValue) => !prevValue);

  return (
    <>
      <Header toggleSidebarHandler={toggleSidebarHandler} />
      <div className="app__container">
        <Sidebar
          toggleSidebar={toggleSidebar}
          toggleSidebarHandler={toggleSidebarHandler}
        />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
