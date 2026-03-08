import { PropsWithChildren } from "react";
import { Horizontal } from "./Horizontal";
import { Vertical } from "./Vertical";

const Scrollable = ({
  children,
  className,
  orientation = "vertical",
  scrollbar = false,
}: Props) => {
  if (orientation === "horizontal") {
    return (
      <Horizontal className={className} scrollbar={scrollbar}>
        {children}
      </Horizontal>
    );
  }

  return (
    <Vertical className={className} scrollbar={scrollbar}>
      {children}
    </Vertical>
  );
};

interface Props extends PropsWithChildren {
  className?: string;
  orientation?: "vertical" | "horizontal";
  scrollbar?: boolean;
}

export default Scrollable;
