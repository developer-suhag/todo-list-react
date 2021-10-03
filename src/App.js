import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageError from "./components/PageError/PageError";
import TodoDetail from "./components/TodoDetail/TodoDetail";
import Todos from "./components/Todos/Todos";
import man from "./images/man.png";

export const UserContext = createContext("");

function App() {
  return (
    <UserContext.Provider value={man}>
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
            <Route exact path="/todo-detail/:todoId">
              <TodoDetail></TodoDetail>
            </Route>
            <Route path="*">
              <PageError></PageError>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
