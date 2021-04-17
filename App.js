// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Imports: Screens
import CounterView from 'screens/CounterView';

// Imports: Redux Store
import store from 'store/index';

// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
}