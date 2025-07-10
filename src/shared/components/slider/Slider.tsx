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
  const [itemsInSlide, setItemsInSlide] = useState<number | undefined>(
    undefined
  );
  const [step, setStep] = useState<number | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = useState<number | undefined>(
    undefined
  );
  const [clientWidth, setClientWidth] = useState<number | undefined>(undefined);

  const [isScrollReady, setIsScrollReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const firstChild = containerRef.current.firstElementChild;
    if (firstChild instanceof HTMLElement && firstChild.nextElementSibling) {
      const clientWidth = containerRef.current.clientWidth;
      const realClientWidth =
        clientWidth -
        parseInt(window.getComputedStyle(containerRef.current).paddingLeft) -
        parseInt(window.getComputedStyle(containerRef.current).paddingRight);
      const gap =
        firstChild.nextElementSibling?.getBoundingClientRect().left -
        firstChild?.getBoundingClientRect().right;
      const itemsInSlide = Math.floor(realClientWidth / firstChild.offsetWidth);
      const stepInPixels =
        itemsInSlide * firstChild.offsetWidth + itemsInSlide * gap;

      setClientWidth(clientWidth);
      setItemsInSlide(itemsInSlide);
      setStep(stepInPixels);
      setCurrentSlide(0);
    }
  }, [width]);

  useEffect(() => {
    if (isScrollReady) {
      if (!containerRef.current || currentSlide === undefined || !step) return;

      containerRef.current.scroll({
        left: currentSlide * step,
        behavior: "smooth",
      });
      setIsScrollReady(false);
    }
  }, [isScrollReady, currentSlide, step]);

  const handleLeftSlide = () => {
    setCurrentSlide((prev) => prev && prev - 1);
    setIsScrollReady(true);
  };

  const handleRightSlide = () => {
    setCurrentSlide((prev) =>
      prev !== undefined &&
      itemsInSlide &&
      prev < Math.ceil(React.Children.count(children) / itemsInSlide)
        ? prev + 1
        : prev
    );
    setIsScrollReady(true);
  };

  const handleScroll = () => {
    if (
      !containerRef.current ||
      currentSlide === undefined ||
      !step ||
      !itemsInSlide ||
      !clientWidth
    )
      return;
    console.log(containerRef.current.scrollLeft, currentSlide * step);
    if (containerRef.current.scrollLeft >= (currentSlide + 1) * step) {
      setCurrentSlide((prev) =>
        prev !== undefined &&
        itemsInSlide &&
        prev < Math.ceil(React.Children.count(children) / itemsInSlide)
          ? prev + 1
          : prev
      );
    }
    if (containerRef.current.scrollLeft <= currentSlide * step) {
      setCurrentSlide((prev) => prev && prev - 1);
    }
    // if rigth side reach the end then currentSlide must be last value

    if (
      containerRef.current.scrollLeft + clientWidth >=
      containerRef.current.scrollWidth - 5
    ) {
      setCurrentSlide(
        Math.ceil(React.Children.count(children) / itemsInSlide) - 1
      );
    }
    // if left side reach the begining then currentSlide must be 0
    if (containerRef.current.scrollLeft === 0) {
      setCurrentSlide(0);
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
          disabled={!currentSlide}
        />
        <ArrowButton
          direction="right"
          onClick={handleRightSlide}
          disabled={
            itemsInSlide
              ? currentSlide ===
                Math.ceil(React.Children.count(children) / itemsInSlide) - 1
              : true
          }
        />
      </div>
      {dots && currentSlide !== undefined && itemsInSlide && (
        <div className={cn(s.dots, dotsClassName)}>
          <Dots
            amount={Math.ceil(React.Children.count(children) / itemsInSlide)}
            current={currentSlide}
            onClick={setCurrentSlide}
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
