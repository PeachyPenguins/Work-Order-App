import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './pages/Map'

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider as StoreProvider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  return (
    <StoreProvider store={store}>
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Map"
              component={Map}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
