import "./App.css";
import "@fontsource/roboto/400.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Todos from "./components/Todos/Todos";
import TodoDetail from "./components/TodoDetail/TodoDetail";
import PageError from "./components/PageError/PageError";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/todos">
            <Todos></Todos>
          </Route>
          <Route exact path="/todo-detail">
            <TodoDetail></TodoDetail>
          </Route>
          <Route path="*">
            <PageError></PageError>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
