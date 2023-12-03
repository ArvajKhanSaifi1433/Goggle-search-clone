import { createContext, useContext } from "react";

export const createGoggleContext = createContext(null);

export const GoggleContextProvider = createGoggleContext.Provider;

export const useGoggleContext = () => useContext(createGoggleContext);
