import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./_app.scss";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
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
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default App;
