import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUsScreen from "./screens/AboutUsScreen";
import HouseFellowship from "./screens/HouseFellowship";
import MediaScreen from "./screens/MediaScreen";
import ContactScreen from "./screens/ContactScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import ComingsoonScreen from "./screens/ComingsoonScreen";
import OnlineGivingScreen from "./screens/OnlineGivingScreen";
import HymnScreen from "./screens/HymnScreen";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />

      <main>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={450}>
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutUsScreen />} />
              <Route path="/housefellowship" element={<HouseFellowship />} />
              <Route path="/media" element={<MediaScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/coming" element={<ComingsoonScreen />} />
              <Route path="/onlinegiving" element={<OnlineGivingScreen />} />

              <Route path="/hymn" element={<HymnScreen />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <Footer />
    </div>
  );
}

export default App;
