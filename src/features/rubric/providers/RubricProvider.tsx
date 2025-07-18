"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { handleChangeFunc, RubricId } from "../model";
import { useSearchParams } from "next/navigation";
import { isNumber } from "@/src/shared/utils";
import { useChangeSearchParams } from "@/src/shared/utils/client";

const RubricContext = createContext(
  {} as {
    currentRubric: RubricId;
    all: boolean;
    handleChange: handleChangeFunc;
  }
);

export const useRubrics = () => useContext(RubricContext);

const RubricProvider = ({ all, children, type }: RubricProviderProps) => {
  const [currentRubric, setCurrentRubric] = useState<RubricId>(null);

  const searchParams = useSearchParams();
  const paramRubric = searchParams.get("rubric");

  const current =
    type === "state"
      ? currentRubric
      : isNumber(paramRubric)
      ? Number(paramRubric)
      : null;

  const changeSearchParams = useChangeSearchParams();

  const handleChange = useCallback(
    (value: RubricId) => {
      if (type === "state") {
        setCurrentRubric(value);
      } else {
        const urlSearchParams = new URLSearchParams();
        if (value) {
          urlSearchParams.set("rubric", String(value));
        }
        changeSearchParams(urlSearchParams, { noPage: true });
      }
    },
    [type, changeSearchParams]
  );

  return (
    <RubricContext.Provider
      value={{ currentRubric: current, handleChange, all }}
    >
      {children}
    </RubricContext.Provider>
  );
};

interface RubricProviderProps extends PropsWithChildren {
  all: boolean;
  type: "state" | "params";
}

export default RubricProvider;
