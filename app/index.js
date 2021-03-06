import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import Top from './components/Top';
import New from './components/New';

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => this.setState(({ theme }) => ({ theme: theme === "light" ? "dark" : "light" }))};

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Top} />
                  <Route exact path='/new' component={New} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
