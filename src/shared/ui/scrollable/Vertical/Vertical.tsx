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

const Vertical = ({ className, scrollbar, children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [scrollBar, setScrollBar] = useState({
    height: 0,
    top: 0,
  });

  const handleScroll = useCallback(() => {
    if (scrollRef.current && contentRef.current) {
      const content = contentRef.current;
      const scroll = scrollRef.current;

      setScrollBar({
        height: (scroll.clientHeight / content.clientHeight) * 100,
        top: (scroll.scrollTop / content.scrollHeight) * scroll.clientHeight,
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

  return (
    <div
      className={cn(s.scrollable, className)}
      style={
        {
          "--scrollHeight": `${scrollBar.height}%`,
          "--scrollPosition": `${scrollBar.top}px`,
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

export default Vertical;
