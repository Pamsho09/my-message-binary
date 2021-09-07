import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Message from "../containers/Message";
export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/message/:binary" component={Message} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}
