import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <App />
        </ApolloHooksProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
