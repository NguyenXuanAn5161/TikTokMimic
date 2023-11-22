import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Router from "./Router/Router";
import Reducers from "./redux/reducers/Reducers";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import savePost from "./components/savePost/savePost";
import RouterStack from "./Router/RouterStack";

const store = createStore(Reducers, applyMiddleware(thunk));
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
