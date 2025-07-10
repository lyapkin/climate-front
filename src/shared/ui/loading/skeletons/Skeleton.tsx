import { HTMLAttributes } from "react";
import s from "../styles.module.css";
import cn from "classnames";

const Skeleton = ({ light = false, className, ...rest }: SkeletonProps) => {
  return (
    <span className={className} {...rest}>
      <span className={cn(s.skeleton, { [s.light]: light })}></span>
    </span>
  );
};

interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  light?: boolean;
}

export default Skeleton;
