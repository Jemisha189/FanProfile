import React, {createContext, useState} from 'react';

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <DataContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
      }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
