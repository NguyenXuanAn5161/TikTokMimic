import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Router from "./Router/Router";
import Reducers from "./redux/reducers/Reducers";

const store = createStore(Reducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
