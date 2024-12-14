import { createContext, useContext } from 'react';

// Context for the app
export const AppContext = createContext(null);

// Hook to access context
export const useAppContext = () => useContext(AppContext);
