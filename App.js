import React from 'react';
import {DataProvider} from './src/context/DataContext';
import RootStack from './src/navigations/RootStack';

export default function App() {
  return (
    <DataProvider>
      <RootStack />
    </DataProvider>
  );
}
