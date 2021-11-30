import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import List from "./components/list/List";

const App = () => {
  return <div className="app">
    <Intro/>
    <About/>
    <List/>
  </div>;
};

export default App;