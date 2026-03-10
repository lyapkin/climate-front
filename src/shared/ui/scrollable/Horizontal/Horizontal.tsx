"use client";
import {
  CSSProperties,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./styles.module.scss";
import cn from "classnames";

const Horizontal = ({ className, scrollbar, children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [scrollBar, setScrollBar] = useState({
    width: 0,
    left: 0,
  });

  const handleScroll = useCallback(() => {
    if (scrollRef.current && contentRef.current) {
      const content = contentRef.current;
      const scroll = scrollRef.current;

      setScrollBar({
        width: (scroll.clientWidth / content.clientWidth) * 100,
        left: (scroll.scrollLeft / content.scrollWidth) * scroll.clientWidth,
      });
    }
  }, []);

  useEffect(() => {
    const obj = scrollRef.current;
    if (!obj) return;

    // Создаем наблюдатель за размерами
    const resizeObserver = new ResizeObserver(() => {
      handleScroll();
    });

    // Следим за самим контейнером и его внутренним контентом
    resizeObserver.observe(obj);
    if (obj.firstChild) {
      resizeObserver.observe(obj.firstChild as Element);
    }

    return () => resizeObserver.disconnect();
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      className={cn(s.scrollable, className)}
      style={
        {
          "--scrollHeight": `${scrollBar.width}%`,
          "--scrollPosition": `${scrollBar.left}px`,
          "--scrollbar": scrollbar ? "2px" : "0px",
        } as CSSProperties
      }
    >
      <div className={s.container}>
        <div className={s.scroll} onScroll={handleScroll} ref={scrollRef}>
          <div className={s.scroll__content} ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props extends PropsWithChildren {
  className?: string;
  scrollbar: boolean;
}

export default Horizontal;
