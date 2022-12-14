import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Sidebar, About, Skills, Projects, Footer } from "./components";
import { HomePage } from "./pages";
import "./index.css";

function App() {
  // Theme set starts
  const currentTheme =
    localStorage.getItem("ThemeChangedStatus") === "true" ? true : false;

  document.documentElement.className = currentTheme
    ? "orange-theme"
    : "blue-theme";
  // Theme set ends
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
