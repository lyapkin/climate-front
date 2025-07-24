"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import { ArrowButton } from "../../ui";
import Dots from "./Dots";
import { useWindowWidth } from "../../utils/client";

const Slider = ({
  children,
  dots = false,
  className,
  buttonsClassName,
  dotsClassName,
}: SliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();
  const [itemsCountInClientWidth, setItemsCountInClientWidth] = useState<
    number | undefined
  >(undefined);
  const [stepPixels, setStepPixels] = useState<number | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<number | undefined>(undefined);
  const [clientWidth, setClientWidth] = useState<number | undefined>(undefined);
  const [slidesListWidth, setSlidesListWidth] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const firstChild = containerRef.current.firstElementChild;
    if (firstChild instanceof HTMLElement && firstChild.nextElementSibling) {
      const clientWidth = containerRef.current.clientWidth;
      const containerWidth =
        clientWidth -
        parseInt(window.getComputedStyle(containerRef.current).paddingLeft) -
        parseInt(window.getComputedStyle(containerRef.current).paddingRight);
      const gap =
        firstChild.nextElementSibling?.getBoundingClientRect().left -
        firstChild?.getBoundingClientRect().right;
      const itemsCountInClientWidth = Math.floor(
        containerWidth / firstChild.offsetWidth
      );
      const stepInPixels =
        itemsCountInClientWidth * firstChild.offsetWidth +
        itemsCountInClientWidth * gap;

      setSlidesListWidth(
        firstChild.offsetWidth * React.Children.count(children) +
          (React.Children.count(children) - 1) * gap
      );
      setClientWidth(containerWidth);
      setItemsCountInClientWidth(itemsCountInClientWidth);
      setStepPixels(stepInPixels);
      setCurrentStep(0);
    }
  }, [width, children]);

  useEffect(() => {
    if (!containerRef.current || currentStep === undefined || !stepPixels)
      return;

    containerRef.current.scroll({
      left: currentStep * stepPixels,
      behavior: "smooth",
    });
  }, [currentStep, stepPixels]);

  const handleLeftSlide = () => {
    setCurrentStep((prev) => prev && prev - 1);
  };

  const handleRightSlide = () => {
    setCurrentStep((prev) =>
      prev !== undefined &&
      itemsCountInClientWidth &&
      prev < Math.ceil(React.Children.count(children) / itemsCountInClientWidth)
        ? prev + 1
        : prev
    );
  };

  const handleScroll = () => {
    if (
      !containerRef.current ||
      currentStep === undefined ||
      !stepPixels ||
      !itemsCountInClientWidth ||
      !clientWidth
    )
      return;

    const newStep = Math.floor(containerRef.current.scrollLeft / stepPixels);
    if (newStep > currentStep) {
      setCurrentStep(newStep);
    } else if (newStep < currentStep - 1) {
      setCurrentStep(newStep + 1);
    } else if (containerRef.current.scrollLeft === 0) {
      setCurrentStep(0);
    } else if (
      containerRef.current.scrollLeft + clientWidth ===
      slidesListWidth
    ) {
      setCurrentStep(
        Math.ceil(React.Children.count(children) / itemsCountInClientWidth) - 1
      );
    }
  };

  return (
    <>
      <div
        className={cn(s.content, className)}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <div className={cn(s.buttons, buttonsClassName)}>
        <ArrowButton
          direction="left"
          onClick={handleLeftSlide}
          disabled={!currentStep}
        />
        <ArrowButton
          direction="right"
          onClick={handleRightSlide}
          disabled={
            itemsCountInClientWidth
              ? currentStep ===
                Math.ceil(
                  React.Children.count(children) / itemsCountInClientWidth
                ) -
                  1
              : true
          }
        />
      </div>
      {dots && currentStep !== undefined && itemsCountInClientWidth && (
        <div className={cn(s.dots, dotsClassName)}>
          <Dots
            amount={Math.ceil(
              React.Children.count(children) / itemsCountInClientWidth
            )}
            current={currentStep}
            onClick={(i: number) => {
              setCurrentStep(i);
            }}
          />
        </div>
      )}
    </>
  );
};

interface SliderProps extends HTMLAttributes<HTMLElement> {
  dots?: boolean;
  buttonsClassName?: string;
  dotsClassName?: string;
}

export default Slider;
