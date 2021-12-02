import React from 'react';
import About from "./components/about/About";
import ContactMe from "./components/contactMe/ContactMe";
import Intro from "./components/intro/Intro";
import List from "./components/list/List";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./contex";
import { useContext } from "react";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
  <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
    <Toggle/>
    <Intro/>
    <About/>
    <List/>
    <ContactMe/>
  </div>);
};

export default App;