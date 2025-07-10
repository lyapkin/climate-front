import { type Rubric } from "../model";
import RubricsList from "./RubricsList";

const RubricsLoader = async ({ getRubricApi }: RubricsLoaderProps) => {
  const rubrics = await getRubricApi();
  return <RubricsList rubrics={rubrics} />;
};

interface RubricsLoaderProps {
  getRubricApi: () => Promise<Rubric[]>;
}

export default RubricsLoader;
