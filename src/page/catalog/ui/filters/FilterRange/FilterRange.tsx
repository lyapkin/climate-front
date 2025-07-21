"use client";
import { ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import s from "./styles.module.css";
import fs from "../styles.module.css";
import { Expender } from "@/src/shared/components";
import { ArrowDownIcon } from "@/src/shared/icons";
import { useChangeSearchParams } from "@/src/shared/utils/client";
import { useRangeState } from "./useRangeState";
import cn from "classnames";

const FilterRange = ({
  title,
  type,
  minRange,
  maxRange,
  disabled,
}: FilterRangeProps) => {
  const searchParams = useSearchParams();

  const [rangeRepr, setRangeRepr] = useRangeState(type, minRange, maxRange);

  const changeSearchParams = useChangeSearchParams();

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val < 0 || val > maxRange) return;

    const inputType = e.target.dataset["type"];

    if (inputType !== "min" && inputType !== "max") {
      throw new Error(
        'inputType in FilterRange must be "min" or "max"; it\'s ' +
          String(inputType)
      );
    }

    if (inputType === "max" && val <= parseInt(rangeRepr.min)) {
      setRangeRepr((prev) => ({
        ...prev,
        max: String(parseInt(rangeRepr.min) + 1),
      }));
      return;
    }
    if (inputType === "min" && val >= parseInt(rangeRepr.max)) {
      setRangeRepr((prev) => ({
        ...prev,
        min: String(parseInt(rangeRepr.max) - 1),
      }));
      return;
    }

    setRangeRepr((prev) => ({ ...prev, [inputType]: val ? String(val) : "" }));
  };

  const applyFilter = () => {
    const min = rangeRepr.min || String(minRange);
    const max = rangeRepr.max || String(maxRange);

    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set(`${type}_min`, min);
    urlSearchParams.set(`${type}_max`, max);

    if (!rangeRepr.min || parseInt(rangeRepr.min) === minRange) {
      urlSearchParams.delete(`${type}_min`);
    }
    if (!rangeRepr.max || parseInt(rangeRepr.max) === maxRange) {
      urlSearchParams.delete(`${type}_max`);
    }

    changeSearchParams(urlSearchParams, { noPage: true });
    setRangeRepr({ min, max });
  };

  const sliderSelected = getSliderSelected(rangeRepr, {
    min: minRange,
    max: maxRange,
  });

  return (
    <Expender
      header={<span className={fs.filter__head}>{title}</span>}
      indicator={<ArrowDownIcon style={{ color: "#7b8990" }} />}
      isOpenDefault={!disabled}
      className={fs.filter}
    >
      <div className={cn(s.range, { [s.range_disabled]: disabled })}>
        <div className={s.range__input}>
          <input
            type="number"
            data-type="min"
            value={rangeRepr.min}
            onChange={handleRangeChange}
            onBlur={applyFilter}
            disabled={disabled}
          />
          <input
            type="number"
            data-type="max"
            value={rangeRepr.max}
            onChange={handleRangeChange}
            onBlur={applyFilter}
            disabled={disabled}
          />
        </div>
        <div className={s.range__slider}>
          {sliderSelected}
          <div className={s.range__sliderInput}>
            <input
              type="range"
              data-type="min"
              min={minRange}
              max={maxRange - 1}
              value={rangeRepr.min || minRange}
              step="1"
              onChange={handleRangeChange}
              onMouseUp={applyFilter}
              onTouchEnd={applyFilter}
              disabled={disabled}
            />
            <input
              type="range"
              data-type="max"
              min={minRange + 1}
              max={maxRange}
              value={rangeRepr.max || maxRange}
              step="1"
              onChange={handleRangeChange}
              onMouseUp={applyFilter}
              onTouchEnd={applyFilter}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </Expender>
  );
};

interface FilterRangeProps {
  title: string;
  type: string;
  minRange: number;
  maxRange: number;
  disabled: boolean;
}

const getSliderSelected = (
  rangeRepr: { min: string; max: string },
  range: { min: number; max: number }
) => {
  const selectedLeftPosition = `${
    ((Number(rangeRepr.min) - range.min || 1) / (range.max - range.min)) * 100
  }%`;
  const selectedRightPosition = `${
    100 -
    ((Number(rangeRepr.max) - range.min || range.max - range.min) /
      (range.max - range.min)) *
      100
  }%`;

  return (
    <span
      className={s.range__slider_selected}
      style={{ left: selectedLeftPosition, right: selectedRightPosition }}
    />
  );
};

export default FilterRange;
