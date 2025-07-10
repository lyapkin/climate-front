import { TrashBinIcon } from "@/src/shared/icons";
import s from "./styles.module.css";
import { Button } from "@/src/shared/ui";

const Clear = () => {
  return (
    <Button variant="secondary" className={s.clear} icon={<TrashBinIcon />}>
      Сбросить фильтры
    </Button>
  );
};

export default Clear;
