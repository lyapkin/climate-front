"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { handleChangeFunc, RubricId } from "../model";

const RubricContext = createContext(
  {} as {
    currentRubric: RubricId;
    all: boolean;
    handleChange: handleChangeFunc;
  }
);

export const useRubrics = () => useContext(RubricContext);

const RubricProvider = ({ all, children }: RubricProviderProps) => {
  const [currentRubric, setCurrentRubric] = useState<RubricId>(null);
  const handleChange = useCallback((value: RubricId) => {
    setCurrentRubric(value);
  }, []);

  return (
    <RubricContext.Provider value={{ currentRubric, handleChange, all }}>
      {children}
    </RubricContext.Provider>
  );
};

interface RubricProviderProps extends PropsWithChildren {
  all: boolean;
}

export default RubricProvider;
