import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = () => useContext(GlobalStateContext);

// eslint-disable-next-line react/prop-types
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    // Inicializa tu estado global aquí
    user: null,
    isLoggedIn: false,
    // Otros estados globales...  
});

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};