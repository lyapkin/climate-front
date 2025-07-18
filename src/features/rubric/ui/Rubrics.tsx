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
  type = "state",
}: RubricsProps) => {
  return (
    <Suspense>
      <RubricProvider all={all} type={type}>
        <div className={cn(s.rubricsBlock, className)}>
          <Suspense fallback={<RubricsSkeleton />}>
            <RubricsLoader getRubricApi={getRubricApi} />
          </Suspense>
        </div>
        {children}
      </RubricProvider>
    </Suspense>
  );
};

interface RubricsProps extends PropsWithChildren {
  all?: boolean;
  getRubricApi: () => Promise<Rubric[]>;
  className?: string;
  type?: "state" | "params";
}

export default Rubrics;
