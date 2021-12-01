import About from "./components/about/About";
import ContactMe from "./components/contactMe/ContactMe";
import Intro from "./components/intro/Intro";
import List from "./components/list/List";

const App = () => {
  return <div className="app">
    <Intro/>
    <About/>
    <List/>
    <ContactMe/>
  </div>;
};

export default App;