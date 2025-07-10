import { PropsWithChildren, Suspense } from "react";
import s from "./styles.module.css";
import cn from "classnames";
import RubricProvider from "../providers/RubricProvider";
import { type Rubric } from "../model";
import RubricsLoader from "./RubricsLoader";
import RubricsSkeleton from "./RubricsSkeleton";

const Rubrics = ({
  children,
  getRubricApi,
  className,
  all = true,
}: RubricsProps) => {
  return (
    <RubricProvider all={all}>
      <div className={cn(s.rubricsBlock, className)}>
        <Suspense fallback={<RubricsSkeleton />}>
          <RubricsLoader getRubricApi={getRubricApi} />
        </Suspense>
      </div>
      {children}
    </RubricProvider>
  );
};

interface RubricsProps extends PropsWithChildren {
  all?: boolean;
  getRubricApi: () => Promise<Rubric[]>;
  className?: string;
}

export default Rubrics;
