import { isNumber } from "@/src/shared/utils";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const useRangeState = (
  type: string,
  minRange: number,
  maxRange: number
) => {
  const searchParams = useSearchParams();

  const min = searchParams.get(`${type}_min`) || "";
  const max = searchParams.get(`${type}_min`) || "";

  const currentMin = isNumber(min) ? min : String(minRange);
  const currentMax = isNumber(max) ? max : String(maxRange);

  return useState({
    min: currentMin,
    max: currentMax,
  });
};
