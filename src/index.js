import "./config/ReactotronConfig";

import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";
import { setNavigator } from "./services/navigation";
export default class App extends Component {
  render() {
	console.disableYellowBox = true;	
    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
